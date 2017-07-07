var selector;
var slideList;
var slideContainer;
var selectorStartPos;
var rightPadding;

window.addEventListener("load", () => {
    selector = document.getElementById('selector');
    slideList = document.querySelector('.slide-list');
    slideContainer = document.querySelector('.slide-container');
    rightPadding = document.getElementsByClassName('slide__item')[0];
    rightPadding = window.getComputedStyle(rightPadding).marginRight.split("px")[0];
    slideList.addEventListener("scroll", () => {
        if (slideList.scrollLeft > 0) {
            slideContainer.classList.add("slide-container--left");
        } else {
            slideContainer.classList.remove("slide-container--left");
        }
        if ((slideList.offsetWidth + slideList.scrollLeft) >= slideList.scrollWidth - rightPadding) {
            slideContainer.classList.remove("slide-container--right");
        } else {
            slideContainer.classList.add("slide-container--right");
        }
    })
    selectorStartPos = slideList.getBoundingClientRect().left;
});

window.addEventListener("resize", () => {
    selectorStartPos = slideList.getBoundingClientRect().left;
});

function selectItem(elem) {
    var viewer = document.querySelector("#viewer");
    viewer.style.backgroundImage = elem.style.backgroundImage;
    var selected = document.querySelector('.slide__item--selected');
    if (elem != selected) {
        selected.classList.remove("slide__item--selected");
    }
    elem.classList.add("slide__item--selected");
    selector.style.transform = "translateX(" + ((elem.getBoundingClientRect().left + slideList.scrollLeft) - selectorStartPos) + "px)";
}
