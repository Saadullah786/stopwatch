var min = 0
var sec = 0
var milisec = 0

var minText = document.getElementById("min");
var secText = document.getElementById("sec");
var milisecText = document.getElementById("milisec");
var interval;

function timer() {
    milisec++
    milisecText.innerHTML = milisec;
    if (milisec >= 100) {
        sec++
        secText.innerHTML = sec;
        milisec = 0;
    } else if (sec >= 60){
    min++
    sec = 0
    minText.innerHTML = min;
}
}



function start() {
interval = setInterval(timer,10)
document.getElementById("start").disabled = true;
}

function Pause() {
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}

function Reset() {
    min = 0
    sec = 0
    milisec = 0
    minText.innerHTML = min;
    secText.innerHTML = sec;
    milisecText.innerHTML = milisec;
    clearInterval(interval)
    document.getElementById("start").disabled = false;
}