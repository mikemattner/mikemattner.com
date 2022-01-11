---
title: Micro Trend&#58; Non-Rectangular Headers
date: 2017-06-09
type: link
description: 'Fun ways to make a boxy, grid-based medium a bit more exciting.'
tag:
    - Design
    - Development
link:
    - https://css-tricks.com/creating-non-rectangular-headers/
---
I love techniques that allow designers and developers to “break” the boxed in nature of web design in a general sense. As a micro trend, non-rectangular headers have become one of my favorite techniques to accomplish this ask.

## So, how do I do this?

Per [CSS-Tricks](https://css-tricks.com/creating-non-rectangular-headers/), there are several methods available to accomplish this particular task:

1. Background images, which appears to be one of the weaker methods
2. Inline svgs, which can be modified pretty well, and reduce the load on the browser
3. `border-radius`, which allows for the more convex circular look
4. `clip-path`, which appears to have browser compatibility issues
5. And my favorite, `transform: skew`

As mentioned above, my preference in this case is `transform: skew`, although it introduces extraneous elements to the page–a seemingly forgotten rule is to not do so for presentational purposes–but this can certainly be accomplished with pseudo elements.

<p class="codepen" data-height="365" data-theme-id="dark" data-default-tab="css,result" data-user="erikdkennedy" data-slug-hash="EZozpV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Trapezoid Header Using Transform: SkewY">
  <span>See the Pen <a href="https://codepen.io/erikdkennedy/pen/EZozpV">
  Trapezoid Header Using Transform: SkewY</a> by Erik Kennedy (<a href="https://codepen.io/erikdkennedy">@erikdkennedy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The article referenced above uses an extra element in the document to create the effect–which is perfectly reasonable–as does the stripe website.

> Stripe’s homepage design uses this method, and even more brilliantly, they include a few children spans (each is a block of color) that get skewed with the parent element, creating a more complex and colorful effect.

I don’t entirely know that I like the extra elements, but I come from a slightly different era of development that saw this technique of creating decoration-only elements as heresy, while still using it regularly.

Anyway, I enjoy looking at the sorts of things that front end devs do to accomplish what UX/UI designers come up with.