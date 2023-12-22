//! Set of questions --> array of objects
//! Each question needs the following:
  //! Question text
  //! Set of answers
  //! Which answer is correct


let londonQuiz = [

{
    question: "Which street name actually exists in London?",
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
 
  const startEl = document.getElementById('start');

// Click the start button:
  // Landing page goes away


  // Timer starts
  //  target <div class="timer"> Time: <span id="time">0 </span></div>


  const timerEl = document.getElementById('time');


  // The first question appears (with its answers)


// <div id="questions" class="hide"> 
const questionEl = document.getElementById('question-title'); 

//class h2  id "question-title" 


//<div id="choices" class="choices"></div>

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_create

// For each question:




  // User clicks an answer


  //<div id="choices" class="choices"></div>
  //create button element
let buttonEl = document.createElement("BUTTON");
//add text for button
let t = document.createTextNode("access answers object");
//append 
  buttonEl.appendChild(t);
  document.body.appendChild(buttonEl);

//add styling
buttonEl.setAttribute("style", "background:#333333; padding:20px;");

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
//var articlesDiv = document.getElementById('articles');
//var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
//articlesDiv.children[0].style.fontSize = '50px';
//headerDiv.children[0].style.color = 'white';



// for (var i = 0; i < siteTitles.length; i++) {
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
  
  
  
  // Form appears for user to enter their initials
  
  
  
  // Display their score



// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again