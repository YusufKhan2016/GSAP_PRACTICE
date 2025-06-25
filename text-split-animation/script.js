const breakTheText = () => {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var halfValue = Math.floor(splittedText.length/2);

    var clutter = "";

    splittedText.forEach((elem,i)=> {
        if(i < halfValue) clutter += `<span  class="a" >${elem}</span>`;
        else clutter += `<span class="b" >${elem}</span>`;
    })

    h1.innerHTML = clutter;

}

breakTheText();

// gsap.from("h1 .a", {
//     y: 100,
//     opacity:0, 
//     duration: 1,
//     delay: 0.5,
//     stagger:0.15,
// })
// gsap.from("h1 .b", {
//     y: 100,
//     opacity:0, 
//     duration: 1,
//     delay: 0.5,
//     stagger:-0.15,
// })

gsap.from("h1 span", {
    y:200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: {
        grid: [1,1],
        from: "center",
        amount: -0.4,
    }
})