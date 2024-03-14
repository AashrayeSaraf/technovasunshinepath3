// Array of questions and their corresponding correct answers
const questions = [
  {
    sentence: "The _____ is a key component of a healthy diet.",
    correctAnswers: ["vegetable", "vegetables", "veggie", "veggies"],
  },
  {
    sentence: "Water boils at _____ degrees Celsius at sea level.",
    correctAnswers: ["100", "hundred"],
  },
  {
    sentence: "The capital city of France is _____.",
    correctAnswers: ["paris"],
  },
  {
    sentence:
      "The force that opposes the motion of objects through air is called _____.",
    correctAnswers: ["friction"],
  },
  {
    sentence: "The study of living organisms is known as _____.",
    correctAnswers: ["biology"],
  },
];

// Function to set a random question
function setRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  document.getElementById("sentence").textContent = randomQuestion.sentence;
  document.getElementById("feedback").textContent = "";
  // Store correct answers for later checking
  document
    .getElementById("sentence")
    .setAttribute(
      "data-correct-answers",
      randomQuestion.correctAnswers.join(",")
    );
}

// Function to check user's answer
function checkAnswer() {
  const userAnswer = document
    .getElementById("user-answer")
    .value.toLowerCase()
    .trim();
  const correctAnswers = document
    .getElementById("sentence")
    .getAttribute("data-correct-answers")
    .split(",");
  if (correctAnswers.includes(userAnswer)) {
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    document.getElementById("feedback").textContent = "Incorrect. Try again.";
  }
}

// Set initial question when the page loads
setRandomQuestion();
