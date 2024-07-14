const cont=document.querySelector(".container");
  const career=["Web Develover","App Developer","Android Developer","Software Developer"];
  let careerInd=0;
  let characterInd=0;
  Update();
 function Update(){
    characterInd++;
     cont.innerHTML=`<h1> I Am ${career[careerInd].slice(0,1)==="A"||"I"||"O"||"E"||"U" ? "an": "a"}  ${career[careerInd].slice(0, characterInd)}</h1>`;
     
     if(characterInd===career[careerInd].length){
        careerInd++;
        characterInd=0;
     }
     if(careerInd===career.length){
        careerInd=0;
     }
     setTimeout(Update,400);
 }