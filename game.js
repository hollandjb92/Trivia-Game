let triviaQuestions = [{
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
    question: "What type of create is an Ashwinder?",
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

function shuffleQuestion() {
  triviaQuestions.sort(() => Math.random() - 0.5);
}

$("#start").on("click", function () {
  $(this).hide();
  startGame();
})