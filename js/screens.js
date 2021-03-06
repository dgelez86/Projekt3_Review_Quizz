class configScreen {

    constructor(difficulty, type, howMany) {

        this.difficulty = difficulty
        this.type = type
        this.howMany = howMany

    }

    static displayConfigScreen() {

        confScreen.createNodes().then(confScreen.getUserConf)

    }

    static getQuestionsFromAPI() {

        return "questions"

    }

    static createNodes() {

        return new Promise(resolve => {

            let wrapper = document.createElement("div")
                wrapper.classList.add("initWrapper")
            let title = document.createTextNode("Quizz")
            wrapper.appendChild(title)
            document.querySelector("body").appendChild(wrapper)

            let difficulty = document.createElement("select")
                difficulty.setAttribute("id", "difficulty")
                let difLabel = document.createElement("label")
                    difLabel.setAttribute("for", "difficulty")
                    difficulty.appendChild(difLabel)
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
            difficulty.appendChild(dif1)
            difficulty.appendChild(dif2)
            difficulty.appendChild(dif3)
            wrapper.appendChild(difficulty)

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
                    type3.setAttribute("value", "trueFalse")
                    let typeText3 = document.createTextNode("True / False")
            type.appendChild(typeLabel)
            type1.appendChild(typeText1)
            type2.appendChild(typeText2)
            type3.appendChild(typeText3)
            type.appendChild(type1)
            type.appendChild(type2)
            type.appendChild(type3)
            wrapper.appendChild(type)

            let howMany = document.createElement("input")
                howMany.setAttribute("type", "number")
                howMany.setAttribute("id", "howMany")
                howMany.setAttribute("min", "0")
                howMany.setAttribute("max", "50")
                let howLabel = document.createElement("label")
                    howLabel.setAttribute("for", "howMany")
                    howMany.appendChild(howLabel)
            howMany.appendChild(howLabel)
            wrapper.appendChild(howMany)

            let button = document.createElement("input")
                button.setAttribute("type", "button")
                button.setAttribute("value", "agree")
                button.setAttribute("id", "searchButton")
                button.addEventListener("click", () => confScreen.getQuestionsFromAPI())
            wrapper.appendChild(button)

            resolve()

        })
    

    }

    static getUserConfig() {

        console.log("getConfig")

        let dif = document.querySelector("#difficulty").value
        let type = document.querySelector("#difficulty").value
        let howMany = document.querySelector("#difficulty").value
        console.log(new confScreen(dif, type, howMany))

    }

}


class endScreen {

}

configScreen.displayConfigScreen()