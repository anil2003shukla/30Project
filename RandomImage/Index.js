const imageCon=document.querySelector('.image-container');
const btns=document.querySelector('.btn');
let imgaNumber=10;
btns.addEventListener('click',()=>{
    addNewImg();
})
function addNewImg(){
    for(let i=0;i<imgaNumber;i++){
        const newImg=document.createElement('img');
        newImg.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
        imageCon.appendChild(newImg);
    }
  
}
