gsap.to("#page2 h1",{
    transform: "translateX(-61%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end:"top -600%",
        scrub:1 ,   
        pin:true,
    }
})