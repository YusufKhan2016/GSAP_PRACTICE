window.addEventListener("wheel", (dets)=> {
    if(dets.deltaY>0){  
        gsap.to(".marque", {
        transform: "translateX(-100%)",
        duration:3,
        repeat: -1,
        ease: "none",
        })

        gsap.to("img", {
            rotate: 180,
        })  

    }else{
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration:3,
            repeat: -1,
            ease: "none",
        })

        gsap.to("img", {
            rotate: 0,
        })
    }
})