# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This was a really fun challenge which stretched my CSS and JS abilities. It took me the good part of a day to complete, with a fair few problems which took heaps of research.

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Links

- Solution URL: [https://github.com/Nick1600/FM-launch-countdown-timer]
- Live Site URL: [https://nick1600.github.io/FM-launch-countdown-timer/]

## My process
I started by adding structural elements to index.html. Once I had this draft down, I started style.css; styling elements from the top down. The major stumbling block here was figuring out the slightly different shading for the top half of the counters. I used CSS Flex-box to position the counters easily. 
After I was reasonably happy with the style and structure, I moved on to figuring out the functionality of the countdown. I tried out a few ideas that I had, like using a for loop, with a delay. But i couldn't figure out anything that would re-set the second counter once it reached 0. So I took to google and YouTube, and went from there.
Then came adding some level of responsiveness using media queries, playing around with a few more things, and then deciding that it was complete.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learnt a lot with this little project. For starters, having two different numbers, stacked just right to give the effect that they're one number, with the top half a different shade to the bottom: 

```html
<article class="hour-count" id="counter">
        <section class="hour-display" id="display">
          <div class="hour-top" id="top">
            <p id="dis-top" class="hour-dis-top">23</p>
          </div>
          <div class="hour-bottom" id="bottom">
            <p id="dis-bottom" class="hour-dis-bottom">23</p>
          </div>
        </section>
        <p class="label" id="hours">Hours</p>
      </article>
```
```css
#top {
    background-color: hsl(236, 21%, 20%);
    color: hsla(345, 95%, 68%, 0.8);
    overflow: hidden;
    height: 50%;
    border-radius: 0.5rem;
}
#bottom {
    background-color: hsl(236, 21%, 26%);
    color: hsl(345, 95%, 68%);
    overflow: hidden;
    height: 50%;
    border-radius: 0.5rem;
}
#dis-top {
    position: relative;
    top: 1.7rem;
}
#dis-bottom {
    position: relative;
    bottom: 3.3rem;
}
```
My other major takeaway from this project came from using time functionality with JS. I hadn't encountered this before, so it did take a fair bit of trial and error, and research. 

```js
//get millisecond count
    const countDate = new Date("August 27, 2021, 17:45:00").getTime();
    const nowTime = new Date().getTime();
    const timeToo = countDate - nowTime;
    console.log(timeToo);

    //convert millisecond to day, hour, minute, second
    const days = Math.floor(timeToo / (1000*60*60*24));
    const hours = Math.floor(timeToo % (1000*60*60*24) / (1000*60*60))
    const mins = Math.floor(timeToo % (1000*60*60) / (1000 * 60));
    const secs = Math.floor(timeToo % (1000*60) / (1000));
}
```

### Continued development

One thing that was out of my reach with this challenge was creating a card-flip animation when a counter changed. I haven't learned anything about transitions/animations with DOM manipulations. Although attempting some research (and while I am sure I could learn these concepts, and will at a later date) the learning curve seemed a bit steep when taking into account the time I was wanting to devote to this project. One day I will come and add this functionality after devoting a bit more time to the concepts.

### Useful resources

- ['Simple Javascript Countdown Tutorial' YouTube video](https://www.youtube.com/watch?v=Rib69h2DOxg&ab_channel=DevEd) - Layed out some of the time functions and how to apply them in a way that was easy to work into a project. Awesome video.

## Author

- Github - [Nick1600](https://github.com/Nick1600)
- Frontend Mentor - [@Nick1600](https://www.frontendmentor.io/profile/Nick1600)

## Acknowledgments

Big shout out to Frontend Mentor. They provide an awesome service which has been so helpful to me as an aspiring self-taught web developer. I will be using this website often as I develope my skills.

As always, feedback is more than welcome. Thanks heaps!