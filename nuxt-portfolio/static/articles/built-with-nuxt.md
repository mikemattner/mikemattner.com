I've spent far too many years working with WordPress as my personal writing platform – to the point of including years and years of old, stale code as I rebuilt or redesigned.

Last year, I embarked on a journey to learn <a href="https://vuejs.org/">Vue</a>, and with it <a href="https://nuxtjs.org/">Nuxt</a>. And what better way to learn even more about it than to use Nuxt as a static generator for my personal site. 

I started by building just a few simple pages that would act as a brochure style experience and I have continued by adding what you see here. A simple blogging platform using markdown files.

### Loading Content

I'm primarily loading content from a few different static sources. Yaml files, json, and markdown files. For example, `index.vue` pulls in the following:

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

The `articleList.json` file is the simplest way to link to the specific markdown file with a slug, give it a tile, and give it a description. Eventually I could add quite a bit more detail, but today, it's functional. Unfortunately, I think that this approach is unlikely to remain sustainable.

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

I will go into more detail at a later date, but for now I'm going to launch an MVP of this feature, and then ready myself for adding a portfolio feature as well.