class Player {

    constructor() {

        this.totalTime = 0
        this.questionTime = 0
        this.score = 0

    }

    getTotalTime() { return this.totalTime }
    setTotalTime() { this.totalTime += this.questionTime }
    getQuestionTime() { return this.questionTime }
    setQuestionTime() { this.questionTime = 0}
    getScore() { return this.score}
    setScore() { this.score += 0}

}


class Ranking {

    constructor() {

        this.top10 = this.makeTop10

    }

    makeTop10() {

        return "top10"

    }

}