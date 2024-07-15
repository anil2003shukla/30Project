const btnEle=document.getElementById("btn");
const birthdateEle=document.getElementById('birthdate');



function AgeCalculate(){
     const birthdateValue=birthdateEle.value;
     if(birthdateValue===""){
        alert("Please enter your birthdate");
     }
     else{
        const age=getAge(birthdateValue);
        if(age>0){
            let audio=new Audio();
            audio.src="Age.mp3";
            audio.play();
       document.getElementById("result").innerText= `Your Age is: ${age}`;
    }

     }
}
function getAge(birthdateValue){
    const current=new Date();
    const birthdate=new Date(birthdateValue);
    let age=current.getFullYear()-birthdate.getFullYear();
    let month=current.getMonth()-birthdate.getMonth();
    if(month<0|| (month===0)&&current.getDate()<birthdate.getDate()){
        age=age-1;
    }
    return age;

}
btnEle.addEventListener('click',AgeCalculate);

