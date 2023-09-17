import cohere

# import nltk
# import asyncio
def get_summary(chat):
	co = cohere.Client('VovM8HYiisv03U7UMnD9k6puo3z4TisNzS8im1No')
	return co.generate(
		model= 'command-nightly',
		# stream= True,
		prompt = '\n'.join(chat) + '\nFor context: \'I am Leo\'. '+ 
		'In the format of this example: \'- Fixing a login bug from 2 pm to 4 pm\'?' + 
		'what am I doing today in bullet point?',
		max_tokens = 100,
		temperature= 0.1
	)[0]

def get_to_do_today(chat, name):
	co = cohere.Client('VovM8HYiisv03U7UMnD9k6puo3z4TisNzS8im1No')
	return co.generate(
		model= 'command-nightly',
		# stream= True,
		prompt = '\n'.join(chat) + '\nFor context: \'I am ' + name + '\'. '+ 
		'In the format of this example: \'- Fixing a login bug from 2 pm to 4 pm\'?' + 
		'what am I doing today in bullet point?',
		max_tokens = 100,
		temperature= 0.1
	)[0]

def get_summary_events(chat):
	co = cohere.Client('VovM8HYiisv03U7UMnD9k6puo3z4TisNzS8im1No')
	return co.generate(
		model= 'command-nightly',
		# stream= True,
		prompt = '\n'.join(chat) + '\nFor context: \'This is a group conversation\'. '+ 
		'In the format of this example event: \'Title: Meeting between Leo and Steve,' +
											'\nStart Time: Thurs, 15 Sep 2023 12:00:00 GMT' +
											'\nEnd Time: Thurs, 15 Sep 2023 13:00:00 GMT' + 
											'\nDescription: Discussing the new feature of the website' +
											' \'' + 
		'Give me a list of events in this chat in the above format.' + 
		'If the day is not specified, try to extrapolate from today (Sunday, September 17, 2023), if extrapolation is not possible, make it the current date 2023-09-17 00:00:00 to 23:59:59.',
		max_tokens = 2000,
		temperature= 0.1
	)[0]

def get_class(chat):

	co = cohere.Client('VovM8HYiisv03U7UMnD9k6puo3z4TisNzS8im1No') # This is your trial API key
	response = co.classify(
	model='21f46f0b-5c69-4c06-b337-0540375b4945-ft',
	inputs=['\n'.join(chat)])

	return 'Type: {}'.format(response.classifications[0].prediction)
	# print('The confidence levels of the labels are: {}'.format(response.classifications[0].prediction))

def main():
	chat1 = [
		'Tom: Hi Leo, how are you?',
		'Leo: I am good, how are you?',
		'Tom: I am good too, thanks for asking.',
		'Leo: No problem.',
		'Tom: So, what are you doing today?',
		'Leo: I am going to fix the forgot password bug on our signin page.',
		'Tom: Oh, that is great. I am going to work on the new feature for our website.',
		'Leo: That is awesome. I will let you know if I need any help.',
		'Tom: Sure, I will do the same.',
		'Leo: Thanks.',
		'Tom: No problem.'
		'Leo: Do you have time for a meeting later today at 4pm to discuss the new feature?',
		'Tom: Yes, I do. I will send you a calendar invite.'
		'Leo: Sounds good.'
		'Tom: Thanks.',
		# 'Matt: Hi Leo, how\'s it going with the bug?',
		# 'Leo: I am still working on it. I will let you know when I am done.',
		# 'Matt: Sounds good. Do you have time for a meeting today at 3pm to discuss your progress?',
		# 'Leo: Actually I have a doctor\'s appointment at 3pm. Can we do it at 4:30pm?',
		# 'Matt: Sure, that works for me. I will send you a calendar invite.',
		# 'Leo: Thanks.',
		]
	chat2 = [
		'Leo: I am working on the Cohere API today.',
		'Carlos: I am working on the Frontend today.',
		'Matt: I am working on the Backend today.',
		'Owen: I am working on the chatbot today and tomorrow.',
	]
	chat3 = [
		'Leo: I am going to be away from 12-2 pm today for a doctor\'s appointment.',
		'Carlos: No problem. I will let you know what you missed.',
	]

	chat4 = [
		'Owen: Want to get some tacos at 1pm?',
		'Leo: Sure, let\'s go to the dining hall.',
		'Owen: Sounds good.',
	]

	# print(get_summary(chat1))
	# print(get_to_do_today(chat1, 'Leo'))
	print(get_summary_events(chat1))
	print(get_class(chat1))

if __name__ == '__main__':
	main()	
