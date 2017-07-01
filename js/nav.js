var lastPos = 0;
var hidden = false;

window.addEventListener("load", () => {
    lastPos = window.scrollY;
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        if (lastPos >= window.scrollY) {
            hidden = false;
        } else {
            hidden = true;
        }
        lastPos = window.scrollY;
    } else {
        hidden = false;
    }
    //navHider();
});

function navHider() {
    var navBar = document.querySelector("nav");
    if (hidden) {
        navBar.classList.add("nav__hidden");
    } else {
        navBar.classList.remove("nav__hidden");
    }
}

function navOverlay() {
    var navBar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navBar.classList.add("nav__overlay");
    } else {
        navBar.classList.remove("nav__overlay");
    }
}
