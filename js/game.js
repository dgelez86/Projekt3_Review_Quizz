class Player {

    constructor() {

        this.totalTime = 0
        this.questionTime = 0
        this.score = 0
        this.questionsAnswered = []
        this.answersChosen = []
        this.answersAssessed = []

    }

    getTotalTime() { return this.totalTime }
    getQuestionTime() { return this.questionTime }
    getScore() { return this.score}

    formatQuestion(el, answerID) {

        player.questionsAnswered.push(el.question)
        switch (answerID) {
            case "0": 
                player.answersChosen.push(el.correct_answer)
                player.answersAssessed.push(true)
                break
            case "1": 
                player.answersChosen.push(el.incorrect_answers[0])
                player.answersAssessed.push(false)
                break
            case "2": 
                player.answersChosen.push(el.incorrect_answers[1])
                player.answersAssessed.push(false)
                break
            case "3": 
                player.answersChosen.push(el.incorrect_answers[2])
                player.answersAssessed.push(false)

        }
        player.assessQuestion(answerID)

    }

    assessQuestion(answerID) {

        if (answerID === "0") player.score += 5
        else player.score -= 2
        if (player.questionTime <= 10) player.score += 1
        if (player.questionTime <= 20) player.score += 1
        Question.displayQuestion()

    }

    saveUserAnswersOnFirebase() {

        let arrayQuestions = []
        player.questionsAnswered.map((el, index) => {
            let question = {}
            question.question = el
            question.answer = player.answersChosen[index]
            question.assess = player.answersAssessed[index]
            arrayQuestions.push(question)
        })

        firebase.database().ref(`questions${count}`).update(arrayQuestions)
        count++

    }

}


class Ranking {

    constructor() {

        this.top10 = this.makeTop10()

    }

    makeTop10() {

        return "top10"

    }

}

 player = new Player()