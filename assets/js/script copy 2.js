

// The startQuiz function is triggered when the "Start Quiz" button is clicked, and it initiates the timer, hides the start screen, and displays the first question. 


document.addEventListener('DOMContentLoaded', function () {
  let startScreen = document.getElementById('start-screen');
  let questionsContainer = document.getElementById('questions');
  let endScreen = document.getElementById('end-screen');
  let timerElement = document.getElementById('time');
  let startButton = document.getElementById('start');

  let londonQuiz = [
    {
      question: "Which of the street names below actually exists in London?",
      choices: { a: "Frying Pan Alley", b: "Knightrider Street", c: "Hanging Sword Alley", d: "all of the above" },
      answer: "d"
    },
    {
      question: "What ancient landmark,  which, if moved, is supposed to jeopardise the future of the city?",
      choices: {
        a: "The London Eye", 
        b: "The London Stone", 
        c: "The Shard", 
        d: "London Bridge"
      },
      answer: "b"
    },
  
  {
      question: "What is the name of the British government's resident feline who has outlasted four Prime Ministers?",
      choices: {
        a: "Jacob Reese Moggy", 
        b: "Cat Middleton", 
        c: "Larry the cat", 
        d: "Fleabag Waller" },
      answer: "c"
    },
  
  {
      question: "Aside from sounding quite rude, what do the following London-related names --Cockfosters, Bushey, Mudchute, Arsenal?--have in common, what are they?",choices: {
        a: "London Underground stations", 
        b: "Names of Beer", 
        c: "Footballer Nicknames",
        d: "Political party headquarters"},
      answer: "a"
    },
  
  {
      question: "What exotic animal species can be found in Kensington Gardens in London?",
      choices: {
        a: "Silver foxes",
        b: "Four lions", 
        c: "Monty Pythons", 
        d: "Green parakeets"}, 
      answer:"d"
    }
  ];

  var currentQuestionIndex = 0;
  var userScore = 0;
  var timer;
  var timeRemaining = 60; // Initial time in seconds

  startButton.addEventListener('click', startQuiz);

  function startQuiz() {
    startScreen.classList.add('hide');
    questionsContainer.classList.remove('hide');
    timer = setInterval(updateTimer, 1000);
    displayQuestion();
  }

  function displayQuestion() {
    var currentQuestion = londonQuiz[currentQuestionIndex];
    document.getElementById('question-title').textContent = currentQuestion.question;

    var choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    for (var choice in currentQuestion.choices) {
      var button = document.createElement('button');
      button.textContent = currentQuestion.choices[choice];
      button.addEventListener('click', function (event) {
        handleUserChoice(event.target.textContent);
      });
      choicesContainer.appendChild(button);
    }
  }

  function handleUserChoice(selectedChoice) {
    var currentQuestion = londonQuiz[currentQuestionIndex];
    // handleUserChoice function, increase the time remaining for correct answers. You can add a constant value or adjust it based on your preference.

    if (selectedChoice === currentQuestion.answer) {
      // Correct answer, update score if needed
      userScore += 10;
      timeRemaining += 10; // For example, increase score by 10 points for each correct answer
    } else {
      // Incorrect answer, penalize time if needed
      timeRemaining -= 10; // For example, penalize by 10 seconds for each incorrect answer
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;

    if (currentQuestionIndex < londonQuiz.length) {
      displayQuestion(); // Display the next question
    } else {
      endQuiz(); // End the quiz if all questions are answered
    }

    if (currentQuestionIndex < londonQuiz.length) {
      displayQuestion(); // Display the next question
    } else {
      endQuiz(); // End the quiz if all questions are answered

      // Store the score and any additional data in local storage
      var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
      var userInitials = prompt('Enter your initials:');
      highScores.push({ initials: userInitials, score: userScore });
      localStorage.setItem('highScores', JSON.stringify(highScores));

      // Redirect to the high scores page (adjust the path accordingly)
      window.location.href = './assets/pages/highscores.html';
    }


  }










  
  function updateTimer() {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      endQuiz();
    }

    timerElement.textContent = timeRemaining;
  }

  function endQuiz() {
    questionsContainer.classList.add('hide');
    endScreen.classList.remove('hide');
    document.getElementById('final-score').textContent = userScore;
    clearInterval(timer);
  }
});