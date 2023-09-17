const {
  TeamsActivityHandler,
  CardFactory,
  TurnContext,
} = require("botbuilder");
const rawWelcomeCard = require("./adaptiveCards/welcome.json");
const rawLearnCard = require("./adaptiveCards/learn.json");
const cardTools = require("@microsoft/adaptivecards-tools");
const axios = require("axios");
const { JSDOM } = require("jsdom");

class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();

    // record the likeCount
    this.likeCountObj = { likeCount: 0 };

    this.onMessage(async (context, next) => {
      console.log("Running with Message Activity.");
      let txt = context.activity.text;
      const removedMentionText = TurnContext.removeRecipientMention(
        context.activity
      );
      if (removedMentionText) {
        // Remove the line break
        txt = removedMentionText.toLowerCase().replace(/\n|\r/g, "").trim();
      }

      // https://developer.microsoft.com/en-us/graph/graph-explorer Teams Beta: GET replies to message in a channel
      const teamId = "0e90fc8a-94b3-4245-84f1-854c2046ae8c";
      const channelId = context.activity.channelData.channel.id;
      const messageId = await this.getMessageId(context);

      try {
        const authToken = process.env.GRAPH_ACCESS_TOKEN;
        const headers = {
          authorization: `Bearer ${authToken}`,
        };
        // GET main initial message
        // https://graph.microsoft.com/beta/teams/{group-id-for-teams}/channels/{channel-id}/messages/{message-id}
        let response = await axios.get(
          `https://graph.microsoft.com/beta/teams/${teamId}/channels/${channelId}/messages/${messageId}`,
          {
            headers,
          }
        );
        const firstMessage = response.data.body;

        // GET all subsequent messsages in thread
        response = await axios.get(
          `https://graph.microsoft.com/v1.0/teams/${teamId}/channels/${channelId}/messages/${messageId}/replies`,
          // `https://graph.microsoft.com/beta/teams/0e90fc8a-94b3-4245-84f1-854c2046ae8c/channels/19:783ae848203546e3acc0d2c7998a942b@thread.tacv2/messages/1694878371226/replies`,
          {
            headers,
          }
        );

        // Re-order and format messages from html -> text
        let htmlMessages = response.data.value.map((r) => r.body);
        htmlMessages.push(firstMessage);
        htmlMessages = htmlMessages.reverse();
        htmlMessages.push(txt);

        let plainTextMessages = htmlMessages.map((msg) => {
          try {
            // Parse the HTML string into a DOM element and extract its plain text
            const dom = new JSDOM(msg.content);
            let text = dom.window.document.firstChild.textContent;
            // Preprocess text by removing bot references, newline chars, and empty messages
            return text.replace(/(\r\n|\n|\r|TaskKeepr-local)/gm, "");
          } catch (err) {
            return "";
          }
        });

        plainTextMessages = plainTextMessages.filter((txt) => txt);

        // POST messages to Cohere summarizer
        axios
          .post("http://localhost:5000/messages", {
            data: {
              userId: context.activity.from.id,
              userName: context.activity.from.name,
              teamId,
              channelId,
              messageId,
              messages: plainTextMessages,
            },
          })
          .then(console.log("API HIT"))
          .catch((err) => console.error(err));

        // FIXME: add confirmation in teams channel that bot worked

        // this.likeCountObj.likeCount = 0;
        // const card = cardTools.AdaptiveCards.declare(rawLearnCard).render(
        //   this.likeCountObj
        // );
        // await context.sendActivity({
        //   attachments: [CardFactory.adaptiveCard(card)],
        // });
      } catch (err) {
        console.error(err);
        // FIXME: add error in teams channel
      }

      await next();
    });

    // Listen to MembersAdded event, view https://docs.microsoft.com/en-us/microsoftteams/platform/resources/bot-v3/bots-notifications for more events
    this.onMembersAdded(async (context, next) => {
      const membersAdded = context.activity.membersAdded;
      for (let cnt = 0; cnt < membersAdded.length; cnt++) {
        if (membersAdded[cnt].id) {
          const card =
            cardTools.AdaptiveCards.declareWithoutData(rawWelcomeCard).render();
          await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(card)],
          });
          break;
        }
      }
      await next();
    });
  }

  async getMessageId(context) {
    const conversationId = context.activity.conversation.id;
    return conversationId.split("=")[1];
  }

  // Invoked when an action is taken on an Adaptive Card. The Adaptive Card sends an event to the Bot and this
  // method handles that event.
  async onAdaptiveCardInvoke(context, invokeValue) {
    // The verb "userlike" is sent from the Adaptive Card defined in adaptiveCards/learn.json
    if (invokeValue.action.verb === "userlike") {
      this.likeCountObj.likeCount++;
      const card = cardTools.AdaptiveCards.declare(rawLearnCard).render(
        this.likeCountObj
      );
      await context.updateActivity({
        type: "message",
        id: context.activity.replyToId,
        attachments: [CardFactory.adaptiveCard(card)],
      });
      return { statusCode: 200 };
    }
  }
}

module.exports.TeamsBot = TeamsBot;
