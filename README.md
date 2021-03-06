# Projekt3_Reviewed_Quizz

## Main

Logic


## Screens

### ConfScreen

Properties: 
- difficulty 
- type
- howMany

Methods: 
- displayConfScreen() -> creates nodes needed
- getQuestionsFromAPI() -> fetch

### EndScreen

Methods:
- getQuestionsAnswered() -> retrieve questions answered from Firebase
- displayResults() -> show all questions, green if is correct, red if is incorrect


## Question

### Question

Properties:
- questions

Methods:
- pushQuestions() -> save questions in an array
- displayQuestion() -> creates nodes for question and answers
- assessQuestion() -> assess if question is correct or incorrect
- getMoreQuestions() -> display if user wants more questions -> call displayConfScreen()


## Game

### Player

Properties:
- totalTime
- questionTime
- score

Methods:
- getScore(), addScore()
- addTime() -> add time of current question to total

### Top10

Properties:
- top10

Methods:
- makeTop10()

