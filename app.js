const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop")

let totalseconds = 25*60;

startBtn.addEventListener("click",startTimer);

function startTimer(){
    if (!timerId){
        timerId=setInterval(updateTimer,1000);
    }
}

function updateTimer(){
    totalseconds--;

    let minutes = Math.floor(totalseconds /60);
    let seconds = totalseconds % 60;

    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds.toString().padStart(2,"0");

}

let timerId;

stopBtn.addEventListener("click",stopTimer);

function stopTimer(){
    clearInterval(timerId);
    timerId = null;
}
