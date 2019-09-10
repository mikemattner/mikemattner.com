---
topic: Development
title: Built With Nuxt
date: 2019-05-02T17:00:00Z
description: Building with a more modern development experience.

---
This is now deprecated. 9/10/29

I've spent far too many years working with WordPress as my personal writing platform – to the point of including years and years of old, stale code as I rebuilt or redesigned my old personal blog.

And so last year I decided to learn [VueJS](https://vuejs.org/)–and with it [Nuxt](https://nuxtjs.org/)–and based on what I learned I'm using Nuxt as a static site generator for this very website. 

I started by building just a few simple pages that acted as a brochure style experience and have started to build out some additional features. The first is a simple blogging platform using markdown files.

### Loading Content

I'm primarily loading content from a few different static sources: yaml, json, and markdown files. For example, \`index.vue\` pulls in the following:

```js
// index.vue
import {
  intro,
  statement,
  skills,
  softwares,
  technical
} from '@/data/home.yaml'

import articles from '@/static/articleList.json'

```

The `articleList.json` file is the simplest way to link to the specific markdown file with a slug, give it a title, and give it a description. Eventually I could add quite a bit more detail, but today, it's functional. Unfortunately, I think that this approach is unlikely to remain sustainable.

```json
[  
  {  
    "title": "Built With Nuxt",  
    "description": "My journey towards a more modern development experience.",  
    "topic": "Development",  
    "date": "May 6, 2019",  
    "path": "built-with-nuxt"  
  }  
]
```

You could see how adding articles to this file might get tedious at some future date. A headless CMS might be the path I take, but as a development experience, this feels fairly solid. 

Optionally, perhaps I'll build this in such a way as to dynamically generate the information I need by scanning the markdown files, checking front matter, and then listing it all out without much intervention on my part.

I will go into more detail at a later date, but for now I'm going to launch an MVP of this feature, and then ready myself for adding a portfolio feature as well.