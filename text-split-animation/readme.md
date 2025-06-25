# Day 6 - GSAP Text Split Animation

### Topics I have learned are:

<details>
<summary><code>Text Splitting</code></summary>

#### This demonstrates how to split text into individual characters for animation

## syntax:

```javascript
const breakTheText = () => {
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    
    // Create spans for each character
    splittedText.forEach((elem) => {
        clutter += `<span>${elem}</span>`;
    })
    
    h1.innerHTML = clutter;
}

/*
splits text into individual characters
wraps each character in a span for animation
*/
```
</details>

<details>
<summary><code>Grid Stagger Animation</code></summary>

#### This shows how to create complex stagger animations from the center

## syntax:

```javascript
gsap.from("h1 span", {
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: {
        grid: [1,1],
        from: "center",
        amount: -0.4
    }
})

/*
grid: defines the layout for stagger
from: determines the starting point
amount: controls timing between elements
*/
```
</details>

<details>
<summary><code>Text Styling for Animation</code></summary>

#### Essential CSS properties for text animation

```css
h1 {
    overflow: hidden;
}

h1 span {
    display: inline-block;
}

/*
overflow: hidden prevents characters from showing outside
display: inline-block allows transforms on spans
*/
```
</details>

<details>
<summary><code>Split Text with Classes</code></summary>

#### How to split text into two halves with different classes

```javascript
splittedText.forEach((elem, i) => {
    if(i < halfValue) 
        clutter += `<span class="a">${elem}</span>`;
    else 
        clutter += `<span class="b">${elem}</span>`;
})

/*
halfValue: middle point of text
class "a": first half characters
class "b": second half characters
*/
```
</details>

## Getting Started

1. Clone the repository.
2. Include GSAP in your HTML:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
```
3. Open `index.html` in your preferred web browser.