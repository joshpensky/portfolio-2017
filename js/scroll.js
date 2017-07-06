var start = 0;
var lastScroll = 0;

window.addEventListener("load", () => {
    lastScroll = window.scrollY;
});

window.addEventListener("scroll", () => {
    var cards = document.getElementById('show-cards'),
        view = inViewport(cards);
    console.log(view.top);
    if (view.inView) {
        if (lastScroll < window.scrollY) {
            start -= 1;
        } else if (lastScroll > window.scrollY) {
            start += 1;
        }
        lastScroll = window.scrollY;
        start = Math.max(-20, Math.min(20, start));
        cards.style.top = start + "px";
    }
});


function inViewport(elem) {
    var top = elem.offsetTop;
    var height = elem.offsetHeight;

    while (elem.offsetParent) {
        elem = elem.offsetParent;
        top += elem.offsetTop;
    }

    return {
        "inView": top < (window.pageYOffset + window.innerHeight) && (top + height) > window.pageYOffset,
        "top": top
    }
}
