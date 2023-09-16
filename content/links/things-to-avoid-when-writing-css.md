---
title: Things To Avoid When Writing CSS
date: 2015-10-26
type: link
description: 'I do not agree with this take.'
link: https://medium.com/@Heydon/things-to-avoid-when-writing-css-1a222c43c28f#.sk52gph80
tag:
    - Development
---
> Multiple files
> 
> A lot of web development seems to be about splitting things up into manageable chunks or “components”. For each discrete bit of javascript functionality or each HTML partial I might make a dedicated file, then organize related files into folders named javascript and html or controllersand templates. Whatever you like. This way, you can easily dip into the file system and focus on just the file containing the code you want to edit at the time.
> 
> This doesn’t work so well for CSS.

I don’t know man. Chunking out CSS files, and then ensuring they’re imported in an order that allows for a proper cascade, can be more useful than painful. Especially if you’re dealing with a large project.
