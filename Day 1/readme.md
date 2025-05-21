# Day 1 - GSAP Practice

### Topics I have learned are:

<details>

<summary><code>to</code></summary>

#### This is used to define the element which form will it take from it's initial state after the defined `duration` or `delay` 

## syntax:

``` javascript

gsap.to("h1",{
    // existing css properties or GSAP properties
})

/*
here the "h1" is tag name .. alsoo it can be the the
"id" or ".class" 
*/

```
</details>

<details>
<summary><code>from</code></summary>

#### This is used to define how it will come to it's initial state from the temporary state 

## syntax:

``` javascript

gsap.from("h1",{
    // existing css properties or GSAP properties
})

/*
here the "h1" is tag name .. alsoo it can be the the
"id" or ".class" 
*/

```
 

</details>
<details>
<summary><code>Stagger</code></summary>

#### This affect on the same type of elements in html to give them them the gsap properties seperatly one after another

## syntax:

``` javascript

gsap.from("h1",{
    // existing css properties or GSAP properties
    stagger:0.2,
})

/*
here the "h1" is tag name .. alsoo it can be the the
"id" or ".class" 
*/

```
 

</details>
<details>
<summary><code>Timeline</code></summary>

#### This affect on the different or same type of elements in html to give them them the gsap properties seperatly one after another

## syntax:

``` javascript


var tl = gsap.timeline();

tl.from("h2",{
    //Existing Properties 
})

tl.from("h4",{
    //Existing Properties 
})

tl.from("h1", {
    //Existing Properties 
})

/*
here the "h1" is tag name .. alsoo it can be the the
"id" or ".class" 
*/

```
 

</details>









## Getting Started

1. Clone the repository.
2. Open `index.html` in your preferred web browser.
3. Modify `script.js` to add your desired GSAP animations.

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

