class Question {

    constructor() {

        this.questions = configScreen.getQuestionsFromAPI()

    }

    displayQuestion() {

        this.questions.results.map(el =>  this.printQuestion(el))
        this.questions.results.map(el =>  this.printAnswers(el))
        this.printAnswers()

    }

    printQuestion(el) {

        let question = document.createElement("div")
        let questionText = document.createTextNode(el.question)
        question.appendChild(questionText)

    }

    printAnswers(el) {

        let answers = document.createElement("div")
        let answer

    }

    assessQuestion() {

    }

    getMoreQuestions() { configScreen.displayConfScreen() }

}