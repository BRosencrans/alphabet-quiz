var startBtn = document.querySelector("button#start")
var firstTest = document.querySelector("#quiz-start")
var quizGame = document.querySelector("#quiz")
var questions = document.querySelector("#question")
var answers = document.querySelector("#choices")
var timeRemaing = document.querySelector("#timer")
var scoreTotal = document.querySelector("#score")
var timeLeft;

function startQuiz() {
    firstTest.setAttribute("class", "hide");
    quizGame.setAttribute("class", "")
    timeLeft = 60;
    timeRemaing.textContent = `${timeLeft} second(s) left`;
    countdown = setInterval(()=>{
        timeLeft--;
        timeRemaing.textContent = `${timeLeft} second(s) left`;
        if(timeLeft<=0){
            timeLeft = 0;
            endGame()
        }
    },1000)
}



function endGame(){
    clearInterval(countdown)
    quizGame.setAttribute("class","hide");
    scoreTotal.setAttribute("class","")
    timeRemaing.textContent=""
    scoreTotal.textContent = timeLeft;

}

startBtn.addEventListener("click", startQuiz);