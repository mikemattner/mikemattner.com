---
title: 'Fluid Type for Better Responsive&nbsp;Text'
date: 2018-06-06
type: entry
description: 'On creating a fully responsive site that scales just about every element based on browser width.'
tag:
    - Development
    - Design
---
I’ve been playing around with fluid type for a while and happened upon a pen by…I don’t remember who. I forked it a while ago, but in essence we’re simply attempting to scale type based on viewport size.

In the instance highlighted here, let’s say we want a bold header in a hero space to essentially always have that bold feel no matter what screen size we’re viewing items at:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="mikemattner" data-slug-hash="vrKoGO" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Scaling Text with Viewport Units">
  <span>See the Pen <a href="https://codepen.io/mikemattner/pen/vrKoGO">
  Scaling Text with Viewport Units</a> by mikemattner (<a href="https://codepen.io/mikemattner">@mikemattner</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


Not a bad solution, but if you’re not careful that can scale infinitely and in a way that is just a bit too in your face. My suggestion is to set–at the very least–an upper bound to that scaling. I’ve done something similar on this very site.

My minimum size is set at 14px, plus a half a percent of the viewport width with a `line-height` set based on 1.1em plus a half a percent of the viewport width. This will scale up infinitely, but I found that that maximum `font-size` I wanted was closer to 20px. Through a little viewport resizing and code inspection, I found the viewport width where this formula would generate a nominal 20px size and set that as my upper bound:

```css
html {
  font-size: calc(14px + 0.5vw);
  line-height: calc(1.1em + 0.5vw);
  @media (min-width: 1200px) {
        font-size: 20px;
  }
}
```

Not too bad of a result as far as I can tell. The rest of my typographic sizing builds on this initial sizing and seems to work out fairly well for my purposes.

Easy technique.