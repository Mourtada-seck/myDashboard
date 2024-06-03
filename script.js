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
    document.querySelector('h1:nth-child(1)').style.color = "#fff"
    document.querySelector('#h2').style.color = "#fff"
    document.querySelector('.h2').style.color = "#fff"
    document.querySelector('.mise').style.color = "#fff"
    document.querySelector('b').style.color = "#fff"   
    document.querySelector('.admin').style.color = "#BED3C3"   
})

// mode clair
modeClair.addEventListener("click",()=>{
    document.body.style.background = "#fff"
    document.querySelector('h1:nth-child(1)').style.color = "#000"
    document.querySelector('#h2').style.color = "#000" 
    document.querySelector('.h2').style.color = "#000" 
    document.querySelector('.mise').style.color = "#000" 
    document.querySelector('b').style.color = "#000" 
    document.querySelector('.admin').style.color = "#BED3C3"   
})


themeToggler.addEventListener("click",()=>{
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})