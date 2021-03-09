class configScreen {

    static createNodes() {

        configScreen.deletePrevious()
        if (!document.querySelector(".wrapper")) {
            let wrapper = document.createElement("div")
            wrapper.classList.add("wrapper")
            document.querySelector("body").appendChild(wrapper)
        }
        let wrapper = document.querySelector(".wrapper")
        configScreen.configTitle(wrapper)
        configScreen.configDifficulty(wrapper)
        configScreen.configType(wrapper)
        configScreen.configHowMany(wrapper)
        configScreen.configButton(wrapper) 
    
    }

    static configTitle(wrapper) {

        let title = document.createElement("div")
            title.classList.add("title")
        let titleText = document.createTextNode("Quizz")
        title.appendChild(titleText)
        wrapper.appendChild(title)

    }

    static configDifficulty(wrapper) {

        let difficulty = document.createElement("select")
            difficulty.setAttribute("id", "difficulty")
            let difLabel = document.createElement("label")
                difLabel.setAttribute("for", "difficulty")
                difficulty.appendChild(difLabel)
            let any = document.createElement("option")
                any.setAttribute("value", "anyDif")
                let difText = document.createTextNode("Any difficulty") 
            let dif1 = document.createElement("option")
                dif1.setAttribute("value", "easy")
                let difText1 = document.createTextNode("easy")
                dif1.appendChild(difText1)
            let dif2 = document.createElement("option")
                dif2.setAttribute("value", "medium")
                let difText2 = document.createTextNode("medium")
                dif2.appendChild(difText2)
            let dif3 = document.createElement("option")
                dif3.setAttribute("value", "hard")
                let difText3 = document.createTextNode("hard")
                dif3.appendChild(difText3)
        difficulty.appendChild(difLabel)
        dif1.appendChild(difText1)
        dif2.appendChild(difText2)
        dif3.appendChild(difText3)
        any.appendChild(difText)
        difficulty.appendChild(any)
        difficulty.appendChild(dif1)
        difficulty.appendChild(dif2)
        difficulty.appendChild(dif3)
        wrapper.appendChild(difficulty)

    }

    static configType(wrapper) {

        let type = document.createElement("select")
            type.setAttribute("id", "type")
            let typeLabel = document.createElement("label")
            typeLabel.setAttribute("for", "type")   
            let type1 = document.createElement("option")
                type1.setAttribute("value", "anyType")
                let typeText1 = document.createTextNode("Any type")   
            let type2 = document.createElement("option")
                type2.setAttribute("value", "multiple")
                let typeText2 = document.createTextNode("Multiple choice")
            let type3 = document.createElement("option")
                type3.setAttribute("value", "boolean")
                let typeText3 = document.createTextNode("True / False")
        type.appendChild(typeLabel)
        type1.appendChild(typeText1)
        type2.appendChild(typeText2)
        type3.appendChild(typeText3)
        type.appendChild(type1)
        type.appendChild(type2)
        type.appendChild(type3)
        wrapper.appendChild(type)

    }
    
    static configHowMany(wrapper) {

        let howMany = document.createElement("input")
            howMany.setAttribute("type", "number")
            howMany.setAttribute("id", "howMany")
            howMany.setAttribute("min", "1")
            howMany.setAttribute("max", "50")
            howMany.setAttribute("value", "5")
            let howLabel = document.createElement("label")
                howLabel.setAttribute("for", "howMany")
                howMany.appendChild(howLabel)
        howMany.appendChild(howLabel)
        wrapper.appendChild(howMany)

    }

    static configButton(wrapper) {

        let buttonDiv = document.createElement("div")
            buttonDiv.classList.add("buttonDiv")
        let button = document.createElement("input")
            button.classList.add("buttons")
            button.setAttribute("type", "button")
            button.setAttribute("value", "agree")
            button.addEventListener("click", configScreen.getUserConfig)
        buttonDiv.appendChild(button)
        wrapper.appendChild(buttonDiv)

    }

    static getUserConfig() {

        let dif = document.querySelector("#difficulty").value
        let type = document.querySelector("#type").value
        let howMany = document.querySelector("#howMany").value
        Question.getQuestionsFromAPI(dif, type, howMany)

    }

    static deletePrevious() {

        let nodes = [...document.querySelectorAll(".wrapper > *")]
        nodes.map(el => el.remove())

    }

}


class EndScreen {


    static endScreen() {

        player.saveUserAnswersOnFirebase()

        // Reset variables kept on Firebase
        player.questionsAnswered = []
        player.answersChosen = []
        player.answersAssessed = []
        iterator = 0

        let displayResultsButtonDiv = document.createElement("div")
            displayResultsButtonDiv.classList.add("endButtonsDiv")
        let displayResultsButton = document.createElement("input")
            displayResultsButton.classList.add("buttons")
            displayResultsButton.setAttribute("id", "displayResultsButton")
            displayResultsButton.setAttribute("type", "button")
            displayResultsButton.setAttribute("value", "display results")
        displayResultsButtonDiv.appendChild(displayResultsButton)
        document.querySelector(".wrapper").appendChild(displayResultsButtonDiv)
        displayResultsButton.addEventListener("click", EndScreen.displayResults)

        let moreQuestionsButtonDiv = document.createElement("div")
            moreQuestionsButtonDiv.classList.add("endButtonsDiv")
        let moreQuestionsButton = document.createElement("input")
            moreQuestionsButton.classList.add("buttons")
            moreQuestionsButton.setAttribute("id", "moreQuestionsButton")
            moreQuestionsButton.setAttribute("type", "button")
            moreQuestionsButton.setAttribute("value", "get more questions")
        moreQuestionsButtonDiv.appendChild(moreQuestionsButton)
        document.querySelector(".wrapper").appendChild(moreQuestionsButtonDiv)
        moreQuestionsButton.addEventListener("click", configScreen.createNodes)

    }

    static displayResults() {

        let results = []
        for (let i = 0 ; i < count ; i++)
            results.push(firebase.database().ref(`questions${i}`).on("value", data => data.val()))

        

    }

    

}

configScreen.createNodes()