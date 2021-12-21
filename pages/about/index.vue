<template>
  <div class="about">
    <PageHero>
      <Header
        tag="h1"
        class="display-1"
        decorator
        v-html="statement.title"
      ></Header>
      <p v-html="statement.subtitle"></p>
    </PageHero>
    <section id="photos" class="section section--images layout">
      <div class="personal-image">
        <StaticImage
          :src="images[0].src"
          :alt="images[0].alt"
          :caption="images[0].alt"
          rounded
        />
      </div>
    </section>
    <section class="layout">
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
  min-height: 90vh;
  padding-bottom: 4rem;
  .hero {
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
    &--images {
      padding: $defaultPadding * 2 0 $defaultPadding;
      .personal-image {
        grid-column: main-content / span 6;
        @media (min-width: $desktop) {
          grid-column: main-content / span 6;
        }
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
