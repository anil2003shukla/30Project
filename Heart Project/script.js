const bdele=document.querySelector("body");
bdele.addEventListener("mousemove",(e)=>{
//   console.log(e.offsetX);
//   console.log(e.offsetY);
    const xPos=e.offsetX;
    const yPos=e.offsetY;
    const spanEle=document.createElement("span");
    spanEle.style.left=xPos+ "px";
    spanEle.style.top=yPos+ "px";
    const  size=Math.random()*100;
    spanEle.style.width=size+"px";
    spanEle.style.height=size+"px";
    spanEle.innerHTML="I LOVE MY INDIA"
    bdele.appendChild(spanEle);
    setTimeout(()=>{
        spanEle.remove();
    },3000)
})