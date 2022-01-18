<template>
  <section class="section section--tag">
    <div :key="$route.params.slug">
      <PageHero dark>
        <Header tag="h1" class="display-1 main-content" decorator>
          {{ tag.title }}</Header
        >
        <p class="main-content" v-html="tag.description"></p>
      </PageHero>
      <WaveRight flip />
      <section>
        <AllArticles list-all :posts="writing" />
        <div class="layout">
          <div class="main-content">
            <Button to="/writing/" icon="chevron-left" icon-left primary ghost>
              {{ button.text }}
            </Button>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, params, error }) {
    try {
      const tags = await $content('tag')
        .where({ slug: { $contains: params.tag } })
        .limit(1)
        .fetch()
      const tag = tags.length > 0 ? tags[0] : {}
      const writing = await $content('writing', params.slug)
        .where({ tag: { $contains: tag.title } })
        .sortBy('date', 'desc')
        .fetch()
      return {
        writing,
        tag,
      }
    } catch (e) {
      return error({ statusCode: 404, message: 'Tag not found' })
    }
  },
  data() {
    return {
      button: {
        text: 'Back to Articles',
      },
    }
  },
  head() {
    return {
      titleTemplate: `${this.tag.title}  – %s`,
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
