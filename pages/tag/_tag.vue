<template>
  <section class="section section--article">
    <div :key="$route.params.slug">
      <PageHero dark>
        <template v-slot:default>
          <Header tag="h1" class="display-3 main-content" decorator
            ><small>Entries tagged:</small> {{ tag.name }}</Header
          >
          <p v-html="tag.description" class="main-content"></p>
        </template>
      </PageHero>
      <section id="content" class="layout">
        <div class="main-content">
          <AllArticles :posts="writing" />
          <Button to="/writing/" class="button"
            ><fa-icon icon="chevron-left" size="sm"></fa-icon> Back to
            Articles</Button
          >
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'fade',
  scrollToTop: true,
  async asyncData({ $content, params }) {
    try {
      const tags = await $content('tag')
        .where({ slug: { $contains: params.tag } })
        .limit(1)
        .fetch()
      const tag = tags.length > 0 ? tags[0] : {}
      const writing = await $content('writing', params.slug)
        .where({ tag: { $contains: tag.name } })
        .sortBy('date', 'desc')
        .fetch()
      return {
        writing,
        tag,
      }
    } catch (err) {
      /* eslint-disable */
      console.debug('No Post:', err)
      /* eslint-enable */
      return false
    }
  },
  head() {
    return {
      titleTemplate: `Writing – %s`,
    }
  },
}
</script>

<style lang="scss">
.section--article {
  min-height: 90vh;
  padding-bottom: 4rem;
  .hero {
    h1 {
      margin-bottom: 0rem;
      @media (min-width: $tablet) {
        // text-indent: -0.75rem;
      }
    }
    p {
      margin-bottom: 3rem;
    }
  }
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .meta {
    font-size: 0.675rem;
    margin: 0;
    color: rgba($white, 0.25);
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
  }
}
</style>
