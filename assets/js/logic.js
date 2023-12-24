
//! Set of questions --> array of objects
//! Each question needs the following:
  //! Question text
  //! Set of answers
  //! Which answer is correct

  document.addEventListener('DOMContentLoaded', function () {
    let startScreen = document.getElementById('start-screen');
    let questionsContainer = document.getElementById('questions');
    let endScreen = document.getElementById('end-screen');
    let timerElement = document.getElementById('time');
    let startButton = document.getElementById('start');

    let correctSound = document.getElementById('correctSound');
    let incorrectSound = document.getElementById('incorrectSound');


    let currentQuestionIndex = 0;
    let userScore = 10;
    let timer;
    let timeRemaining = 180; // Initial time in seconds
  
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
      console.log(selectedChoice);
      console.log(currentQuestion.answer);
      


      if (selectedChoice === currentQuestion.answer) {
        // Correct answer, update score if needed
        userScore += 10;
        timeRemaining += 10; // For example, increase score by 10 points for each correct answer
        correctSound.play(); // Play correct sound
        console.log("correct answer!")
      } else {
        // Incorrect answer, penalize time if needed
        timeRemaining -= 10; // For example, penalize by 10 seconds for each incorrect answer
        incorrectSound.play(); // Play incorrect sound
        console.log("incorrect answer!")
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
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        let userInitials = prompt('Enter your initials:');
        
        highScores.push({ initials: userInitials, score: userScore });
        localStorage.setItem('highScores', JSON.stringify(highScores));
  
        // Redirect to the high scores page 
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