const inputEle=document.querySelector('.input');
const bdEle=document.querySelector('body');
inputEle.checked= JSON.parse(localStorage.getItem("mode"));
updateBd();
function updateBd(){
    if(inputEle.checked){
        bdEle.style.backgroundColor="black";
    }else{
        bdEle.style.backgroundColor="white";
    }
    
}
inputEle.addEventListener('click',()=>{
    updateBd();
    updateLocalstorage();
});
function updateLocalstorage(){
    localStorage.setItem('mode',JSON.stringify(inputEle));
}
