<template>
  <section class="section section--tag">
    <div :key="$route.params.slug">
      <PageHero dark>
        <Header tag="h1" class="text-huge main-content">
          {{ type.title }}</Header
        >
        <p class="main-content" v-html="type.description"></p>
      </PageHero>
      <section class="section--dark">
        <AllArticles list-all :posts="writing" />
        <div class="layout">
          <div class="main-content">
            <Button to="/writing/" icon="chevron-left" icon-left primary ghost>
              {{ button.text }}
            </Button>
          </div>
        </div>
      </section>
      <WaveRight flip />
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, params, error }) {
    try {
      const types = await $content('type')
        .where({ slug: { $contains: params.type } })
        .limit(1)
        .fetch()
      const type = types.length > 0 ? types[0] : {}
      const writing = await $content('writing', params.slug)
        .where({ type: { $contains: type.category } })
        .sortBy('date', 'desc')
        .fetch()
      return {
        writing,
        type,
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
      titleTemplate: `${this.type.title}  – %s`,
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
      font-size: $h6;
      line-height: 1.5;
      margin-bottom: 3rem;
    }
  }
  .section--dark {
    background-color: $darkShadeBackground;
    padding-bottom: $defaultPadding * 2;
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
