const searchBarEl=document.querySelector(".search-bar");
const magnifierji=document.querySelector('.magnifier');
const miciconji=document.querySelector(".mic-icon");
magnifierji.addEventListener('click',()=>{
    searchBarEl.classList.toggle("active");
});

miciconji.addEventListener('click',()=>{
    searchBarEl.classList.toggle("active2");
});