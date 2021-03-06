<template>
  <div class="home">
    <PageHero bold full>
      <Header tag="h1" class="display-3" v-html="intro.title"></Header>
      <div class="header-content">
        <div v-html="intro.body"></div>
        <Button to="/about">More About Me</Button>
      </div>
    </PageHero>
    <section class="section--work section--dark">
      <div class="layout">
        <Header
          tag="h2"
          class="display-5"
          v-html="introduction.title"
          decorator
        ></Header>
        <p v-html="introduction.body"></p>
      </div>
      <div class="two-col">
        <WorkCard :info="MaytagExperience" />
        <WorkCard :info="JennAirWorkbook" />
        <WorkCard :info="JennAirHub" />
        <WorkCard :info="WhirlpoolTopLoad" />
      </div>
    </section>
    <section id="content" class="section section--writing layout">
      <div class="main-content">
        <Header tag="h2" class="display-5" decorator>{{
          writing.title
        }}</Header>
        <p>{{ writing.body }}</p>
        <SearchForm />
        <AllArticles :posts="posts" />
        <Button :to="writing.link">{{ writing.buttonTitle }}</Button>
      </div>
    </section>
  </div>
</template>

<script>
import { intro, writing } from '~/data/home.yaml'
import {
  introduction,
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
      introduction,
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
      font-size: $h4;
      @media (min-width: $tablet) {
        grid-column: main-content / span 6;
        font-size: $h4;
        margin-bottom: 1rem;
      }
      @media (min-width: $desktop) {
        font-size: $h4;
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
  .search-form {
    // margin-top: 3rem;
    margin-bottom: 2rem;
    grid-column: main-content / span 6;
    @media (min-width: $tablet) {
      grid-column: main-content / span 6;
    }
  }
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    &--work {
      padding-top: 2rem;
      padding-bottom: 4rem;
      // border-bottom: 1px solid $borderColor-light;
      .layout {
        // padding-top: 2rem;
        padding-bottom: 2rem;
        h2,
        p {
          grid-column: main-content / span 6;
          // mix-blend-mode: hard-light;
          // line-height: 0.85;
          @media (min-width: $tablet) {
            grid-column: main-content / span 7;
          }
        }
      }
      @media (min-width: $tablet) {
        padding-top: 0;
        padding-bottom: 10rem;
        .is--work {
          &:nth-child(1) {
            grid-column: first-col;
          }
          &:nth-child(2) {
            grid-column: second-col;
          }
          &:nth-child(3) {
            grid-column: first-col;
          }
          &:nth-child(4) {
            grid-column: second-col;
          }
        }
        .is--work:nth-child(even) {
          margin-top: 6rem;
          margin-bottom: -6rem;
        }
        // .is--work:nth-child(2n + 1) {
        //   margin-top: -6rem;
        //   margin-bottom: -6rem;
        // }
      }
    }

    &--writing {
      padding-top: 0;
      p {
        // margin-top: 0;
        // margin-bottom: 2rem;
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
