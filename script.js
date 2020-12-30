const toTop = document.querySelector(".scroll-top");
const nav = document.querySelector("nav");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

toTop.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
});


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 50) {
        nav.classList.add("active");
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
        nav.classList.remove("active");
    }
});