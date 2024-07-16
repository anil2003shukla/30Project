const counterEl=document.querySelectorAll(".counter");

counterEl.forEach((counterele)=>{
    counterele.innerText="0"
    incrementCounter()
   function incrementCounter(){
   let currentNum= +counterele.innerText
   const dataCeil=counterele.getAttribute('data-ceil')
    const increment=dataCeil/15;
    currentNum=Math.ceil(currentNum+increment);
    
    if(currentNum<dataCeil){
        counterele.innerText=currentNum;
        setTimeout(incrementCounter,10)
    }else{
        counterele.innerHTML=dataCeil;
    }

   }
})