---
title: Giving Nuxt Content a Try
date: 2020-12-09
type: entry
description: 'I&rsquo;m now taking advantage of Nuxt&rsquo;s built-in content handling features.'
caption: Found on Unsplash
image: /images/feature/code.jpg
tag:
    - Development
---
One of the primary reasons I exited the WordPress space for my personal portfolio and blog was because of a series of hacks to my hosted installation. No matter what I tried to do to harden it, there was always some path to exploitation.

At the same time as all of this was going on, I was also diving head first into the world of [Vue](https://vuejs.org/) and [Nuxt](https://nuxtjs.org/) at work. Going with a solution like this for a personal project seemed like such a natural path towards professional development, and a safe solution for ditching WordPress. No offense to WordPress&mdash;it can be great and I miss the writing experience&mdash;but I just couldn't continue to fix a constant hack that probably shouldn't have been happening.

## How to Handle Content
Quite frankly, one of the most difficult decisions I made was to just jettison everything from a content perspective and to start fresh (although, you'll see on the site some of that old content back in action). I think I'd been posting periodically since about 2006 on this very domain. That is a LONG time, and a lot of SEO potential I just scrapped.

As I found myself more interested in this development direction, and the notion of static site generators, I figured a simple markdown implementation would suit me just fine.

Unfortunately, that was no small task with Nuxt. With [Gatsby](https://www.gatsbyjs.com/) or even [Gridsome](https://gridsome.org/), you get solutions out of the box for some of these content needs, which is fantastic. Nuxt wasn't exactly built with documention/post content in mind, I suspect.

In either case, solutons were available for adding Markdown support with my installation, it was just a bit of a mysterious and involved process trying to track down solutions. I ended up settling on a particular module and edited `nuxt.config.js` to add it.

```javascript
module.exports = {
  [...]
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    }
  }
  [...]
}
```

From there, adding front matter support and then route generation to the config file was a little goofy. The whole thing felt a little hacked together, to be honest. Especially in comparison to the previously mentioned frameworks that included all of this out of the box.

```javascript
import path from 'path'
/* eslint-disable */
const glob = require('glob')
const hljs = require('highlight.js')
const md = require('markdown-it')({
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return '' // use external default escaping
  }
})
/* eslint-enable */
let files = glob.sync( '**/*.md' , { cwd: 'articles' });

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/${slug}`;
}

/* Generating routes */
module.exports = {
  [...]
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  }
  [...]
}
```

Through some other wonderful magic in different pages and dynamic routes, I got it all functional. And then I just stopped trying to write using this system. It felt messy, cumbersome, and not fun. It made me miss WordPress.

## Nuxt Content

I was pretty close to giving up on this experiment entirely until I saw the release of [Nuxt Content](https://content.nuxtjs.org). It completely changed the game for me. I no longer needed to think about how to handle routes, tagging, etc. when it came to the content. I could rely on the system itself to make development and writing a breeze.

And that is basically where we are today. Check out this function and pay particular attention to how easy it is to fetch content types with this system.

```javascript
async asyncData({ $content, params }) {
    try {
      const writing = await $content('writing', params.slug).fetch()

      const [prev, next] = await $content('writing')
        .only(['date', 'slug'])
        .sortBy('date', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        writing,
        prev,
        next,
      }
    } catch (err) {
      /* eslint-disable */
      console.debug('No Post:', err)
      /* eslint-enable */
      return false
    }
}
```

Pretty damn easy if you ask me.

I tried to use Forestry previously for writing content (missing the writing experience of WordPress and all), but I never could get that workflow to stick. Right now I'm happily typing away in VS Code, which suites me just fine.

We'll see how long I can maintain enthusiasm.
