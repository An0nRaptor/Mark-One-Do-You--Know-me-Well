let readlineSync = require("readline-sync");

let chalk = require("chalk");

var score = 0;

let questions = [
  {
    question: "First Question - \n - Is my Age Greater than 20 ?",
    answer: "yes",
  },
  {
    question: "Second Question - \n - Is my Hometown Pune ?",
    answer: "no",
  },
  {
    question: "Third Question - \n - Where am i learing Coding ?",
    answer: "youtube",
  },

  {
    question: "Fourth Question- \n - Which College Did I Study at ? ",
    answer: "aissms coe pune",
  },
  {
    question: "Fifth Question - \n - Which Programming language do i Know ?",
    answer: "javascript",
  },
  {
    question: "Sixth Question - \n - What is my Favourite Sport ?",
    answer: "football",
  },
  {
    question: "Sixth Question - \n - Who is my favourite Sportsperson ?",
    answer: "ronaldo",
  },
];

const highScore = [
  {
    name: "Aniket",
    score: 4,
  },
  {
    name: "Akshay",
    score: 3,
  },
  {
    name: "Dinesh",
    score: 3,
  },
];

// do it all together

var data = readlineSync.question(chalk.blue("\nWhat is your name? :"));

var userName = data.charAt(0).toUpperCase() + data.slice(1);
console.log("Hello " + userName);

function welcomeUser() {
  console.log(
    chalk.green(
      "\nWelcome " +
        userName +
        " DO YOU KNOW ME Quiz 'Rahul Yadav?' \n" +
        "\n Lets Start the Quiz" +
        "\n--------------------" +
        "\n"
    )
  );
}
// welcomeUser()

// ex14: club everything to make the quiz

function asktheQuestion(question, answer) {
  var userAnswer = readlineSync.question(chalk.magenta(question));
  console.log(userAnswer);

  //  ex08: Check if the answer is correct
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    rightAnswer();
  } else {
    wrongAnswer(answer);
  }
  console.log("Current Score is : " + score);
  console.log(chalk.yellowBright(" --------------------\n"));
}

function playGame() { 
  for (let i = 0; i < questions.length; i++) {
    let iteratedQuestion = questions[i];
    asktheQuestion(iteratedQuestion.question, iteratedQuestion.answer);
  }
}

function rightAnswer() {
  console.log(chalk.green("Right Answer"));
  score++;
}

function wrongAnswer(answer) {
  console.log(chalk.red("Wrong Answer"));
  console.log("Correct Answer is " + answer);
}

function showScore() {
  congratulateOrTryAgain();
  console.log(chalk.yellow.bold("High Scores of other players: "));
  for (var i = 0; i < highScore.length; i++) {
    console.log(chalk.yellowBright(highScore[i].name, ":", highScore[i].score));

    console.log(chalk.yellowBright("--------------------------\n"))
  }
}


function congratulateOrTryAgain() {
  if (score !== 0) {
    console.log(chalk.green("CONGRATULATIONS!! You have scored : " + score));
    var UserbeatentheHighScore = hasUserBeatentheHighScore()
    console.log(chalk.green('\n' + UserbeatentheHighScore + chalk.yellowBright("------------------\n")))
  }
  else{
     console.log(chalk.red("Try again!! you have Score: " + score + "\n"))
  }
}


function hasUserBeatentheHighScore(){
  var maxScore = 0;
  for(var i=0;i<highScore.length;i++){
      var currentHighScore = highScore[i].score
      if(currentHighScore > maxScore){
        maxScore = currentHighScore
      }
  }
  if(score > maxScore){
    return "CONGRATULATIONS AGAIN! You have broken the the High Score Records \n" +
    "Kindly Send the ScreenShot i Will update your Score " 
  }else {

    return "";
  }
}

welcomeUser()
playGame()
showScore();

console.log(chalk.cyan("--------------------------\n") + chalk.cyanBright("\nThank you " + userName + " for playing the Quiz Game"))