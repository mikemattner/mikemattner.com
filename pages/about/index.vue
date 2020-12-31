<template>
  <div class="about">
    <PageHero>
      <Header
        tag="h1"
        class="display-4"
        v-html="statement.title"
        decorator
      ></Header>
      <p v-html="statement.subtitle"></p>
    </PageHero>
    <section id="photos" class="section section--images three-col">
      <div v-for="image in images" :key="image.src" class="personal-image">
        <StaticImage :src="image.src" :alt="image.alt" />
        <div class="label">{{ image.alt }}</div>
      </div>
    </section>
    <section class="layout">
      <Header
        tag="h2"
        class="display-6 main-content"
        v-html="page.title"
      ></Header>
      <div class="main-content" v-html="page.body"></div>
      <Header
        tag="h2"
        class="display-6 main-content"
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
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      contact,
      statement,
      page,
      images: [
        {
          src: 'personal/mike-painting.jpg',
          alt: 'What a lovely painting!',
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
    p {
      // margin-bottom: 3rem;
    }
    h1 {
      grid-column: main-content / span 7;
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
        box-shadow: 0 2px 15px rgba($black, 0.125);
        overflow: hidden;
        width: 100%;
        position: relative;
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
          font-family: $serif-font;
          transition: $transition-slow-ease;
          opacity: 0;
          @media (max-width: $tablet) {
            display: none;
            visibilty: hidden;
          }
        }
        &:hover {
          img {
            transform: scale(1.1);
            transition: $transition-slow;
          }
          .label {
            // padding: $defaultPadding * 2 $defaultPadding/5 $defaultPadding * 2;
            opacity: 1;
          }
        }
        &:nth-child(1) {
          grid-column: first-col;
        }
        &:nth-child(2) {
          grid-column: second-col;
        }
        &:nth-child(3) {
          grid-column: third-col;
        }
        // &:nth-child(1) {
        //   grid-column: first-col / span 2;
        //   grid-row: 1 / span 2;
        //   @media (max-width: $tablet) {
        //     grid-column: first-col;
        //     grid-row: 1;
        //     margin-bottom: $defaultPadding;
        //   }
        // }
        // &:nth-child(2) {
        //   grid-column: third-col / span 2;
        //   grid-row: 1;
        //   margin-bottom: $defaultPadding;
        //   @media (max-width: $tablet) {
        //     grid-column: second-col;
        //     grid-row: 1;
        //     margin-bottom: $defaultPadding;
        //   }
        // }
        // &:nth-child(3) {
        //   grid-column: third-col;
        //   grid-row: 2;
        //   @media (max-width: $tablet) {
        //     grid-column: first-col;
        //     grid-row: 2;
        //   }
        // }
        // &:nth-child(4) {
        //   grid-column: fourth-col;
        //   grid-row: 2;
        //   @media (max-width: $tablet) {
        //     grid-column: second-col;
        //     grid-row: 2;
        //   }
        // }
      }
      &.section--personal {
        .personal-image {
          grid-column: first-col / span 4;
          height: 350px;
          @media (max-width: $tablet) {
            grid-column: first-col / span 3;
            grid-row: 2;
          }
          &:before {
            display: none;
          }
        }
      }
    }
  }
}
</style>
