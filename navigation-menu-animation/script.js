var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");
var full = document.querySelector("#full");

var tl = gsap.timeline();

tl.from("#full", {
    right: "0",
    duration: 0.2,
})

tl.from("#full h4", {
    x: 150,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2
})

tl.from("#full i", {
    opacity: 0,
    duration: 0.2,
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play()
    document.addEventListener("click", handleOutsideClick);
});

cross.addEventListener("click", () => {
    tl.reverse()
    document.removeEventListener("click", handleOutsideClick);
});

const handleOutsideClick = (e) => {
    if(!menu.contains(e.target) && !full.contains(e.target)){
        tl.reverse();
        document.removeEventListener("click", handleOutsideClick);
    }
}

