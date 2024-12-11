var timer = 31;
var score = -10;
var hitrn;

function increaseScore(){
    score += 10;
    document.querySelector("#newscr").textContent = score;
}
function makeBubble(){
    var clutter ="";

for(var i = 1; i<=85; i++){

    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
 document.querySelector("#btm").innerHTML = clutter;
}
function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#newval").textContent = hitrn;
}
function runTimer() {
    var time = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;

        } 
        else{
            clearInterval(time);   
            document.querySelector("#btm").innerHTML = `<h1>GAME OVER</h1>`; 
        }
    },1000);
}

document.querySelector("#btm").addEventListener("click", function (details){
   var clickedNumber = Number(details.target.textContent);
   if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});



runTimer();
makeBubble();
getNewHit();
increaseScore();