const counterEle=document.querySelector(".count");
const  barEle=document.querySelector('.loading-bar-front');

let idx=0;

updateNow();
function  updateNow()
{
    counterEle.innerText=idx+ "%";
    barEle.style.width=idx+"%";
    idx++;
    if(idx<101){
        setTimeout(updateNow,10);
    }
}
