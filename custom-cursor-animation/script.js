var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
var overlay = document.querySelector("#overlay");

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        // ease: "back.out"
    })
})

overlay.addEventListener("mouseenter", () => {
    cursor.innerHTML = "Click me";
    gsap.to(cursor, {
        scale: 4,
        duration: 0.5,
    })
})

overlay.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
    })
})

