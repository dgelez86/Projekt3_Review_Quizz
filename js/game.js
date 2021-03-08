class Player {

    constructor() {

        this.totalTime = 0
        this.questionTime = 0
        this.score = 0
        this.questionsAnswered = []
        this.answersChosen = []

    }

    getTotalTime() { return this.totalTime }
    getQuestionTime() { return this.questionTime }
    getScore() { return this.score}

    formatQuestion(el, answerID) {

        player.questionsAnswered.push(el.question)
        switch (answerID) {
            case "0": player.answersChosen.push(el.correct_answer); break
            case "1": player.answersChosen.push(el.incorrect_answers[0]); break
            case "2": player.answersChosen.push(el.incorrect_answers[1]); break
            case "3": player.answersChosen.push(el.incorrect_answers[2])
        }
        player.assessQuestion(answerID)

    }

    assessQuestion(answerID) {

        if (answerID == 0) player.score += 5
        else player.score -= 2
        if (player.questionTime <=10) player.score += 1
        if (player.questionTime <=20) player.score += 1
        Question.displayQuestion()

    }

    saveAnswersChosenOnFirebase() {

        let arrayQuestions = []
        player.questionsAnswered.map((el, index) => {
            let question = {}
            question.question = el
            question.answer = player.answersChosen[index]
            arrayQuestions.push(question)
        })
        console.log(questions)

        firebase.database().ref(`questions${count}`).update(arrayQuestions)

    }

}


class Ranking {

    constructor() {

        this.top10 = this.makeTop10

    }

    makeTop10() {

        return "top10"

    }

}

 player = new Player()