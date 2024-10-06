# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshots

|                 Mobile designed at 375px:                 |                 Tablet designed at 768px:                 |                Desktop designed at 1440px:                 |
| :-------------------------------------------------------: | :-------------------------------------------------------: | :--------------------------------------------------------: |
| ![](./screenshots/screenshot-mobile-light-start-menu.png) | ![](./screenshots/screenshot-tablet-light-start-menu.png) | ![](./screenshots/screenshot-desktop-light-start-menu.png) |
|                   Mobile (dark theme):                    |                   Tablet (dark theme):                    |                   Desktop (dark theme):                    |
| ![](./screenshots/screenshot-mobile-dark-start-menu.png)  | ![](./screenshots/screenshot-tablet-dark-start-menu.png)  | ![](./screenshots/screenshot-desktop-dark-start-menu.png)  |

### Links

- Solution URL: [https://github.com/elisilk/frontend-quiz-app](https://github.com/elisilk/frontend-quiz-app)
- Live Site URL: [https://elisilk.github.io/frontend-quiz-app/](https://elisilk.github.io/frontend-quiz-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM naming
- Fluid typography and spacing

### What I learned

- [How can I emulate prefers-color-scheme media query in Chrome?](https://stackoverflow.com/questions/57606960/how-can-i-emulate-prefers-color-scheme-media-query-in-chrome) - A cool trick for the Chrome DevTools to emulate a light or dark theme preference.
- Light and dark themes
  - [Building a theme switch component](https://web.dev/articles/building/a-theme-switch-component)
  - [The Quest for the Perfect Dark Mode Toggle, using Vanilla JavaScript](https://www.bram.us/2020/04/26/the-quest-for-the-perfect-dark-mode-using-vanilla-javascript/) and [the associated CodePen](https://codepen.io/bramus/pen/jObmydd)
  - [The best light/dark mode theme toggle in JavaScript](https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f)
  - [Light and dark mode in just 14 lines of CSS](https://dev.to/whitep4nth3r/light-and-dark-mode-in-just-14-lines-of-css-424e)
  - [The simplest CSS variable dark mode theme](https://lukelowrey.com/css-variable-theme-switcher/)
  - [Dark Mode in CSS Guide](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
  - [`prefers-color-scheme:`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
- [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) vs. [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) vs. ??
  - [How to insert a large block of HTML in JavaScript?](https://stackoverflow.com/questions/16270761/how-to-insert-a-large-block-of-html-in-javascript) - I made use of this idea, but I am questioning just setting the `innerHTML` equal to the big block of HTML code. I now think a better option is to make use of the [`insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) method and related methods.
  - [How to Use the JavaScript insertAdjacentHTML() method for Efficient DOM Manipulation](https://www.freecodecamp.org/news/javascript-insertadjacenthtml-method-efficient-dom-manipulation/)
- [HTML Color Mixer](https://www.w3schools.com/colors/colors_mixer.asp) - I wasn't exactly sure how to get the hover color for the button. The design calls for the main purple (#a729f5) with a layer on top of pure white (#ffffff) at 50% opacity. I'm still not sure how to figure out what that color ends up being, so I just used this color mixer and picked a value in the middle. At some point, it's probably worth [figuring out the math that's involved](https://stackoverflow.com/questions/50574524/color-of-stacked-semi-transparent-boxes-depends-on-order/50574620#50574620).
- [Creative Uses for CSS Inner Border and 3 Ways to Set a Border](https://cloudinary.com/guides/front-end-development/creative-uses-for-css-inner-border-and-3-ways-to-set-a-border) - To do an "outline" of an input element without causing any layout shifts, I like this use of the [`outline-offset`](https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset) attribute so the outline becomes an inner border.
- [Is there a CSS parent selector?](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector) - I'm happy to figure out this use of the [`:has` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) as a parent selector. So cool!
- [How to style an HTML radio input element such that the radio button is absent](https://stackoverflow.com/questions/73572206/how-to-style-an-html-radio-input-element-such-that-the-radio-button-is-absent)
- [Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)
- [`<input type="radio">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) - Used for the answer choices, and the start menu options too.
- [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) - Used for the theme toggle switch.
  - [CodePen All-CSS Toggle Switch (Checkbox Hack)](https://codepen.io/mburnette/pen/LxNxNg)
  - [Great CSS Toggle Switch Options You Can Use On Your Site](https://www.sliderrevolution.com/resources/css-toggle-switch/)
- [Can I escape HTML special chars in JavaScript?](https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript/6234804#6234804)
- [Remove All Elements with a Class Using JavaScript](https://stackabuse.com/bytes/remove-all-elements-with-a-class-using-javascript/)
- [Convert number to alphabet letter](https://stackoverflow.com/questions/36129721/convert-number-to-alphabet-letter)
- [Get loop counter/index using for…of syntax in JavaScript](https://stackoverflow.com/questions/10179815/get-loop-counter-index-using-for-of-syntax-in-javascript)
- [Web form building blocks](https://developer.mozilla.org/en-US/docs/Learn/Forms), [the `<form>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form), and [What is the purpose of the HTML form tag?](https://stackoverflow.com/questions/31066693/what-is-the-purpose-of-the-html-form-tag)
- Despite the last challenge with a similar concern, I still don't feel comfortable with styling the input range (the progress bar in this challenge), and I don't feel like I've found clear answers or a go-to guide. Right now, the guide I found most clear and useful was [this one](https://blog.logrocket.com/creating-custom-css-range-slider-javascript-upgrades/), which I did adapt `#range1` for my implementation of the progress bar for this solution. It basically makes use of a `overflow: hidden` and a super-long [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) to simulate the left side of the range filling up as the value moves up.
  - [Creating a custom CSS range slider with JavaScript upgrades](https://blog.logrocket.com/creating-custom-css-range-slider-javascript-upgrades/) and the associated CodePen - [Custom CSS Range slider_v2.0](https://codepen.io/ibaslogic/pen/zYMJZaQ)
  - [How to style HTML5 range input to have different color before and after slider?](https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider)
  - [Generate CSS to style range inputs that look consistent across all browsers](https://range-input-css.netlify.app/) and the associated article, [Creating A Custom Range Input That Looks Consistent Across All Browsers](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/)
- [<script>: The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) - Learned that "The `defer` attribute has no effect on module scripts — they defer by default." So I feel like I needed the `type="module"` in order to include `await` or an `async` function to load in the JSON file. But maybe there is a better way to do this? It's worth reading a bit more about [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and how best to make use of them.
  - [Other differences between modules and standard scripts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts)
  - [Top level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await)
  - [SyntaxError: await is only valid in async functions, async generators and modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_await)
- [Can an input field have two labels?](https://stackoverflow.com/questions/2829936/can-an-input-field-have-two-labels) - Interesting. I didn't realize that an `input` could have more than one `label` associated with it, but apparently it can. This came up as I made use of the [`.labels`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels) property a fair amount on this solution, and it returns a `NodeList` rather than a single Node.
- [Search an array of JavaScript objects for an object with a matching value](https://stackoverflow.com/questions/7364150/search-an-array-of-javascript-objects-for-an-object-with-a-matching-value) - I love these neat and elegant ways of searching through arrays of objects. So cool.
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Continued development

Hmm 🤔 ...

Specific areas that the solution should be improved:

- Check the responsiveness of the header height
- Maintain the header height even without a category icon+text showing
- Style the progress bar
- Should the answer choice text be so big? And should it have some line spacing when it goes beyond one line?
- Remove the error message once an answer choice is selected (no need to wait for the submit answer button to be clicked)
- Remove the focus/active/hover state from a button after it is pressed - how to do this?
- Remove use of `innerHTML` in favor of [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) and related functions. Also remove use of `textContent`? Can affect how a question or answer is displayed. Examples:
  - CSS Q5
- Investigate why (and under what conditions) a correct answer is not marked as correct. Likely involves how the HTML is escaped either in the quiz data or in the HTML document. Seems to be mostly about the escape of single quote marks. Examples:
  - JavaScript Q1, Q7
  - Accessibilty Q2
- Reset the header after a quiz is completed
- Prevent users from selecting a different answer choice after the answer choice has been submitted

More general ideas I want to consider:

- Randomize the order of the answer choices for a particular question?
- Randomize the order of the questions?

### Useful resources

- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [MDN Guides](https://developer.mozilla.org/en-US/docs/Learn) - So many resources and nice explanations, including stuff [tutorials specific to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
- [Every Layout](https://every-layout.dev/) - My go to source for thinking about layouts now.
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
