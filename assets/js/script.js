//! Set of questions --> array of objects
//! Each question needs the following:
  //! Question text
  //! Set of answers
  //! Which answer is correct



let londonQuiz = [

{
    question: "Which street name actually exists in London?",
    choices: ["Frying Pan Alley", "Knightrider Street", "Hanging Sword Alley", "all of the above"],
    answer: [3]
  },

{
    question: "What ancient landmark,  which, if moved, is supposed to jeopardise the future of the city?",
    choices: ["The London Eye", "The London Stone", "The Shard", "London Bridge"],
    answer: [1]
  },

{
    question: "What is the name of the resident cat employed in the British government as a mouser and a pet. The current one has held this prestigious position since 2011 - he's outlasted four Prime Ministers.
    ",
    choices: ["Jacob Fleas Mogg", "Cath Middleton", "Larry", "Pussy Galore Fellini" ],
    answer: [2]
  },

{
    question: "Aside from sounding quite rude, what do these London-related names --Cockfosters, Bushey, Mudchute, Arsenal?--have in common, what are they?",
    choices: ["London Underground stations", "Names of Beer", "Footballer Nicknames",
    "Political party headquarters"],
    answer: [0]
  },

{
    question: "What exotic animal species can be found in Kensington Gardens in London?",
    choices: ["Silver foxes", "Four lions", "Monty Pythons", "Green parakeets" ],
    answer: [3]
  }

]

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again