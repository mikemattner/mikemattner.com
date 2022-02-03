<template>
  <div class="home">
    <PageHero full>
      <StaticImage
        v-for="(image, index) in images"
        :key="`image-${index}`"
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        class="personal-image"
        circle
        overlay
      />
      <Header
        tag="h1"
        class="text-huge"
        decorator
        v-html="homePage.intro.title"
      ></Header>
      <div class="header-content">
        <div v-html="homePage.intro.body"></div>
        <Button to="/about" primary ghost>More About Me</Button>
      </div>
    </PageHero>
    <WaveRight />
    <!-- <section class="section--work section--dark">
      <div class="layout">
        <Header
          tag="h2"
          class="display-3"
          decorator
          v-html="homePage.work.title"
        ></Header>
        <p v-html="homePage.work.body"></p>
        <WorkList :work="work" />
      </div>
    </section>
    <WaveRight flip /> -->
    <section id="content" class="section section--writing section--dark layout">
      <div class="main-content">
        <Header tag="h2" class="display-3" decorator>{{
          homePage.writing.title
        }}</Header>
        <p v-html="homePage.writing.body"></p>
        <AllArticles :posts="posts" short />
        <Button :to="homePage.writing.link" ghost primary>{{
          homePage.writing.buttonTitle
        }}</Button>
      </div>
    </section>
    <WaveRight flip />
  </div>
</template>

<script>
import { homePage } from '~/data/pages.yaml'

export default {
  name: 'Home',
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, app, error }) {
    let posts
    let work
    try {
      posts = await $content('writing').sortBy('date', 'desc').limit(6).fetch()
      work = await $content('work').sortBy('date', 'desc').fetch()
    } catch (e) {
      try {
        posts = await $content('writing')
          .sortBy('date', 'desc')
          .limit(6)
          .fetch()
        work = await $content('work').sortBy('date', 'desc').fetch()
      } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
      }
    }
    return {
      posts,
      work,
    }
  },
  data() {
    return {
      homePage,
      images: [
        {
          src: 'personal/mike-profile.jpg',
          alt: 'Generic profile image.',
          width: '2000',
          height: '1500',
        },
      ],
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

    .personal-image {
      transition: $transition-cubic;
      grid-column: main-content / span 2;
      margin-bottom: $defaultPadding;
      @media (min-width: $tablet) {
        margin-bottom: 0;
        width: 80%;
        grid-column: content-start / span 2;
        align-self: start;
        justify-self: center;
        &:hover {
          transform: scale(1.05) rotate(1deg) translate3d(0, 0, 0);
          z-index: 3;
        }
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
    padding: 2rem 0;
    position: relative;

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
