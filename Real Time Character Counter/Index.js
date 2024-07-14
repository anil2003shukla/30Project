const  textAreaEle=document.querySelector("#textarea");
const totalCount=document.querySelector("#total-counter");
const reamianingCount=document.querySelector("#remaining-counter");
textAreaEle.addEventListener('keyup',()=>{
    updateCounter();
});
function updateCounter(){
     totalCount.innerHTML=textAreaEle.value.length;
     reamianingCount.innerHTML= textAreaEle.getAttribute("maxlength")-textAreaEle.value.length;
    
}