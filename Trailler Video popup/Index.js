
const btnEle=document.querySelector(".btn");
const closeEle=document.querySelector(".close-icon");
 const trailerEle=document.querySelector(".trailer-container");

btnEle.addEventListener("click",()=>{
    trailerEle.classList.remove("active");
});
closeEle.addEventListener("click",()=>{
    trailerEle.classList.add("active");
})