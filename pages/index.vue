<template>
  <div class="home">
    <PageHero bold>
      <template v-slot:default>
        <Header tag="h1" class="text-display-large" decorator>{{
          intro.title
        }}</Header>
        <div class="self-portrait">
          <BaseImage :src="`${intro.image}`" :alt="intro.imageAlt" />
        </div>
        <div class="header-content">
          <p v-html="intro.body"></p>
          <p v-html="intro.social" class="social"></p>
        </div>
      </template>
    </PageHero>
    <WavyLines />
    <section id="content" class="section section--writing layout">
      <div class="main-content">
        <Header tag="h2" class="display-5">{{ writing.title }}</Header>
        <p>{{ writing.body }}</p>
        <AllArticles :posts="posts" />
        <Button :to="writing.link" class="button">{{
          writing.buttonTitle
        }}</Button>
      </div>
    </section>
  </div>
</template>

<script>
import { intro, writing } from '~/data/home.yaml'
import { JennAirWorkbook, JennAirHub, WhirlpoolTopLoad } from '~/data/work.yaml'

export default {
  name: 'Home',
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro,
      writing,
      JennAirWorkbook,
      JennAirHub,
      WhirlpoolTopLoad,
      postCount: 0
    }
  },
  async asyncData() {
    // create context via webpack to map over all blog posts
    const allPosts = await require.context('~/articles/', true, /\.md$/)
    const posts = allPosts
      .keys()
      .map(key => {
        // give back the value of each post context
        return allPosts(key)
      })
      .slice(0, 6)
    return {
      posts
    }
  },
  head() {
    return {
      titleTemplate: `UX Designer & Developer in Michigan – %s`
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  .hero {
    h1 {
      grid-column: main-content / span 6;
      color: $primary;
      @media (min-width: $tablet) {
        text-shadow: 0 1px 20px rgba($black, 0.5);
        align-self: center;
        grid-column: margin-start / span 4;
        grid-row: 1;
      }
    }
    .header-content {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        border-radius: 2px;
        padding: 0 1rem;
        margin-left: -1rem;
        margin-right: -1rem;
        background-color: rgba($darkBlue-2, 0.75);
        align-self: center;
        grid-column: 3 / span 6;
        grid-row: 2;
      }
    }
    .self-portrait {
      border-radius: 2px;
      overflow: hidden;
      grid-column: main-content / span 6;
      z-index: -1;
      @media (min-width: $tablet) {
        grid-row: 1 / span 2;
        grid-column: 6 / span 4;
        align-self: start;
        // grid-row-start: 1;
        // grid-row-end: 2;
      }
      img {
        margin: 0;
      }
    }
  }
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    &--dark {
      background-color: $darkBlue-3;
    }

    &--writing {
      padding-top: 0;
      p {
        margin-top: 0;
        margin-bottom: 2rem;
      }
      .button {
        margin-top: 2rem;
      }
    }
  }
}
</style>
