


/* ====== start toggler menu ====== */

let toggleMenu = document.querySelector(".toggle-menu");
let ulMenu = document.querySelector(".ul-menu");
let liClose_1 = document.querySelector(".li_close_1");
let liClose_2 = document.querySelector(".li_close_2");

// show
toggleMenu.addEventListener("click", () => {
    ulMenu.classList.add("open");
});


// hidden
liClose_1.addEventListener("click", () => {
    ulMenu.classList.remove("open");
});

liClose_2.addEventListener("click", () => {
    ulMenu.classList.remove("open");
});

document.onscroll = () => {
    ulMenu.classList.remove("open");
}



/* ====== end toggler menu ======= */



/* ====== end sticky header ======= */
window.addEventListener("scroll", () => {
    if(this.pageYOffset > 60) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
});


/* ====== end sticky header ======= */
















