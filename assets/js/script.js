//! Set of questions --> array of objects
//! Each question needs the following:
  //! Question text
  //! Set of answers
  //! Which answer is correct

document.addEventListener('DOMContentLoaded', function () {

  let londonQuiz = [

  {
      question: "Which of the street names below actually exists in London?",
      choices: {
        a: "Frying Pan Alley", 
        b: "Knightrider Street", 
        c: "Hanging Sword Alley", 
        d: "all of the above"
      },
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
      question: "What is the name of the British government's resident cat who has outlasted four Prime Ministers?",
      choices: {
        a: "Jacob Fleas Moggy", 
        b: "Cath Middleton", 
        c: "Larry", 
        d: "Pussy Galore Fellini" },
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
  ]

// Landing page:
  // Explanation of the quiz
  // Start button
  // You can access a <button> element by using getElementById():

  //target  <button id="start">Start Quiz</button>

let startScreen = document.getElementById('start-screen');
 

// Click the start button:

let startButton = document.getElementById('start');

  // Landing page goes away

 // event listener on click
 let currentQuestionIndex = 0;
 let userScore = 0;
 let timer;
 let timeRemaining = 60; // Initial time in seconds

 startButton.addEventListener('click', startQuiz);

 function startQuiz() {
   startScreen.classList.add('hide');
   questionsContainer.classList.remove('hide');
   timer = setInterval(updateTimer, 1000);
   displayQuestion();
 }

  // Timer starts
  //  target <div class="timer"> Time: <span id="time">0 </span></div>

  let timerElement = document.getElementById('time');


  //document.getElementById(id).onclick = function(){code} 	Adding event handler code to an onclick event

  // The first question appears (with its answers)


// <div id="questions" class="hide"> 
const questionEl = document.getElementById('question-title'); 

//class h2  id "question-title" 
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


//<div id="choices" class="choices"></div> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_create

// For each question:




  // User clicks an answer
  function handleUserChoice(selectedChoice) {
    var currentQuestion = londonQuiz[currentQuestionIndex];
    // handleUserChoice function, increase the time remaining for correct answers. You can add a constant value or adjust it based on your preference.

    if (selectedChoice === currentQuestion.answer) {
      // Correct answer, update score if needed
      // userScore += 10;
      timeRemaining += 10; // For example, increase score by 10 points for each correct answer
    } else {
      // Incorrect answer, penalize time if needed
      timeRemaining -= 10; // For example, penalize by 10 seconds for each incorrect answer
    }


  //<div id="choices" class="choices"></div>
  //create button element
//let buttonEl = document.createElement("BUTTON");
//add text for button
//let t = document.createTextNode("access answers object");
//append 
//  buttonEl.appendChild(t);
// document.body.appendChild(buttonEl);

//add styling
buttonEl.setAttribute("style", "background:#f0f0f0; padding:2px;");

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "question"	
console.log(londonQuiz.question);
	
// Uses bracket notation and logs "question"
console.log(londonQuiz["question"]);


  //event listerner on.click



  // Their choice is compared to the correct answer as stored in the question's object
//local storage
choices// Loop through all h4 elements to add styling 


//<div id="questions" class="hide"> <h2 id="question-title"></h2>  <div id="choices" class="choices"></div>

// Access element using id
//let articlesDiv = document.getElementById('articles');
//let headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
//articlesDiv.children[0].style.fontSize = '50px';
//headerDiv.children[0].style.color = 'white';



// for (let i = 0; i < siteTitles.length; i++) {
//   siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
// }


  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops

  
//<div id="end-screen" class="hide"> */}
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_visibility
  
  // Question disappears
  
  let endScreen = document.getElementById('end-screen');
  
  // Form appears for user to enter their initials
  
  
  
  // Display their score



// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again
}