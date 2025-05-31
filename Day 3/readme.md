# Day 3 - GSAP SVG Path Animation

### Topics I have learned are:

<details>
<summary><code>SVG Path Animation</code></summary>

#### This demonstrates how to animate SVG paths using GSAP and mouse interactions

## syntax:

```javascript
gsap.to("svg path", {
    attr: { d: pathValue },
    duration: 0.3,
    ease: "power3.out"
})
```

### Key Concepts:
- `attr`: Used to animate SVG attributes
- `d`: The path data attribute that defines the SVG path
- `ease`: Different easing functions for smooth animations
</details>

<details>
<summary><code>Mouse Events</code></summary>

#### Using mouse events to create interactive animations

## syntax:

```javascript
element.addEventListener("mousemove", (event) => {
    // Access mouse coordinates with event.x and event.y
})

element.addEventListener("mouseleave", () => {
    // Reset or change animation
})
```
</details>

<details>
<summary><code>SVG Path Syntax</code></summary>

#### Understanding basic SVG path commands

```javascript
// M = Move to
// Q = Quadratic Bezier curve
// Syntax: M x y Q controlX controlY endX endY
var path = "M 10 250 Q 620 250 1230 250"
```
</details>

## Getting Started

1. Include GSAP in your HTML:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

2. Create an SVG element with a path
3. Add mouse event listeners
4. Use GSAP to animate the path

## Key Features

- Interactive SVG path manipulation
- Smooth animation with GSAP
- Mouse movement tracking
- Elastic animation on mouse leave
- Quadratic Bezier curve demonstration

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [SVG Path Documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
- [GSAP SVG Animation](https://greensock.com/svg/)