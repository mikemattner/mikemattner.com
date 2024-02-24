---
title: Sorting Content For Archives
date: 2021-12-27
type: entry
description: Organizing Nuxt&rsquo;s built-in content with array sorting.
caption: Found on Unsplash
image: /images/feature/sorting.jpg
tag:
- Development

---
I keep playing around with how best to display content using Nuxt. I think initially setting this up, I opted to display a long list of articles and roll with it. Over time this will weaken the scannable nature of the archive page.

I'm attempting to rectify this now while the list is short by breaking it down into a year-based archive.

## My Issue

Out of the box, [Nuxt provides](https://content.nuxtjs.org/fetching) robust fetching options, including a `createdAt` attribute that relies on file system meta data.

```javascript
const articles = await $content('articles')
  .sortBy('createdAt', 'asc')
  .fetch()
```

That wasn't particularly useful for me because I was dumping in some older archived posts from a former WordPress installation making the old posts look more recent than they were. I added a date field to my markdown frontmatter, and set the fetch to sort based on that.

```javascript
const writing = await $content('writing')
    .sortBy('date', 'desc')
    .fetch()
```

This returns a flat array of articles that by default you can dump right into your component and `v-for` away.

## My Solution

::InfoMessage
I've adjusted my approach slightly from what is demonstrated below. I pretty naively set a property rather than creating a computed getter to accomplish this.
::

If you take a look at my [AllArticles](https://github.com/mikemattner/mikemattner.com/blob/legacyv1/components/organisms/AllArticles.vue) list component, you can see the methods I'm using to sort the article data into an object of years and their corresponding posts array. Even if it runs a little deeper than one might like for data like this, it allows me to display and organize the list using their respective years.

```javascript
methods: {
  convertDate(date) {
    return new Date(date).getFullYear().toString()
  },
  getYears() {
    this.yearPosts = [
      ...new Set(this.posts.map((item) => this.convertDate(item.date))),
    ]
  },
  sortIntoYearArray() {
    const sortedArray = {}

    this.yearPosts.forEach((item, index) => {
      sortedArray[item] = { year: item, posts: [] }
    })

    this.posts.forEach((item, index) => {
      const year = this.convertDate(item.date)
      sortedArray[year].posts.push(item)
    })

    const ordered = Object.keys(sortedArray)
      .sort()
      .reverse()
      .map((key) => {
        return sortedArray[key]
      })

    this.sortedPosts = ordered
  },
},
```

Using the `getYears()` method, I'm grabbing all available years in that array of content and creating an array of years from it.

```javascript
getYears() {
  this.yearPosts = [
    ...new Set(this.posts.map((item) => this.convertDate(item.date))),
  ]
},
```

In `sortIntoYearArray()` I'm turning that array into an object containing the year and an empty array post. Then, for each post in the original array, adding it to our sortedArray object.

```javascript
const sortedArray = {}

this.yearPosts.forEach((item, index) => {
  sortedArray[item] = { year: item, posts: [] }
})

this.posts.forEach((item, index) => {
  const year = this.convertDate(item.date)
  sortedArray[year].posts.push(item)
})
```

After the posts are added, I reverse the order and turn the object back to an array of objects.

```javascript
const ordered = Object.keys(sortedArray)
  .sort()
  .reverse()
  .map((key) => {
    return sortedArray[key]
  })

this.sortedPosts = ordered
```

This isn't the most clever solution, but if as a Nuxt Content user you're looking for some inspiration, feel free to take this code and modify it. Let me know if you have a better solution.

## Conclusion

Being able to sort the list into years gives me a more scannable page layout as well, and, because I now have it displayed this way, I have added unnecessary year filtering. Why not?

Reach out if you have any questions, better ideas, or anything you want to discuss on this topic. Happy to chat.