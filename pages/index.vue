<template>
  <div class="home">
    <PageHero bold>
      <template v-slot:default>
        <Header
          tag="h1"
          class="text-display-large"
          v-html="intro.title"
          decorator
        ></Header>
        <div class="self-portrait">
          <StaticImage :src="`${intro.image}`" :alt="intro.imageAlt" />
        </div>
        <div class="header-content">
          <p v-html="intro.body"></p>
          <p v-html="intro.social" class="social"></p>
          <!-- <Button :to="writing.link" class="button">{{
            writing.buttonTitle
          }}</Button> -->
        </div>
      </template>
    </PageHero>
    <!-- <WavyLines /> -->
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
      // mix-blend-mode: hard-light;
      line-height: 0.85;
      @media (min-width: $tablet) {
        // text-shadow: 0 1px 20px rgba($black, 0.5);
        align-self: center;
        grid-column: margin-start / span 4;
        grid-row: 1;
      }
      @media (min-width: $widescreen) {
        text-indent: -0.25em;
      }
      @media (min-width: $fullhd) {
        text-indent: -0.5em;
      }
    }
    .header-content {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        position: relative;
        &:after {
          content: '';
          mix-blend-mode: color;
          border-radius: 2px;
          background-color: rgba($darkBlue-2, 1);
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 2;
        }
        &:before {
          content: '';
          border-radius: 2px;
          background-color: rgba($darkBlue-2, 0.75);
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 1;
        }
        padding: 0 1rem;
        margin-left: -1rem;
        margin-right: -1rem;
        align-self: center;
        grid-column: 3 / span 6;
        grid-row: 2;
        p,
        .button {
          position: relative;
          z-index: 3;
        }
      }
    }
    .self-portrait {
      border-radius: 2px;
      overflow: hidden;
      grid-column: main-content / span 6;
      z-index: -1;
      position: relative;
      height: 100%;
      background-color: $darkBlue-3;
      opacity: 0.675;
      @media (min-width: $tablet) {
        grid-row: 1 / span 2;
        grid-column: 5 / span 5;
        align-self: start;
      }
      img {
        margin: 0;
        mix-blend-mode: luminosity;
        @media (min-width: $tablet) {
          @include cover-background(top);
        }
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
      padding-top: 2rem;
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
