<template>
  <div class="about">
    <PageHero dark>
      <Header
        tag="h1"
        class="display-1"
        decorator
        v-html="statement.title"
      ></Header>
      <p v-html="statement.subtitle"></p>
    </PageHero>
    <WaveRight flip />
    <section class="section layout">
      <div class="personal-image">
        <StaticImage :src="images[0].src" :alt="images[0].alt" rounded />
      </div>
      <div class="personal-story">
        <Header
          tag="h2"
          class="display-4 main-content"
          v-html="experience.techTitle"
        ></Header>
        <div class="main-content" v-html="experience.techBody"></div>
        <ul class="main-content technology-list">
          <li v-for="(item, index) in experience.tech" :key="index">
            {{ item }}
          </li>
        </ul>
        <Header
          tag="h2"
          class="display-4 main-content"
          v-html="page.title"
        ></Header>
        <div class="main-content" v-html="page.body"></div>
        <Header
          tag="h2"
          class="display-4 main-content"
          v-html="contact.title"
        ></Header>
        <div class="main-content" v-html="contact.body"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { contact, experience, page, statement } from '~/data/about.yaml'

export default {
  name: 'About',
  scrollToTop: true,
  transition: 'fade',
  data() {
    return {
      contact,
      experience,
      page,
      statement,
      images: [
        {
          src: 'personal/mike-painting.jpg',
          alt: 'What a lovely painting! Not mine.',
        },
        {
          src: 'personal/mike-cat.jpg',
          alt: 'Here is the time I photo bombed my cat.',
        },
        {
          src: 'personal/mike-cooking.jpg',
          alt: 'Michigan tailgating, but with a tiny grill!',
        },
      ],
    }
  },
  head() {
    return {
      titleTemplate: `About – %s`,
    }
  },
}
</script>

<style lang="scss">
.about {
  .hero {
    padding-bottom: $defaultPadding * 2;
    h1 {
      margin-bottom: 0rem;
    }
    h1 {
      grid-column: main-content / span 6;
      @media (min-width: $desktop) {
        grid-column: main-content / span 7;
      }
    }
    p {
      grid-column: main-content / span 6;
    }
  }
  .section {
    padding: $defaultPadding 0;
    .section-divider {
      display: none;
      @media (min-width: $desktop) {
        display: block;
        margin-bottom: $defaultPadding;
        grid-column: 2 / span 10;
      }
    }
    .personal-image {
      grid-column: main-content / span 6;
      @media (min-width: $desktop) {
        grid-column: content-start / span 4;
        figure {
          max-width: 80%;
          margin: 0 auto;
          position: relative;
          img {
            z-index: 1;
            filter: grayscale(2);
            transition: $transition;
          }
          &:hover {
            img {
              filter: grayscale(0);
              transform: scale(1.05) rotate(1deg);
            }
          }
        }
      }
    }
    .personal-story {
      grid-column: main-content / span 6;
      @media (min-width: $desktop) {
        grid-column: 6 / span 4;
      }
    }
  }
  .technology-list {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 0 0 50%;
    }
  }
}
</style>
