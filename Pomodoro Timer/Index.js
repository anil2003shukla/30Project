const countEle=document.querySelector("#timer");
const startEl=document.querySelector("#start");
const stopEl=document.querySelector("#stop");
const resetEl=document.querySelector("#reset");
let  interval;
let timeLeft=10;


function TimerUpdater(){
    if(timeLeft<0){
        clearInterval(interval);
        alert("Please Reset Timer");
        return;
    }
    let minutes=Math.floor(timeLeft/60);
    let seconds=timeLeft%60;
    countEle.innerHTML=`${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
}
function startTimer(){
    interval=setInterval(()=>{
        
        timeLeft--;
        TimerUpdater();
        if(timeLeft===0){
            clearInterval(interval);
            var audio=new Audio();
            clearInterval(interval);
            audio.src='k-ya-9959.mp3';
            audio.play();
            stopEl.addEventListener("click",function(){
                audio.pause();
            });
            alert("Time Over");
            
        }
    }
        ,1000);
}
function stopTimer(){
    clearInterval(interval);
    

}
function resetTimer(){

    timeLeft=10;


}
startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);