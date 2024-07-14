const testimonial=[
    {
        user:"Anil" ,
        text:"I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        user:"Chandan" ,
        text:"apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money.",
        photoUrl:"https://plus.unsplash.com/premium_photo-1679438757241-82e0563379bf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjBwcm9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
    } ,
    {
        user:"Swayam" ,
        text:"apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money.",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    }

];
const imgEle=document.querySelector('img');
const userEle=document.querySelector('.user');
const textEle=document.querySelector('.text');
let indx=0;
updateTestimonial()
function updateTestimonial(){
    const {user,text,photoUrl}=testimonial[indx];
    imgEle.src=photoUrl;
    textEle.textContent=text;
    userEle.textContent=user;
    indx++;
    if(indx==testimonial.length){
        indx=0;
    }
    setTimeout( ()=>{
        updateTestimonial()
    },2000)
}