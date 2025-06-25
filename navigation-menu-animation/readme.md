# Day 5 - GSAP Menu Animation

### Topics I have learned are:

<details>
<summary><code>Timeline with Pause Control</code></summary>

#### This is used to create a sequence of animations that can be paused and controlled with play/reverse

## syntax:

```javascript
var tl = gsap.timeline();

tl.to("#element", {
    // animation properties
})
.from("#another", {
    // next animation
})

tl.pause(); // Timeline starts paused

// Control timeline with:
tl.play();    // Play forward
tl.reverse(); // Play backward
```
</details>

<details>
<summary><code>Menu Animation Sequence</code></summary>

#### This demonstrates how to create a smooth menu opening animation sequence

## syntax:

```javascript
var tl = gsap.timeline();

tl.to("#full", {
    right: "0",
    duration: 0.2,
})
.from("#full h4", {
    x: 150,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2
})

/*
Animations play in sequence
stagger creates a delay between each h4 element
*/
```
</details>

<details>
<summary><code>Click Outside Detection</code></summary>

#### This shows how to handle clicks outside the menu to close it

## syntax:

```javascript
const handleOutsideClick = (e) => {
    if(!menu.contains(e.target) && !full.contains(e.target)){
        tl.reverse();
        document.removeEventListener("click", handleOutsideClick);
    }
}

// Add/Remove the listener when needed
document.addEventListener("click", handleOutsideClick);
```
</details>

<details>
<summary><code>Backdrop Filter</code></summary>

#### CSS properties for creating a glassmorphism effect

```css
#full {
    background-color: rgba(255, 228, 196, 0.461);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

/*
Combines transparency with blur effect
for modern glass-like appearance
*/
```
</details>

## Getting Started

1. Clone the repository.
2. Include required CDN links in your HTML:
```html
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
```
3. Open `index.html` in your preferred web browser.
4. Click the menu icon to see the animated menu in action.

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP Timeline](https://greensock.com/docs/v3/GSAP/Timeline)
- [MDN Web Docs - Backdrop Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)