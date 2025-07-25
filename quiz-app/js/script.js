const quizContainer = document.querySelector(".quiz-container");
const configContainer = document.querySelector(".config-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn =  document.querySelector(".next-question-button");
const questionStatus = document.querySelector(".question-status"); 
const timerDisplay = document.querySelector(".time-duration")
const QUIZ_TIME_LIMIT = 15;
const resultContainer = document.querySelector(".result-container");

let quizCategory = "programming";
let numberOfQuestions = 5;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let currentQuestion = null; // making currentQuestion a global variable to accsesthhrough the app
const questionIndexHistory = [];
let correctAnswerCount =0;

//Display the quiz result and hide the quiz container
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b>questions correctly. Great effort!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

//Clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
     timerDisplay.textContent = `${currentTime}s`;
}

//Inıtialize and start the timer for the current question
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0) {
           clearInterval(timer);
           highlightCorrectAnswer();
           nextQuestionBtn.style.visibility = "visible"; 
           quizContainer.querySelector(".quiz-timer").style.background = "#cc0000";

           answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    },1000);
}



//fetching a random question from based on the  
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    //Show the results if all questions have been used
    if(questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    //Filter out already asked questions and choose a random one
    const avaiableQuestion = categoryQuestions.filter((_, index)=> !questionIndexHistory.includes(index));
    const randomQuestion = avaiableQuestion[Math.floor(Math.random() * avaiableQuestion.length)];

    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}
//Highlight the correct answer option 
const highlightCorrectAnswer = () => {
    const correctOption =answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = ` <span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}
//Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer); 
        const isCorrect = currentQuestion.correctAnswer === answerIndex;
        option.classList.add(isCorrect ? 'correct' : 'incorrect');

        !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++; //if answ is incorrect highlight the correct one, otherwise increase the correct answer count by 1
        //Insert icon based correctness
        const iconHTML = ` <span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'} </span>`;
        option.insertAdjacentHTML("beforeend", iconHTML); 
        //* Disables all answer options after one option is selected
        answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

        nextQuestionBtn.style.visibility = "visible"; //shows the next button only after an option has selected 
}

// Render the current question and its options in the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();
    

    // update the UI 
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#ffde22"
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of<b> ${numberOfQuestions}</b>Questions`;

    //create option <li> elements and append them and add click event listeners
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index ));
    });                                  
}

//Start the quiz and render the random question
const startQuiz = () => {
    configContainer.style.display= "none";
    quizContainer.style.display = "block";

    //Update the quiz category and number of Questions
    quizCategory = configContainer.querySelector(".category-option.active").textContent.toLowerCase().trim();
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
}
//Highlight the selected option on click - category or no. of questions
document.querySelectorAll(".category-option, .question-option").forEach(option => {
    option.addEventListener("click", ()=> {
            option.parentNode.querySelector(".active").classList.remove("active");
            option.classList.add("active");
    });
});

// Reset the quiz and return the configuration container
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length = 0; 
    configContainer.style.display= "block";
    resultContainer.style.display = "none";

}


nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-button").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-button").addEventListener("click", startQuiz);