<template>
  <div class="home">
    <PageHero full>
      <Header
        tag="h1"
        class="text-huge"
        decorator
        v-html="intro.title"
      ></Header>
      <div class="header-content">
        <div v-html="intro.body"></div>
        <Button to="/about" primary ghost>More About Me</Button>
      </div>
    </PageHero>
    <WaveRight />
    <section class="section--work section--dark">
      <div class="layout">
        <Header
          tag="h2"
          class="display-5"
          decorator
          v-html="introduction.title"
        ></Header>
        <p v-html="introduction.body"></p>
        <WorkList :work="work" />
      </div>
    </section>
    <WaveRight flip />
    <section id="content" class="section section--writing layout">
      <div class="main-content">
        <Header tag="h2" class="display-5" decorator>{{
          writing.title
        }}</Header>
        <p v-html="writing.body"></p>
        <AllArticles :posts="posts" short />
        <Button :to="writing.link" ghost primary>{{
          writing.buttonTitle
        }}</Button>
      </div>
    </section>
  </div>
</template>

<script>
import { intro, writing } from '~/data/home.yaml'
import { introduction, work } from '~/data/work.yaml'

export default {
  name: 'Home',
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, app, error }) {
    let posts
    try {
      posts = await $content('writing').sortBy('date', 'desc').limit(6).fetch()
    } catch (e) {
      try {
        posts = await $content('writing')
          .sortBy('date', 'desc')
          .limit(6)
          .fetch()
      } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
      }
    }
    return {
      posts,
    }
  },
  data() {
    return {
      intro,
      writing,
      introduction,
      work,
    }
  },
  head() {
    return {
      titleTemplate: `UX/UI Designer & Developer in Michigan – %s`,
    }
  },
}
</script>

<style scoped lang="scss">
.home {
  .hero {
    h1 {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        grid-column: main-content / span 6;
        margin-bottom: 1rem;
      }
      @media (min-width: $desktop) {
        grid-column: main-content / span 7;
      }
    }
    .header-content {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        grid-column: main-content / span 6;
      }
      @media (min-width: $desktop) {
        grid-column: main-content / span 6;
      }
      .button {
        margin-top: 2rem;
      }
    }
  }

  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    &--work {
      padding-top: 2rem;
      padding-bottom: 2rem;

      h2,
      p {
        grid-column: main-content / span 6;
        @media (min-width: $tablet) {
          grid-column: main-content / span 7;
        }
      }
    }

    &--writing {
      padding-top: 0;
      p {
        margin-bottom: 2rem;
      }
      .button {
        margin-top: 2rem;
      }
    }

    &--dark {
      background-color: $darkShadeBackground;
    }
  }
}
</style>
