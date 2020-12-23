<template>
  <div class="home">
    <PageHero bold full arrow>
      <template v-slot:default>
        <Header
          tag="h1"
          class="display-3"
          v-html="intro.title"
          decorator
        ></Header>
        <div class="header-content">
          <div v-html="intro.body"></div>
          <Button to="/about" class="button">More About Me</Button>
        </div>
      </template>
    </PageHero>
    <!-- <section class="section--work two-col">
      <WorkCard :info="MaytagExperience" />
      <WorkCard :info="JennAirWorkbook" />
      <WorkCard :info="JennAirHub" />
      <WorkCard :info="WhirlpoolTopLoad" />
    </section> -->
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
import {
  JennAirWorkbook,
  JennAirHub,
  MaytagExperience,
  WhirlpoolTopLoad,
} from '~/data/work.yaml'

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
      MaytagExperience,
      WhirlpoolTopLoad,
    }
  },
  async asyncData({ $content, app }) {
    let posts
    try {
      posts = await $content('writing').sortBy('date', 'desc').limit(6).fetch()
    } catch (error) {
      try {
        posts = await $content('writing')
          .sortBy('date', 'desc')
          .limit(6)
          .fetch()
      } catch (error) {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }
    return {
      posts,
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
      // mix-blend-mode: hard-light;
      // line-height: 0.85;
      @media (min-width: $tablet) {
        grid-column: main-content / span 7;
      }
    }
    .header-content {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        position: relative;
        grid-column: main-content / span 6;
        p,
        .button {
          position: relative;
          z-index: 3;
        }
      }
    }
  }
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    &--work {
      padding-top: 2rem;
      padding-bottom: 4rem;
      border-bottom: 1px solid $borderColor-light;
      @media (min-width: $tablet) {
        padding-top: 4rem;
        padding-bottom: 8rem;

        .is--work:nth-child(even) {
          margin-top: 6rem;
          margin-bottom: -6rem;
        }
        // .is--work:nth-child(2n + 1) {
        //   margin-top: 6rem;
        //   margin-bottom: -6rem;
        // }
      }
    }

    &--writing {
      padding-top: 2rem;
      p {
        // margin-top: 0;
        // margin-bottom: 2rem;
      }
      .button {
        margin-top: 2rem;
      }
    }
  }
}
</style>
