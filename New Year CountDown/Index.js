const deayele=document.getElementById('days');
const deayele1=document.getElementById('hours');
const deayele2=document.getElementById('minutes');
const deayele3=document.getElementById('seconds');
const newyear=new Date('1 Jan 20225 00:00:00').getTime();
newyearcountdown();
function newyearcountdown() {
    const now=new Date('9 Dec 2024 08:08:08').getTime();
    const t=newyear-now;
    const seconds=1000;
    const minutes=(seconds*60);
    const hours=(minutes*60);
    const days=(hours*24);
    const d=Math.floor(t/days);
    console.log("t,d",t," ",days);
   const h=Math.floor((t%days)/hours);
   const m=Math.floor((t%hours)/minutes);
   const s=Math.floor((t%minutes)/seconds);
   console.log(d);
   console.log(h);
   console.log(m);
   console.log(s);
   deayele.innerHTML=d;
   deayele1.innerHTML=h;
   deayele2.innerHTML=m;
   deayele3.innerHTML=s;
   setTimeout(newyearcountdown(),1000);
    if(t<0){
        deayele.innerHTML='00'; 
        deayele1.innerHTML='00';
        deayele2.innerHTML='00';
        deayele3.innerHTML='00';

    }
}
