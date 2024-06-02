const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = "block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none";
})