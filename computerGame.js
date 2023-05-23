var gameQuestions = [
    {
        question: "What year did Spiderman release?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
    {
        question: "How many Marvel Avengers are there?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
    {
        question: "How many championships?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
    {
        question: "What year did Spiderman release?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
    {
        question: "What year did Spiderman release?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
    {
        question: "What year did Spiderman release?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
    {
        question: "What year did Spiderman release?",
        answer: "1962",
        choices: ["1962", "1948", "2001"]

    },
]
var currentQuestionIndex = 0
var questionElement = document.querySelector("#question")
var choiceElement = document.querySelector("#choice-container")

function displayQuestion() {
    var currentQuestion = gameQuestions[currentQuestionIndex]
    questionElement.textContent = currentQuestion.question
    for (i = 0; i < currentQuestion.choices.length; i++) {
        var button = document.createElement("button")
        button.textContent = currentQuestion.choices[i]
        button.addEventListener("click", checkAnswer)
        choiceElement.append(button)
    }
}
//the curly brackets tells us to run the code block once displayQuestion is initiated

displayQuestion()
function checkAnswer(event) {
    console.log(event.target.textContent)
}