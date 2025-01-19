const timer = document.getElementById("timer");
let startTime = 0;
let isRunning = false;
let elapsedTime = 0;
let timing = null;


function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        isRunning = true;
        timing  = setInterval(update, 10);
        console.log(elapsedTime, startTime);
    }
}
function stop(){
    if(isRunning){
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timing);
    }
}
function reset(){
    clearInterval(timing);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
}
function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/(1000 * 60)%60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let miliseconds = Math.floor(elapsedTime% 1000/10);
    
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    timer.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
