//questions and answers
var cheatsheet = [
    {
        question:"What HTML tag do you use for JavaScript?",
        choices:["<div>","<a>","<script>","<p>"],
        correctChoice: "<script>"
    },
    {
        question:"what section do you put the JavaScript link",
        choices:["<html>","<main>","<body> and <head>","<body> and <html>"],
        correctChoice: "<body> and <head>"
    },
    {
        question:"Whats JavaScripts main purpose?",
        choices:["Sets up the framework of a webpage","Makes web pages interactive", "linking pictures to a webpage", "styling a webpage"],
        correctChoice: "Makes web pages interactive"
    },
    {
        question:"are JavaScript variables case sensitive?",
        choices:["sometimes","no","yes"],
        correctChoice: "yes"
    },
    {
        question:"which one of these is not a Javascript operator?",
        choices:["%","===","!==","+"],
        correctChoice: "%"
    },
    {
        question:"What type of data does the variable equal in testVariable = true;?",
        choices:["String","Boolean", "Number", "Array"],
        correctChoice: "Boolean"
    },
    {
        question:"A good tool to use when debugging JavaScript is",
        choices:["code .","console.log", "alt + F4", "getCode.error"],
        correctChoice: "console.log"
    },
    {
        question:"Who created JavaScript",
        choices:["James Gosling","Bill Gates", "Brendan Eich", "Larry Page"],
        correctChoice: "Brendan Eich"
    },
    {
        question:"What year was JavaScript created?",
        choices:["2002","1988", "1997", "1995"],
        correctChoice: "1995"
    },
    {
        question:"How long did it take to build JavaSctipy",
        choices:["10 days","1 year", "8 months", "24 days"],
        correctChoice: "10 days"
    },
]




//document vars
var startBtn = document.querySelector("button#start");
var firstTest = document.querySelector("#quiz-start");
var quizGame = document.querySelector("#quiz");
var questions = document.querySelector("#question");
var answers = document.querySelector("#choices");
var thatIsCorrect = document.querySelector("#that-is-correct")
var timeRemaing = document.querySelector("#timer");
var scoreTotal = document.querySelector("#score");
var timeLeft;
var currentQuestion = 0;

function startQuiz() {
    firstTest.setAttribute("class", "hide");
    quizGame.setAttribute("class", "");
    timeLeft = 60;
    //starts timer on button click
    timeRemaing.textContent = `${timeLeft} second(s) left`;
    countdown = setInterval(()=>{
        timeLeft--;
        timeRemaing.textContent = `${timeLeft} second(s) left`;
        if(timeLeft<=0){
            timeLeft = 0;
            endGame()
        }
    },1000)
    askQuestions()
}

function askQuestions(){ 
questions.setAttribute("class","")
answers.setAttribute("class","")
thatIsCorrect.setAttribute("class","hide")

var nextQ = cheatsheet[currentQuestion];
var options= nextQ.choices
questions.textContent = nextQ.question;
 answers.innerHTML ="";
 

  for (let i = 0; i < options.length; i++) {
let option = options[i];
  //can't get answers to show up as buttons
 
let btn = document.createElement("button");
 btn.innerHTML = option;
 answers.appendChild(btn);  
}
  
}


//add current choices to page
//add button selector for choices
//check to see if right
//if wrong subtract time
//next question
//when done or out of time end game


//will show correct on right choice 
//and move to next question
function correctChoice(){}

//will show wrong answer on incorrect pick
//will also deduct 5 seconds from time
//move to next question
function wrongAnswer(){}


function endGame(){
    clearInterval()
    quizGame.setAttribute("class","hide");
    scoreTotal.setAttribute("class","")
    timeRemaing.textContent=""
    scoreTotal.textContent = timeLeft;
//will eventualy end game and get score
}

startBtn.addEventListener("click", startQuiz);