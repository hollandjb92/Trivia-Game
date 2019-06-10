//array of question objects
let questionsArray = [{
    question: "How many broomsticks are flown in a full game of Quidditch?",
    answerChoices: ["14", "16", "15", "28"],
    answerIndex: 2,
    gif: "./assets/images/question1.gif"
  },
  {
    question: "What was the codename that Fred was mistakenly called on Potterwatch?",
    answerChoices: ["Rattlesnake", "Rapier", "Rabbit", "Rodent"],
    answerIndex: 3,
    gif: "./assets/images/question2.gif"
  },
  {
    question: "Which is not a password to get into Dumbledore's Office?",
    answerChoices: ["Liquorice Wand", "Sherbet Lemon", "Fizzing Whizzbee", "Cockroach Cluster"],
    answerIndex: 0,
    gif: "./assets/images/question3.gif"
  },
  {
    question: "Which Hogwarts House is Terry Boot a member of?",
    answerChoices: ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"],
    answerIndex: 0,
    gif: "./assets/images/question4.gif"
  },
  {
    question: "Which Polyjuice Potion ingredient must be aquired during the Full Moon?",
    answerChoices: ["Fluxweed", "A bit of whoever you want to turn into", "Knotgrass", "Newt Spleen"],
    answerIndex: 0,
    gif: "./assets/images/question5.gif"
  },
  {
    question: "What type of creature is an Ashwinder?",
    answerChoices: ["Dog", "Fish", "Bird", "Serpent"],
    answerIndex: 3,
    gif: "./assets/images/question6.gif"
  },
  {
    question: "In the book, what colour were the dress robes that Padma Patil wore to the Yule Ball?",
    answerChoices: ["Pink", "Magenta", "Turquoise", "Lime Green"],
    answerIndex: 2,
    gif: "./assets/images/question7.gif"
  },
  {
    question: "Which team from the Ministry of Magic is responsible for modifying the memories of Muggles who have been exposed to magic?",
    answerChoices: ["Unspeakables", "Aurors", "The Wizengamot", "Obliviators"],
    answerIndex: 3,
    gif: "./assets/images/question8.gif"
  },
  {
    question: "Who is the editor of the Daily Prophet?",
    answerChoices: ["Xenophilius Lovegood", "Barnabus Cuffe", "Broderick Bode", "Urquhart Rackharrow"],
    answerIndex: 1,
    gif: "./assets/images/question9.gif"
  },
  {
    question: "What house was Moaning Myrtle sorted into?",
    answerChoices: ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"],
    answerIndex: 0,
    gif: "./assets/images/question10.gif"
  },
  {
    question: "What year was Ollivanders founded?",
    answerChoices: ["465 BC", "712 BC", "57 BC", "382 BC"],
    answerIndex: 3,
    gif: "./assets/images/question11.gif"
  },
  {
    question: "What form did the boggart take when it saw Dean Thomas?",
    answerChoices: ["A Bloody Eyeball", "A Severed Hand", "A Banshee", "A Bloodstained, Bandaged Mummy"],
    answerIndex: 1,
    gif: "./assets/images/question12.gif"
  },
  {
    question: "What number is Harry's vault at the Gringotts Wizarding Bank?",
    answerChoices: ["687", "711", "627", "613"],
    answerIndex: 0,
    gif: "./assets/images/question13.gif"
  },
  {
    question: "Who says this: 'I wouldn't touch a filthy little blood traitor like her whatever she looked like.'?",
    answerChoices: ["Barty Crouch Jr.", "Lucius Malfoy", "Blaise Zabini", "Marcus Flint"],
    answerIndex: 2,
    gif: "./assets/images/question14.gif"
  },
  {
    question: "How did Frank Bryce injury his leg?",
    answerChoices: ["The War", "Chasing local boys away from Riddle House", "Fighting with Little Hangletown People", "Falling down the Stairs"],
    answerIndex: 0,
    gif: "./assets/images/question15.gif"
  },
  {
    question: "What's the name of the wizard who ends up with a buffalo on his chest when he said 's' instead of 'f'?",
    answerChoices: ["Barussio", "Barustio", "Baruffio", "Baroffio"],
    answerIndex: 2,
    gif: "./assets/images/question16.gif"
  },
  {
    question: "Who says this: 'My name was down for Eton, you know; I can't tell you how glad I am I came here instead.'?",
    answerChoices: ["Draco Malfoy", "Justin Finch-Fletchley", "Cormac McLaggen", "Ernie Macmillian"],
    answerIndex: 1,
    gif: "./assets/images/question17.gif"
  },
  {
    question: "The door to the Prefects' Bathroom is to the left of a statue of whom?",
    answerChoices: ["Gregory the Smarmy", "Wilfred the Wistful", "Lachlan the Lanky", "Boris the Bewildered"],
    answerIndex: 3,
    gif: "./assets/images/question18.gif"
  },
  {
    question: "Where did Quidditch originate?",
    answerChoices: ["Quebec", "Hogsmeade", "Castelobruxo", "Queerditch Marsh"],
    answerIndex: 3,
    gif: "./assets/images/question19.gif"
  },
  {
    question: "During their first journey to Hogwarts, which Chocolate Frog card does Ron tell Harry he has 'about six of '?",
    answerChoices: ["Morgana", "Agrippa", "Circe", "Paracelsus"],
    answerIndex: 0,
    gif: "./assets/images/question20.gif"
  }
]

// declare score variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let skippedAnswers = 0;
//time per question
let time = 10;
//keep track of current question
let currentQuestion = 0;
let correctedCurrentQuestion = null;
//store player answer in a variable
let userAnswer = null;
//store setInterval in a variable for ease of use
let interval = null

//shuffle the array at the beginning of each game
function shuffleQuestions() {
  questionsArray.sort(() => Math.random() - 0.5);
}
//start game on click, restart game on click
$("#start, #restart").on("click", function () {
  $(this).hide();
  shuffleQuestions();
  startGame();
})
//initializes timer at the beginning of each question
function timer() {
  time = 10;
  $("#timeRemaining").text("Time Remaining: " + time);
  //store setInterval in a variable to be cleared later
  interval = setInterval(startTimer, 1000);
}
//runs every second
function startTimer() {
  time--;
  $("#timeRemaining").text("Time Remaining: " + time);
  if (time < 1) {
    clearInterval(interval);
    showAnswer();
  }
}
//after clicking the start/restart button
function startGame() {
  //empty out div, clear variables, and go to question 1
  correctAnswers = 0;
  incorrectAnswers = 0;
  skippedAnswers = 0;
  currentQuestion = 0;
  correctedCurrentQuestion = currentQuestion + 1
  $("#numberIncorrect, #numberCorrect, #numberSkipped").empty();
  nextQuestion();
}
//sets up the next question
function nextQuestion() {
  //empty out showAnswer() text
  $("#rightOrWrong, #correctAnswer, #gif").empty();
  //displays current question # and the question itself
  $("#questionNumber").text("Question # " + (correctedCurrentQuestion) + " out of 20");
  $("#question").text(questionsArray[currentQuestion].question);
  //create answers choices and accompanying radio buttons and data-* attributes (Had to use For loop over ForEach Note: Value didn't work for some reason)
  for (i = 0; i < 4; i++) {
    let newDiv = $("<div>");
    newDiv.html("<label><input type='radio' name='option' class='big option' />" + questionsArray[currentQuestion].answerChoices[i] + "</label>");
    newDiv.attr("data-index", i)
    $("#answerChoices").append(newDiv);
  }
  //starts timer
  timer();
  //once user clicks a button, store their answer in a variable and move to showAnswer page
  $(".option").on("click", function () {
    userAnswer = $(this).closest("div").data("index");
    console.log(userAnswer)
    clearInterval(interval);
    showAnswer();
  });

}

//whether user was right, wrong, or skipped
function showAnswer() {
  //clear out div from nextQuestion()
  $("#answerChoices, #question").empty();
  $("#questionNumber").closest("div").empty();

  //declare variables to store the correct answerText and the index of that answer
  let correctAnswer = questionsArray[currentQuestion].answerChoices[questionsArray[currentQuestion].answerIndex];
  let correctAnswerIndex = questionsArray[currentQuestion].answerIndex;

  //if user choice matches index 
  if (userAnswer === correctAnswerIndex) {
    correctAnswers++;
    $("#rightOrWrong").text("Correct!");
    //if user choice doesn't match
  } else if (userAnswer !== correctAnswerIndex) {
    incorrectAnswers++;
    $("#rightOrWrong").text("Incorrect");
    $("#correctAnswer").text("The correct choice was " + correctAnswer);
    //if user doesn't answer in 15 seconds
  } else {
    skippedAnswers++;
    $("#rightOrWrong").text("You ran out of time!");
    $("#correctAnswer").text("The correct choice was " + correctAnswer);
  }
  //add gif from index of current question
  $("#gif").html("<img src = " + questionsArray[currentQuestion].gif + ">");
  //if all the questions have been answered
  if (currentQuestion == 19) {
    setTimeout(finalScore, 4000);
  } else {
    //increment current question variable and set the next question
    currentQuestion++;
    correctedCurrentQuestion++;
    setTimeout(nextQuestion, 4000);
  }

}

// post-game page
function finalScore() {
  //empty out showAnswer() divs
  $("#timeRemaining, #rightOrWrong, #correctAnswer, #gif").empty();
  //show restart button
  $("#restart").addClass("btn btn-lg").show().text("Try Again");
  //show quiz stats
  $("#numberCorrect").text("You got " + correctAnswers + " right");
  $("#numberIncorrect").text("You got " + incorrectAnswers + " wrong");
  $("#numberSkipped").text("You skipped " + skippedAnswers + " questions");
}