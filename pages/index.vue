<template>
  <div class="home">
    <PageHero bold full>
      <template v-slot:default>
        <Header
          tag="h1"
          class="display-3"
          v-html="intro.title"
          decorator
        ></Header>
        <div class="header-content">
          <p v-html="intro.body"></p>
          <p v-html="intro.social" class="social"></p>
        </div>
      </template>
    </PageHero>
    <section id="photos" class="section section--images three-col">
      <div v-for="image in images" :key="image.src" class="personal-image">
        <StaticImage :src="image.src" alt="image.alt" />
        <div class="label">{{ image.alt }}</div>
      </div>
    </section>
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
      images: [
        {
          src: 'img/mike-cat.jpg',
          alt: 'Here I photo bomb my cat.',
        },
        {
          src: 'img/mike-painting.jpg',
          alt: 'What a lovely painting!',
        },
        {
          src: 'img/mike-cooking.jpg',
          alt: 'Grilling before the game.',
        },
      ],
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
      titleTemplate: `UI/UX Designer & Developer in Michigan – %s`,
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
      line-height: 0.85;
      @media (min-width: $tablet) {
        grid-column: main-content / span 6;
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
    &--images {
      padding-bottom: 0;
      .personal-image {
        border-radius: $radius-small;
        overflow: hidden;
        // height: 250px;
        width: 100%;
        position: relative;
        &::before {
          content: '';
          padding-bottom: 100%;
          display: block;
        }
        img {
          @include cover-background(top);
          transition: $transition-slow;
          transform: scale(1);
          z-index: 1;
        }
        .label {
          z-index: 2;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: $defaultPadding $defaultPadding/5;
          font-size: $small;
          text-align: center;
          background-image: linear-gradient(
            to top,
            rgba($bodyBackground, 0.9) 0%,
            rgba($bodyBackground, 0) 100%
          );
          // font-family: $serif-font;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
        &:nth-child(1) {
          grid-column: main-content / span 3;
          @media (min-width: $tablet) {
            grid-column: first-col;
          }
        }
        &:nth-child(2) {
          grid-column: main-content / span 3;
          @media (min-width: $tablet) {
            grid-column: second-col;
          }
        }
        &:nth-child(3) {
          grid-column: main-content / span 3;
          @media (min-width: $tablet) {
            grid-column: third-col;
          }
        }
      }
    }
  }
}
</style>
