//VARIABLE

const divGaleria = document.querySelector(".div-galeria");
const headerResponsive = document.querySelector(".header-responsive");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const divMenuResponsive = document.querySelector(".div-menu-responsive");
const navResponsive = document.querySelector(".nav-responsive");
const divSocialResponsive = document.querySelector(".div-social-responsive");

//DATA-GALERIA

const data = [
    {
        image: "../assets/image-2/auto-1.jpg"
    },
    {
        image: "../assets/image-2/auto-2.jpg"
    },
    {
        image: "../assets/image-2/auto-3.jpg"
    },
    {
        image: "../assets/image-2/imagen-carroceria-servicio-2.jpg"
    },
    {
        image: "../assets/image-2/imagen-carroceria-servicio.jpg"
    },
    {
        image: "../assets/image-2/auto-4.jpg"
    },
    {
        image: "../assets/image-2/auto-5.jpg"
    },
    {
        image: "../assets/image-2/auto-6.jpg"
    },
    {
        image: "../assets/image-2/auto-7.jpg"
    }
];

//RENDER-DATA

for(let item of data){
    divGaleria.innerHTML += `
        <img class="img-galeria" src="${item.image}" alt="image-galeria"/>
    `;
}

//MENU-RESPONSIVE

menu.addEventListener("click",()=>{
    headerResponsive.style.width = "100%";
    menu.style.display = "none";
    menuClose.style.display = "block";
    navResponsive.style.display = "block";
    divSocialResponsive.style.display = "block";
});

menuClose.addEventListener("click",()=>{
    headerResponsive.style.width = "0";
    menu.style.display = "block";
    menuClose.style.display = "none";
    navResponsive.style.display = "none";
    divSocialResponsive.style.display = "none";
});

navResponsive.addEventListener("click",()=>{
    headerResponsive.style.width = "0";
    navResponsive.style.display = "none";
    divSocialResponsive.style.display = "none";
    menuClose.style.display = "none";
    menu.style.display = "block";
});