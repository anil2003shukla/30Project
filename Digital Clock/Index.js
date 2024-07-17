const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minute');
const secondEl=document.querySelector('.second');


function updateClock(){
    const currentDate=new Date();
    setTimeout(updateClock,1000);
   const seconds=currentDate.getSeconds();
   const minutes=currentDate.getMinutes();
   const hours=currentDate.getHours();
   secondEl.style.transform=`rotate(${seconds*6}deg)`;
   minuteEl.style.transform=`rotate(${minutes*6}deg)`;
   hourEl.style.transform=`rotate(${hours*30}deg)`;
   
}
updateClock();