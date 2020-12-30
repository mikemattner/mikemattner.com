<template>
  <section class="section section--tag">
    <div :key="$route.params.slug">
      <PageHero>
        <Header tag="h1" class="display-4 main-content" decorator>
          {{ tag.name }}</Header
        >
        <p v-html="tag.description" class="main-content"></p>
      </PageHero>
      <section id="content" class="layout">
        <div class="main-content">
          <AllArticles :posts="writing" />
          <Button to="/writing/" class="button"
            ><fa-icon icon="chevron-left" size="sm"></fa-icon>
            {{ button.text }}</Button
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
  data() {
    return {
      button: {
        text: 'Back to Articles',
      },
    }
  },
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
      titleTemplate: `${this.tag.name}  – %s`,
    }
  },
}
</script>

<style lang="scss">
.section--tag {
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
  .search-form {
    // margin-top: 3rem;
    margin-bottom: 3rem;
    grid-column: main-content / span 6;
    @media (min-width: $tablet) {
      grid-column: main-content / span 6;
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
