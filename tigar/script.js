const questions = [
    "Какой ваш любимый цвет? (1. Красный, 2. Синий, 3. Зелёный, 4. Жёлтый)",
    "Какой ваш характер? (1. Спокойный, 2. Энергичный, 3. Дружелюбный, 4. Независимый)"
];

const results = {
    0: "Вам подходит не тигр, а пес патрон! 🐱",
    1: "Вам подходит Суматранский тигр! 🐱",
    2: "Вам подходит Мальтийский тигр! 🐱",
    3: "Вам подходит Золотой тигр! 🐱",
    4: "Вам подходит Белый тигр! 🐱"
};

let currentQuestion = 0;
let score = 0;

document.getElementById("startTest").addEventListener("click", startTest);

function startTest() {
    document.getElementById("startTest").style.display = "none";
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${questions[currentQuestion]}</p>
                                <input type="number" id="answer" min="1" max="4">
                                <button onclick="nextQuestion()">Далее</button>`;
        document.getElementById("questions").appendChild(questionDiv);
    } else {
        showResult();
    }
}

function nextQuestion() {
    const answer = parseInt(document.getElementById("answer").value);
    score += answer;
    currentQuestion++;
    document.getElementById("questions").innerHTML = "";
    showQuestion();
}

function showResult() {
    const resultIndex = Math.floor(score / questions.length);
    document.getElementById("result").innerText = results[resultIndex];
}