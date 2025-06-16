# Day 4 - GSAP Custom Cursor Animation

### Topics I have learned are:

<details>
<summary><code>Mouse Movement Animation</code></summary>

#### This is used to create smooth cursor movement animations using GSAP and mousemove event

## syntax:

```javascript
element.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
        duration: 0.5
    })
})

/*
here dets.x and dets.y are the mouse coordinates
duration controls the smoothness of movement
*/
```
</details>

<details>
<summary><code>Cursor Scale Animation</code></summary>

#### This is used to create hover effects by scaling the cursor and adding text

## syntax:

```javascript
element.addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
        scale: 4,
        duration: 0.5
    })
})

/*
scale property changes cursor size
duration controls animation speed
*/
```
</details>

<details>
<summary><code>Overlay Interaction</code></summary>

#### This creates an invisible overlay for better cursor interaction with specific areas

## syntax:

```javascript
overlay.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5
    })
})

/*
overlay is a transparent div that triggers
cursor animations on hover
*/
```
</details>

<details>
<summary><code>CSS Positioning</code></summary>

#### Essential CSS properties for custom cursor implementation

```css
#cursor {
    position: fixed;
    z-index: 9;
    /* Other styling properties */
}

#overlay {
    position: absolute;
    z-index: 11;
    /* Other styling properties */
}
```
</details>

## Getting Started

1. Clone the repository.
2. Open `index.html` in your preferred web browser.
3. Add GSAP CDN to your HTML:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
```
4. Create the necessary HTML elements:
   - Cursor div
   - Main container
   - Overlay div
   - Image container

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GSAP Event Handling](https://greensock.com/docs/v3/GSAP/Timeline)