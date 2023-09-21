# TaskKeepr



https://github.com/Matheus-Du/TaskKeepr/assets/90405643/a95bce3a-ea70-4ce2-9bdf-6fb87f467061



## Description
In the world of remote-work, keeping track of your co-workers availability - and informing them of your own plans - is a constant headache for many. TaskKeepr seeks to streamline this process by monitoring MS Teams chats and providing summaries of chats and messages that your co-workers want you to see but don't have a good option for doing so. The goal of TaskKeepr is to take the meaning of the `@General` tag back to its roots, namely mission-critical updates instead of unscheduled appointments with the dentist.

When a Team uses TaskKeepr, a MS Teams bot will sit-in on their existing channels in order to find and summarize messages related to important updates and scheduled - or unscheduled - time off taken by your coworkers. By utilizing the Cohere LLM, we can quickly and efficiently summarize and categorize text without complex classification algorithms.

## Tech Stack
TaskKeepr utilizes a simple React frontend to display info about your teams schedules, but the critical mass of the app lies below the surface. A Cohere LLM takes care of text summarization, sentiment analysis, and classification using modern prompt engineering. A Flask backend API communicates between the Cohere API and the CockroachDB SQL database while also sending information on events, times, and user calendars to the React/Tailwind frontend.

## Learrning Experiences
As the vast majority of Hackathon projects live and die by the clock, the whole team learned plenty about time management and the importance of efficient grinding throughout a short period of time. Taking short/medium breaks throughout the event proved to be an extremely helpful boon to our productivity. In addition, everyone on the team honed their ability to quickly pick-up and adapt to new technologies, an undoubtedly useful skill.
