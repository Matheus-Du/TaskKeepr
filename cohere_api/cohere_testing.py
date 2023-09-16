import cohere
# import nltk
# import asyncio

def get_response(chat):
	co = cohere.Client('VovM8HYiisv03U7UMnD9k6puo3z4TisNzS8im1No')
	response =  co.generate(
		model= 'command-nightly',
		# stream= True,
		prompt = '\n'.join(chat) + '\nFor context: \'I am Leo\'. '+ 
		'In the format of this example: \'- Fixing a login bug from 2 pm to 4 pm\'?' + 
		'what am I doing today in bullet point?',
		max_tokens = 100,
		temperature= 0.1
	)
	# print(response)
	print(response[0])
	# response =  co.generate(
	# 	model= 'command-nightly',
	# 	stream= True,
	# 	prompt = '\n'.join(chat) + '\nFor context: \'I am Leo\', give me',
	# 	max_tokens = 8,
	# 	temperature= 0.0
	# )
	# print(response)
	# print(response[0])

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
		'Tom: Thanks.'
		'Matt: Hi Leo, how\'s it going with the bug?',
		'Leo: I am still working on it. I will let you know when I am done.',
		'Matt: Sounds good. Do you have time for a meeting today at 3pm to discuss your progress?',
		'Leo: Actually I have a doctor\'s appointment at 3pm. Can we do it at 4:30pm?',
		'Matt: Sure, that works for me. I will send you a calendar invite.',
		'Leo: Thanks.',
		]
	chat2 = [
		'Leo: I am working on the Cohere API today.',
		'Carlos: I am working on the Frontend today.',
		'Matt: I am working on the Backend today.',
		'Owen: I am working on the chatbot today and tomorrow.',
	]
	chat3 = [
		'Leo: I am going to be away from 12-2 pm today for a doctor\'s appointment.',
		''
	]

	get_response(chat1)

if __name__ == '__main__':
	main()	
