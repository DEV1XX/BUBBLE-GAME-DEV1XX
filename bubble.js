function makeBubble(){
    var clutter=""
    for(var i=1;i<=152;i++){
        clutter=clutter+`<div class="bubble">${Math.floor((Math.random())*10)}</div>`;
    }
    document.querySelector('.panelbottom').innerHTML=clutter
}
var timer=10;
var hitrn;
function runTimer(){
var timerInterval=setInterval(function(){
    if(timer>0){
        timer--
        document.querySelector(".timerValue").textContent=timer
    }else{
        clearInterval(timerInterval)
        document.querySelector(".panelbottom").innerHTML=`<h1 id="finalscore">GAME OVER</h1>`
    }
   
},1000)
}
function getNewHit(){
    hitrn=Math.floor((Math.random())*10)
    document.querySelector(".hit").textContent=hitrn
}
var score = 0; // Initialize the score variable
function increaseScore(){
    score=score+10
    document.querySelector(".score").textContent=score
}
document.querySelector(".panelbottom").addEventListener('click',function(details){
var clickedNum=Number(details.target.textContent)
if(clickedNum==hitrn){
    increaseScore()
    makeBubble()
    getNewHit()
}
})

runTimer()
makeBubble()
getNewHit()

