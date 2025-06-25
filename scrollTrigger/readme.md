# Day 2 - GSAP ScrollTrigger

### Topics I have learned are:

<details>
<summary><code>ScrollTrigger</code></summary>

#### This is used to create scroll-based animations with GSAP. It allows elements to animate based on the scroll position.

## syntax:

```javascript
gsap.to("selector", {
    // animation properties
    scrollTrigger: {
        trigger: "element-that-triggers-animation",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -600%",
        scrub: 2,
        pin: true
    }
})
```

### Key ScrollTrigger Properties:

- `trigger`: The element that triggers the animation
- `scroller`: The element that causes scrolling (usually "body")
- `markers`: Show visual markers for trigger points (helpful for debugging)
- `start`: When the animation should start ("top center", "bottom 80%", etc.)
- `end`: When the animation should end
- `scrub`: Creates a smooth scrolling animation (true or number for duration)
- `pin`: Pins the element during the animation
</details>

## Getting Started

1. Include GSAP and ScrollTrigger plugin in your HTML:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

2. Create your scroll-based animations in `script.js`

## Resources

- [GSAP ScrollTrigger Documentation](https://greensock.com/scrolltrigger/)
- [ScrollTrigger Examples](https://greensock.com/st-demos/)
- [GSAP Forums](https://greensock.com/forums/)