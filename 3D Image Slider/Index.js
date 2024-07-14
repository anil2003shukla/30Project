const imgContainer=document.querySelector('.image-gallery');
const prev1=document.getElementById('prev');
const next1=document.querySelector("#next");
let x=0;
let timer;
prev1.addEventListener('click',()=>{
   x=x+45;
   clearTimeout(timer);
   updateGaller();
})
 function updateGaller(){
    imgContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`
   timer= setTimeout(()=>{
        x=x-45;
        updateGaller();
    },3000);
}
next1.addEventListener('click',()=>{
    x=x-45;
    clearTimeout(timer);
    updateGaller();

})
updateGaller();