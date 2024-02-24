---
title: Use GitHub API for Projects
date: 2022-01-23
type: entry
description: Looking for a way to pull in projects from GitHub, I grabbed all repos with the GitHub API and sorted by what I needed.
caption: Found on Unsplash
image: /images/feature/git.jpg
tag:
- Development
---
::InfoMessage{type=warning}
**2/24/2024** – _My approach has shifted slightly, but the below could still be helpful_
::

I was looking for a way to highlight projects from GitHub,[^1] and while those are not expansive or complex, my plan is to use this year as a springboard for more. The API provides a way to grab publicly available information for display, and I figured I would see if I could make that work for my situation.

## The API

The [GitHub API](https://docs.github.com/en/rest) is extensive, but all I needed was a way to grab my own projects. To grab a list of my own repos with Nuxt--or your own--you can call it in `asyncData` at the page level to pass down and replace `{{USERNAME}}` with your own name like so:

```javascript
 async asyncData({ $content, app, error }) {
    let projects
    try {
        projects = await fetch('https://api.github.com/users/{{USERNAME}}/repos', {
                headers: {
                Accept: 'application/vnd.github.v3+json',
                },
            }).then((res) => res.json())
    } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
    }
}
```

I tested out the call (`https://api.github.com/users/{{USERNAME}}/repos`) in [Postman](https://www.postman.com/) to see what it returned, and it was a bit more than I needed. To whittle it down in my [ProjectList](https://github.com/mikemattner/mikemattner.com/blob/main/components/projects/ProjectList.vue) component, I filtered and mapped the array as follows:

```javascript
sortProjects() {
    this.projectList = this.projects
    .filter((item) => {
        return this.targetProjects.some((f) => {
            return f.name === item.name
        })
    })
    .map((proj) => {
        const title = this.targetProjects
            .filter((item) => item.name === proj.name)
            .map((item) => {
                return item.title
            })
            .toString()
        const obj = {
            name: title,
            description: proj.description,
            url: proj.html_url,
            topics: proj.topics,
            stars: proj.stargazers_count,
            watchers: proj.watchers_count,
            year: new Date(proj.pushed_at),
        }
        return obj
    })
    .sort((a, b) => b.year - a.year)
},
```

You'll also notice I reference a `targetProjects` object. This object contains more readable names than my original GitHub titles, so I'm able to use a slightly better option to title the project and to consequently filter the full array to target those same projects.

```javascript
targetProjects: [
    {
        name: 'mikemattner.com',
        title: 'This Site!',
    },
]
```

I've also sorted the project by the `pushed_at` value returned from the call assuming it probably signifies the recency of my contributions to it and will give it a display order based on that value.

### Conclusion

This simple approach could be adapted to do more for a developer portfolio if desired. Highlight a single repo with this simple call: `https://api.github.com/repos/{{USERNAME}}/{{REPO_NAME}}` or grab every repo and display it all without my restrictions. Anything more extensive might require something more complex, but this was a simple way to pull in a few items I work on.

[^1]: I have seriously neglected my own account.
