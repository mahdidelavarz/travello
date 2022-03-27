function getSearch(){
const searchBox = document.querySelector(".searchForm");
 searchBox.classList.toggle('active');
const searchMenu =document.querySelector(".header-serch-box");
 searchMenu.classList.toggle('unActive');
}

const goTop = document.querySelector(".goTop");

window.addEventListener("scroll",() => {
if(window.pageYOffset > 200){
 goTop.style.opacity = 1;
} else{
 goTop.style.opacity = 0;
}
});