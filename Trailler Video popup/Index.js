
const btnEle=document.querySelector(".btn");
const closeEle=document.querySelector(".close-icon");
 const trailerEle=document.querySelector(".trailer-container");

btnEle.addEventListener("click",()=>{
    trailerEle.classList.remove("active");
});
const videoEl=document.querySelector("video");
closeEle.addEventListener("click",()=>{
    trailerEle.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;
});