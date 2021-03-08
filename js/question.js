class Question {

    constructor(data) {

        this.arrayQuestions = data

    }

    static getQuestionsFromAPI(dif, type, howMany) {

        if (dif != "anyDif" && type != "anyType")
            fetch(`https://opentdb.com/api.php?amount=${howMany}&difficulty=${dif}&type=${type}`)
                .then(response => response.json())
                .then(data => {
                    questions = new Question(data)
                    Question.displayQuestion()
                })

        else if (dif != "anyDif")
            fetch(`https://opentdb.com/api.php?amount=${howMany}&difficulty=${dif}`)
                .then(response => response.json())
                .then(data => {
                    questions = new Question(data)
                    Question.displayQuestion()
                })

        else if (type != "anyType")
            fetch(`https://opentdb.com/api.php?amount=${howMany}&type=${type}`)
                .then(response => response.json())
                .then(data => {
                    questions = new Question(data)
                    Question.displayQuestion()
                })

        else fetch(`https://opentdb.com/api.php?amount=${howMany}`)
                .then(response => response.json())
                .then(data => {
                    questions = new Question(data)
                    Question.displayQuestion()
                })


    }

    static displayQuestion() {

        configScreen.deletePrevious()

        if (iterator < questions.arrayQuestions.results.length) {

            questions.printQuestion(questions.arrayQuestions.results[iterator])
            questions.printAnswers(questions.arrayQuestions.results[iterator])
            questions.printButton()
            iterator++

        } else {

            player.saveAnswersChosenOnFirebase()

        }
        
    }

    printQuestion(el) {

        let question = document.createElement("div")
            question.classList.add("question")
        let questionText = document.createTextNode(el.question)
        question.appendChild(questionText)
        document.querySelector(".wrapper").appendChild(question)
        
    }

    printAnswers(el) {

        let answers = document.createElement("div")
        answers.classList.add("answers")
        let answer0 = document.createElement("div")
        answer0.classList.add("answer")
        answer0.setAttribute("id", "0")
        let answerText = document.createTextNode(el.correct_answer)
        answer0.appendChild(answerText)
        answers.appendChild(answer0)
        answer0.addEventListener("click", () => player.formatQuestion(el, answer0.getAttribute("id")))
        el.incorrect_answers.map((incorrect, index) => {
            let answer = document.createElement("div")
            answer.classList.add("answer")
            answer.setAttribute("id", index+1)
            let answerText = document.createTextNode(incorrect)
            answer.appendChild(answerText)
            answers.appendChild(answer)
            answer.addEventListener("click", () => player.formatQuestion(el, answer.getAttribute("id")))
        })
        document.querySelector(".wrapper").appendChild(answers)

    }

    printButton() {

        let backButtonDiv = document.createElement("div")
        backButtonDiv.classList.add("buttonDiv")
        let backButton = document.createElement("input")
            backButton.setAttribute("type", "button")
            backButton.setAttribute("value", "Back")
            backButton.setAttribute("id", "backToConfig")
            backButton.addEventListener("click", configScreen.createNodes)
        backButtonDiv.appendChild(backButton)
        document.querySelector(".wrapper").appendChild(backButtonDiv)

    }

}