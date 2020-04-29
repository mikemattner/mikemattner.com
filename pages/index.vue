<template>
  <div class="home">
    <PageHero bold>
      <template v-slot:default>
        <Header tag="h1" class="text-display-large" decorator>{{
          intro.title
        }}</Header>
        <!-- <div class="self-portrait">
          <BaseImage :src="`${intro.image}`" :alt="intro.imageAlt" />
        </div> -->
        <div class="header-content">
          <p v-html="intro.body"></p>
          <p v-html="intro.social" class="social"></p>
        </div>
      </template>
    </PageHero>
    <WavyLines />
    <section id="content" class="section section--writing layout">
      <div class="margin-start-outdent">
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
      align-self: center;
      grid-column: full-content-start / span 4;
      grid-row: 1;
    }
    .header-content {
      align-self: start;
      grid-column: 3 / span 6;
      grid-row: 2;
    }
    .self-portrait {
      grid-column: 6 / span 3;
      // grid-row: 1 / -1;
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    .container {
      position: relative;
      z-index: 10;
    }

    @media (min-width: $tablet) {
      .container {
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    &--dark {
      background-color: $darkBlue-3;
    }

    &--writing {
      padding-top: 0;
      .button {
        margin-top: 2rem;
      }
    }
  }
}
</style>
