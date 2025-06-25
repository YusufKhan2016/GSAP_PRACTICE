var path = "M 10 250 Q 620 250 1230 250";
var finalPath = "M 10 250 Q 620 250 1230 250";


var string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    path = `M 10 250 Q ${dets.x} ${dets.y} 1230 250`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3, 
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", ()=> {
    gsap.to("svg path", {
        attr: { d:finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
        
    })
})