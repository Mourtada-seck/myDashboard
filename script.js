const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const modeSombre = document.querySelector('#sombre');
const modeClair = document.querySelector('#clair');
const themeToggler = document.querySelector('.theme-toggler');

// affichage du menu
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = "block";
});

// fermantation du menu
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none";
});

// mode sombre 
modeSombre.addEventListener("click",()=>{
    document.body.style.background = "#000"
})

// mode clair
modeClair.addEventListener("click",()=>{
    document.body.style.background = "#fff"
})


themeToggler.addEventListener("click",()=>{
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})