<template>
  <div class="about">
    <PageHero>
      <Header
        tag="h1"
        class="display-4"
        decorator
        v-html="statement.title"
      ></Header>
      <p v-html="statement.subtitle"></p>
    </PageHero>
    <section id="photos" class="section section--images layout">
      <div class="personal-image">
        <StaticImage :src="images[0].src" :alt="images[0].alt" />
        <div class="label">{{ images[0].alt }}</div>
      </div>
    </section>
    <section class="layout">
      <Header
        tag="h2"
        class="display-5 main-content"
        v-html="page.title"
      ></Header>
      <div class="main-content" v-html="page.body"></div>
      <Header
        tag="h2"
        class="display-5 main-content"
        v-html="contact.title"
      ></Header>
      <div class="main-content" v-html="contact.body"></div>
    </section>
  </div>
</template>

<script>
import { contact, statement, page } from '~/data/about.yaml'

export default {
  name: 'About',
  scrollToTop: true,
  transition: 'fade',
  data() {
    return {
      contact,
      statement,
      page,
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
        border-radius: $radius-large;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
          0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11),
          0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 64px rgba(0, 0, 0, 0.11);
        overflow: hidden;
        width: 100%;
        position: relative;

        grid-column: main-content / span 6;
        @media (min-width: $desktop) {
          grid-column: main-content / span 6;
        }
        // @media (max-width: $tablet) {
        //   height: 250px;
        // }
        // @media (min-width: $tablet) {
        //   &::before {
        //     content: '';
        //     padding-bottom: 100%;
        //     display: block;
        //   }
        // }
        &::before {
          content: '';
          padding-bottom: 100%;
          display: block;
        }
        img {
          @include cover-background(top);
          transition: $transition-slow-ease;
          transform: scale(1);
          z-index: 1;
        }
        .label {
          z-index: 2;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: $defaultPadding * 3 $defaultPadding/5 $defaultPadding/2;
          font-size: $small;
          text-align: center;
          background-image: linear-gradient(
            to top,
            rgba($bodyBackground, 0.9) 0%,
            rgba($bodyBackground, 0) 100%
          );
          transition: $transition-slow-ease;
          opacity: 0;
          @media (max-width: $tablet) {
            display: none;
            visibility: hidden;
          }
        }
        &:hover {
          .label {
            opacity: 1;
          }
        }
        // &:nth-child(1) {
        //   grid-column: first-col;
        // }
        // &:nth-child(2) {
        //   grid-column: second-col;
        // }
        // &:nth-child(3) {
        //   grid-column: third-col;
        // }
      }
    }
  }
}
</style>
