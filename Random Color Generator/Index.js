const containerEl=document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorContanierEl=document.createElement("div");
    colorContanierEl.classList.add("color-container");
    containerEl.appendChild(colorContanierEl);

    
}
const colorContainers=document.querySelectorAll(".color-container");
    console.log(colorContainers);
randomColorGenerator();
function randomColorGenerator(){
    colorContainers.forEach((colorContainer) => {
     let newColor=randomColor();
        colorContainer.style.backgroundColor=newColor;
        colorContainer.innerText=`${newColor}`;
    });
}
randomColor();
function randomColor(){
    const chars="123456789ABCDEF";
  const  colorCodeLength=6;
  let color="#";
  for (let index = 0; index <colorCodeLength; index++) {
       const randomnum=Math.random()*chars.length;
       color+=chars.charAt(Math.floor(randomnum));
    
  }
  return color;
}