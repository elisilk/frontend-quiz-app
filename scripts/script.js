// ----------------------------------------
// Global variables
// ----------------------------------------

var allQuizData;

// Keep current state

// keep track of current state: (how??)
// - subject of current quiz
// - total number of questions in current quiz
// - number of questions answered correctly in current quiz
// - current question number of current quiz

const quizState = {
  subject: "",
  numberOfQuestions: 10,
  numberCorrect: 0,
  currentQuestionNumber: 0,
  data: {},
  form: {},
};

// ----------------------------------------
// HTML elements to save
// ----------------------------------------

const mainElement = document.getElementById("main");
const quizCategoryHeaderElement = document.getElementById(
  "quiz-category-header"
);

var mainMenuForm;
var quizForm;
var resultsScreen;

// elements to save
// form - id="question-form"
// question num - id="current-question-num"
// question text - id="question-text"
// progress bar - id="progress-bar"
// answer choices list - id="answer-choices-list"
// submit answer button - id="submit-answer-button"

// ----------------------------------------
// Functions
// ----------------------------------------

async function getData(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ----------------------------------------
// Functions - Main Menu
// ----------------------------------------

const renderMainMenuOption = (subject, iconURL, parent) => {
  const subjectLowercase = subject.toLowerCase();
  const optionHTML = `
    <label for="choice-${subjectLowercase}" class="option">
      <input type="radio" id="choice-${subjectLowercase}" name="subject-choice" value="${subjectLowercase}"/>
      <img class="option__box option__box--${subjectLowercase}" src="${iconURL}" alt="${subject} icon">
      <span class="option__text">${subject}</span>
    </label>
    `;

  parent.insertAdjacentHTML("beforeend", optionHTML);

  document
    .getElementById(`choice-${subjectLowercase}`)
    ?.addEventListener("click", handleMainMenuClick);
};

const renderMainMenu = (subjects, parent) => {
  const starterHTML = `
    <form id="main-menu-form" class="screen screen--welcome">
      <!-- Quiz main menu begin -->
      <div class="screen__heading screen__heading--welcome">
        <h2 class="screen__heading-title">
          <span>Welcome to the</span> Frontend Quiz!</h2>
        <p class="instructions">Pick a subject to get started.</p>
      </div>
      <div class="screen__options">
        <fieldset id="options-list" class="options-list">
          <legend>Select a choice:</legend>
        </fieldset>
      </div>
      <!-- Quiz main menu end -->
    </form>
  `;

  parent.insertAdjacentHTML("beforeend", starterHTML);

  const optionsList = document.getElementById("options-list");
  const mainMenuForm = document.getElementById("main-menu-form");

  subjects.forEach((element) => {
    renderMainMenuOption(element.title, element.icon, optionsList);
  });

  // return the screen object
  return mainMenuForm;
};

const handleMainMenuClick = (e) => {
  // Remove the main menu screen
  mainMenuForm.remove();

  // Initiate quiz for the given subject
  quizForm = renderQuiz(
    allQuizData.find((obj) => {
      return obj.title.toLowerCase() === e.target.value;
    }),
    mainElement,
    quizCategoryHeaderElement
  );
};

// ----------------------------------------
// Functions - Quiz
// ----------------------------------------

const renderQuizHeader = (subject, iconURL, header) => {
  const subjectLowercase = subject.toLowerCase();
  const starterHTML = `
          <img class="option__box option__box--${subjectLowercase}" src="${iconURL}" alt="${subject} icon">
          <span class="option__text">${subject}</span>
  `;
  header.insertAdjacentHTML("beforeend", starterHTML);
};

const clearQuizHeader = (header) => {
  while (header.firstChild) {
    header.firstChild.remove();
  }
};

const renderQuizQuestionOption = (optionText, optionNum, parent) => {
  const questionOptionID = (optionNum + 9).toString(36).toUpperCase();
  const optionHTML = `
    <label for="choice-${questionOptionID}" class="option option--answer-choice">
      <input type="radio" id="choice-${questionOptionID}" name="answer-choice" value="${questionOptionID}"/>
      <span class="option__box">${questionOptionID}</span>
      <span id="choice-${questionOptionID}-text" class="option__text">${escapeHTML(
    optionText
  )}</span>
    </label>
  `;
  parent.insertAdjacentHTML("beforeend", optionHTML);
};

const renderQuizQuestion = (questionNum, quizData) => {
  // Check if there are more questions to render
  if (questionNum > quizData.questions.length) {
    console.error("No more questions in this quiz.");
    return;
  }

  const optionsList = document.getElementById("answer-choices-list");
  if (!optionsList) {
    console.error("Parent element not found.");
    return;
  }

  // If already existing question options, then clear them
  const currentOptions = optionsList.getElementsByClassName(
    "option--answer-choice"
  );
  while (currentOptions.length > 0) {
    currentOptions[0].parentNode.removeChild(currentOptions[0]);
  }

  // Update the Quiz State
  quizState.currentQuestionNumber = questionNum;

  const questionData = quizData.questions[questionNum - 1];

  // Render the question number
  document.getElementById("current-question-num").textContent = questionNum;
  // Render the question text
  document.getElementById("question-text").innerHTML = escapeHTML(
    questionData.question
  );
  // Update the progress bar
  document.getElementById("progress-bar").value = questionNum;

  // Render the current question options
  questionData.options.forEach((element, index) => {
    renderQuizQuestionOption(element, index + 1, optionsList);
  });

  // Add a listener to the form buttons
  document
    .getElementById("submit-answer-button")
    .addEventListener("click", handleSubmitAnswerClick);
  document
    .getElementById("next-question-button")
    .addEventListener("click", handleNextQuestionClick);

  // Add a listener to the answer choices
  // Whenever a choice is selected, hide the error message
};

const renderQuiz = (quizData, parent, header) => {
  // Update the Quiz State
  quizState.data = quizData;
  quizState.subject = quizState.data.title;
  quizState.numberOfQuestions = quizState.data.questions.length;
  quizState.numberCorrect = 0;
  quizState.currentQuestionNumber = 0;

  // render header with the current quiz subject
  renderQuizHeader(quizState.subject, quizState.data.icon, header);

  const starterHTML = `
    <form id="question-form" class="screen screen--question">
      <!-- Quiz question start -->
      <div class="screen__heading screen__heading--question">
        <div class="question">
          <p class="question__num">Question <span  id="current-question-num"></span> of <span id="total-num-questions">${quizState.numberOfQuestions}</span></p>
          <p id="question-text" class="question__text"></p>
        </div>
        <div class="progress-bar"><input type="range" name="progress-bar" id="progress-bar" min="1" max="${quizState.numberOfQuestions}" value="1" disabled></div>
      </div>
      <div class="screen__options">
        <fieldset id="answer-choices-list" class="options-list">
          <legend>Select an answer:</legend>
        </fieldset>
        <button id="submit-answer-button" class="button">Submit Answer</button>
        <button id="next-question-button" class="button button--hidden">Next Question</button>
        <span aria-live="polite" id="option-error" class="option-error option-error--hidden"><img src="assets/images/icon-error.svg" alt="error icon">Please select an answer</span>
      </div>
      <!-- Quiz question end -->
    </form>
  `;

  parent.insertAdjacentHTML("beforeend", starterHTML);

  quizState.form = document.getElementById("question-form");

  // render the first question
  renderQuizQuestion(1, quizData);

  // return the screen object
  return quizState.form;
};

const anyAnswerChoicesChosen = () => {
  return !(
    document.querySelector('input[name="answer-choice"]:checked') == null
  );
};

const showNothingChosenError = () => {
  const errorElement = document.getElementById("option-error");
  if (!errorElement) {
    console.error("No error element found.");
    return;
  }
  errorElement.classList.remove("option-error--hidden");
};

const hideNothingChosenError = () => {
  const errorElement = document.getElementById("option-error");
  if (!errorElement) {
    console.error("No error element found.");
    return;
  }
  if (!errorElement.classList.contains("option-error--hidden"))
    errorElement.classList.add("option-error--hidden");
};

const evaluateAnswerChoice = () => {
  console.log("Evaluating answer choice");

  const correctAnswerText = escapeHTML(
    quizState.data.questions[quizState.currentQuestionNumber - 1].answer
  );

  const correctAnswerChoice = Array.from(
    document.querySelectorAll(".option__text")
  ).find((text) => {
    return escapeHTML(text.textContent) === correctAnswerText;
  });

  if (!correctAnswerChoice) {
    console.error("Did not find correct choice! =(");
    return;
  }

  const correctAnswerChoiceID = correctAnswerChoice.id.slice(
    0,
    correctAnswerChoice.id.indexOf("-text")
  );

  console.log("Found correct choice:", correctAnswerChoiceID);
  const correctAnswerInputElement = document.getElementById(
    correctAnswerChoiceID
  );

  const selectedAnswerInputElement = document.querySelector(
    'input[name="answer-choice"]:checked'
  );
  const selectedAnswerInputElementID = selectedAnswerInputElement.id;
  const selectedAnswerText = escapeHTML(
    document.getElementById(`${selectedAnswerInputElementID}-text`).textContent
  );

  const isAnswerCorrect = selectedAnswerInputElementID == correctAnswerChoiceID;

  console.log("Answer selected:", selectedAnswerInputElementID);
  console.log("Answer selected text:", selectedAnswerText);
  console.log("Correct answer:", correctAnswerText);
  console.log("Is correct?:", isAnswerCorrect);

  // Mark the correct answer
  correctAnswerInputElement.labels[0].classList.add("option--correct");
  if (isAnswerCorrect) {
    // Increase the number correct in the quiz state
    quizState.numberCorrect++;
  } else {
    // Mark the selected answer as incorrect
    selectedAnswerInputElement.labels[0].classList.add("option--incorrect");
  }
};

const handleSubmitAnswerClick = (e) => {
  e.preventDefault();

  // if an answer choice has not been selected
  // put up the error message and return
  if (!anyAnswerChoicesChosen()) {
    //renderError("Some data you have supplied is invalid!");
    showNothingChosenError();
    return;
  }

  hideNothingChosenError();

  // disable any other inputs from being chosen at this point
  document
    .querySelectorAll('input[name="answer-choice"]')
    .forEach((element) => {
      element.disabled = true;
    });

  // otherwise, evaluate the answer and render the result
  evaluateAnswerChoice();

  // print the current quiz state
  console.log(quizState);

  // change the button to the "Next Question" button
  // handleNextQuestionClick(e);
  swapAnswerChoiceButtons();
};

const swapAnswerChoiceButtons = () => {
  // Toggle the submitAnswerButton
  document
    .getElementById("submit-answer-button")
    ?.classList.toggle("button--hidden");

  // Toggle the nextQuestionButton
  document
    .getElementById("next-question-button")
    ?.classList.toggle("button--hidden");

  // Disable the hidden button as well??
};

const handleNextQuestionClick = (e) => {
  e.preventDefault();
  console.log("Next question");

  // Check to see if at the end of the quiz
  if (quizState.currentQuestionNumber == quizState.numberOfQuestions) {
    // If at the end, then render the results
    // hide answer choice screen (or should it be deleted??)
    //quizForm.classList.add("screen--hide");
    quizForm.remove();
    resultsScreen = renderResults(quizState, mainElement);
  } else {
    // If not at the end, then render the next question
    renderQuizQuestion(quizState.currentQuestionNumber + 1, quizState.data);
    swapAnswerChoiceButtons();
  }
};

// ----------------------------------------
// Functions - Results
// ----------------------------------------

const renderResults = (quizData, parent) => {
  const starterHTML = `
    <section id="results-screen" class="screen screen--results">
      <!-- Quiz completed start -->
      <div class="screen__heading">
        <h2 class="screen__heading-title">
          <span>Quiz completed</span> You scored...</h2>
      </div>
      <div class="screen__options">
        <div class="final-score">
          <div class="category">
            <img class="option__box option__box--${quizState.subject.toLocaleLowerCase()}" src="${
    quizState.data.icon
  }" alt="${quizState.subject} icon">
            <span class="option__text">${quizState.subject}</span>
          </div>
          <div class="final-score__values">
            <p class="final-score__correct">${quizState.numberCorrect}</p>
            <p class="final-score__outof">out of ${
              quizState.numberOfQuestions
            }</p>
          </div>
        </div>
        <form id="play-again-form">
          <button id="play-again-button" class="button">Play Again</button>
        </form>
      </div>
      <!-- Quiz completed end -->
    </section>
  `;

  parent.insertAdjacentHTML("beforeend", starterHTML);

  const resultsScreen = document.getElementById("results-screen");

  // Add a listener to the form button
  document
    .getElementById("play-again-button")
    .addEventListener("click", handlePlayAgainClick);

  // return the screen object
  return resultsScreen;
};

const handlePlayAgainClick = (e) => {
  e.preventDefault();
  console.log("Play again");

  // hide results screen (or should it be deleted?)
  resultsScreen.remove();

  // Render the Main Menu
  clearQuizHeader(quizCategoryHeaderElement);
  mainMenuForm = renderMainMenu(allQuizData, mainElement);
};

// ----------------------------------------
// Main program
// ----------------------------------------

// Read the Data
allQuizData = (await getData("data.json")).quizzes;
console.log(allQuizData);

// Render the Main Menu
mainMenuForm = renderMainMenu(allQuizData, mainElement);
