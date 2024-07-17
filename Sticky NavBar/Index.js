
 
 const navEle=document.querySelector(".navbar");
 console.log(navEle);
 
 const bottomEle=document.querySelector(".bottom-container");
 window.addEventListener('scroll',()=>{
   if( window.scrollY>bottomEle.offsetTop-navEle.offsetHeight-50){
    navEle.classList.add("active");
   }
  else{
    navEle.classList.remove("active");
  }
 })