<template>
  <section class="section section--article">
    <article :key="$route.params.slug">
      <PageHero arrow dark>
        <template v-slot:default>
          <div class="columns is-centered">
            <div class="column is-two-thirds">
              <Header tag="h1">{{ post.attributes.title }}</Header>
              <div class="meta">
                <span class="tag">{{ post.attributes.topic }}</span>
                <span class="bull">&bull;</span>
                <time>{{ formattedDate }}</time>
              </div>
            </div>
          </div>
        </template>
      </PageHero>
      <Wavy flip />
      <div id="content" class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div v-scroll-reveal v-html="post.html"></div>
            <div class="links">
              <Button v-if="nextPath" :to="`/${nextPath}`" class="button"
                >Previous Article</Button
              >
              <Button v-if="prevPath" :to="`/${prevPath}`" class="button"
                >Next Article</Button
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  transition: 'fade',
  scrollToTop: true,
  computed: {
    formattedDate() {
      return new Date(this.post.attributes.date).toDateString().slice(4)
    },
    nextPath() {
      // const firstBlogPath = this.sortedPaths[0]
      // if there's no 'next' path, return the first path
      const nextPath = isNull(
        this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]
      )
        ? null
        : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]
      function isNull(item) {
        return item === null || item === undefined
      }
      return nextPath
    },
    prevPath() {
      // const firstBlogPath = this.sortedPaths[0]
      // if there's no 'next' path, return the first path
      const nextPath = isNull(
        this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) - 1]
      )
        ? null
        : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) - 1]
      function isNull(item) {
        return item === null || item === undefined
      }
      return nextPath
    }
  },
  async asyncData({ params }) {
    try {
      const currentPath = params.slug
      // get current post data
      const post = await import(`~/articles/${params.slug}.md`)
      // get all post data for next route
      const allPosts = await require.context('~/articles/', true, /\.md$/)
      const posts = allPosts.keys().map(key => {
        return allPosts(key)
      })
      const sortedPosts = posts.sort((a, b) => {
        const dateA = new Date(a.attributes.date)
        const dateB = new Date(b.attributes.date)
        if (dateA < dateB) {
          return 1
        }
        if (dateA > dateB) {
          return -1
        }
        return 0
      })
      const sortedPaths = []
      /* eslint-disable */
      console.log(sortedPosts)
      /* eslin-enable */
      const regex = / /gi
      sortedPosts.map(post => {
        let relPath = post.attributes.title
          .toLowerCase()
          .trim()
          .replace(regex, '-')
        sortedPaths.push(relPath)
      })
      return {
        sortedPaths,
        post,
        currentPath
      }
    } catch (err) {
      /* eslint-disable */
      console.debug('No Post:', err)
      /* eslin-enable */
      return false
    }
  },
  head() {
    if (!this.post) return
    return {
      titleTemplate: `${this.post.attributes.title} – %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.attributes.title
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section--article {
  min-height: 90vh;
  pre {
    background-color: $darkBlue-2;
    font-size: 0.75rem;
    padding: 2rem;
    border-radius: 2px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    @media (min-width: $tablet) {
      margin-left: -4rem;
      margin-right: -4rem;
    }
    code {
      background-color: transparent;
    }
  }
  .meta {
    font-size: 0.675rem;
    margin: 0;
    color: rgba($white, 0.35);
    .bull {
      margin: 0 0.25rem;
    }
    .tag {
      font-size: 0.575rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
  .links {
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba($white, 0.1);
    text-align: center;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      align-self: stretch;
      flex-grow: 1;
    }
  }
}
</style>
