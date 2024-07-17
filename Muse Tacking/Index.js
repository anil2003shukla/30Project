const containerele=document.querySelector(".container");

window.addEventListener('mousemove',(e)=>{
  containerele.innerHTML=`
  <div class="mouse-events">
           ${e.clientX}
            <h4>Mouse X Posittion(px)</h4>
        </div>
        <div class="mouse-events">
            ${e.clientY}
            <h4>Mouse X Posittion(px)</h4>
        </div>
  `

})