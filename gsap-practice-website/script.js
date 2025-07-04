gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline()

const pageOneAmination = () => {

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.08,
    })
    
    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })
    
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    })
    
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4
    })
    
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.4,
    },
        "-=0.5" //means to delay the timeline
    )

    gsap.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".section1bottom",
            scroller: "body",
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true     
        }
    })

}

pageOneAmination(); 

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top -10%",
        scrub: 2,
    }   
})


tl2.from(".services", {
    opacity: 0,
    y: 30,
    duration: 0.5
})

tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 2,
},"anim")

tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 2,
},"anim")

tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 2,
},"anim2")

tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 2,
},"anim2")
