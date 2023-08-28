const num1 = (Math.random() * 10)
const num2 = (Math.random() * 10)

const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const forEl = document.getElementById("form")

const scoreEl - document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`


let score = 0;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

forEl, addEventListener("submit", () => {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++;
        updateLocalstorage()
    } else {
        score--;
        updateLocalstorage()
    }
})

function updateLocalstorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

