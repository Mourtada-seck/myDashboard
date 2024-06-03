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
    document.body.style.background = "#1c2733"
    document.querySelector('h1:nth-child(1)').style.color = "#fff"
      document.querySelector('.sidebar').style.background = "#427AA1"
      document.querySelector('.insights>div').style.background = "#427AA1"
      document.querySelector('.insights>div:nth-child(2)').style.background = "#427AA1"
      document.querySelector('.insights>div:nth-child(3)').style.background = "#427AA1"
      document.querySelector('table').style.background = "#427AA1"
      document.querySelector('.updates').style.background = "#427AA1"
    })
    
    // mode clair
    modeClair.addEventListener("click",()=>{
        document.body.style.background = "#677483"
        document.querySelector('.sidebar').style.background = "#fff"
        document.querySelector('.insights>div').style.background = "#fff"
        document.querySelector('.insights>div:nth-child(2)').style.background = "#fff"
        document.querySelector('.insights>div:nth-child(3)').style.background = "#fff"
        document.querySelector('table').style.background = "#fff"
        document.querySelector('.updates').style.background = "#fff"
       
})


themeToggler.addEventListener("click",()=>{
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})