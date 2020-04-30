<template>
  <section class="section section--single--article">
    <article :key="$route.params.slug">
      <PageHero dark>
        <template v-slot:default>
          <Header
            tag="h1"
            class="display-3 full-width"
            v-html="post.attributes.title"
          ></Header>
          <div class="meta full-width">
            Topic posted
            <time
              ><strong>{{ formattedDate }}</strong></time
            >
            in <strong>{{ post.attributes.topic }}</strong> on
          </div>
        </template>
      </PageHero>
      <div id="content" class="layout">
        <!-- <div class="meta margin-content">
          Topic posted in {{ post.attributes.topic }} on
          <time>{{ formattedDate }}</time>
        </div> -->
        <!-- <p v-html="post.attributes.description" class="description"></p> -->
        <div v-html="post.html" class="post-content"></div>
        <div class="links main-content">
          <Button v-if="nextPath" :to="`/${nextPath}`" class="button prev"
            >Previous Article</Button
          >
          <Button v-if="prevPath" :to="`/${prevPath}`" class="button next"
            >Next Article</Button
          >
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
      const regex = / /gi
      let relPath = ''
      sortedPosts.map(post => {
        relPath = post.attributes.title
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
      /* eslint-enable */
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
.section--single--article {
  min-height: 90vh;
  .hero {
    text-align: center;
    h1 {
      margin-bottom: 0.75rem;
    }
  }
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
  .description {
    font-size: 1.5rem;
    // padding-bottom: 1rem;
    // border-bottom: 1px solid rgba($white, 0.1);
  }
  .meta {
    font-size: $small;
    margin: 0 0 2rem;
    // color: $tertiary;
    color: rgba($white, 0.5);
    // text-transform: uppercase;
    // .bull {
    //   margin: 0 0.25rem;
    // }
    // .tag {
    //   font-size: 0.675rem;
    //   letter-spacing: 1.5px;
    //   text-transform: uppercase;
    // }
  }
  .links {
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba($white, 0.1);
    text-align: center;
    font-size: 0.75rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 20px 1fr;
    }

    a.button {
      align-self: stretch;
      flex-grow: 1;
      @media (max-width: 768px) {
        margin: 0.5rem 0;
      }
      @media (min-width: 768px) {
        width: 200px;
        &.prev {
          grid-column: 1;
        }
        &.next {
          grid-column: 3;
          justify-self: end;
        }
      }
    }
  }
  h2 {
    font-size: $h5;
  }
  h3 {
    font-size: $h5;
  }
}
</style>
