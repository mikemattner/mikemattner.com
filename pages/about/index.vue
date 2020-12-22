<template>
  <div class="about">
    <PageHero>
      <template v-slot:default>
        <Header
          tag="h1"
          class="display-3"
          v-html="statement.title"
          decorator
        ></Header>
        <p v-html="statement.subtitle"></p>
      </template>
    </PageHero>
    <section id="photos" class="section section--images three-col">
      <div v-for="image in images" :key="image.src" class="personal-image">
        <StaticImage :src="image.src" alt="image.alt" />
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
    </section>
  </div>
</template>

<script>
import {
  intro,
  statement,
  page,
  skills,
  softwares,
  technical,
  brands,
} from '~/data/about.yaml'

export default {
  name: 'About',
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro,
      statement,
      page,
      skills,
      softwares,
      technical,
      brands,
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
      @media (min-width: $tablet) {
        // text-indent: -0.25rem;
      }
    }
    p {
      margin-bottom: 3rem;
    }
    h1,
    p {
      grid-column: main-content / span 6;
      // @media (min-width: $tablet) {
      //   grid-column: margin-start / span 8;
      // }
    }
  }
  .section {
    &--images {
      padding: 0 0 $defaultPadding;
      .personal-image {
        border-radius: $radius;
        box-shadow: 0 2px 25px rgba($darkShadeBackground, 0.33);
        overflow: hidden;
        width: 100%;
        position: relative;
        @media (max-width: $tablet) {
          height: 250px;
        }
        @media (min-width: $tablet) {
          &::before {
            content: '';
            padding-bottom: 100%;
            display: block;
          }
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
          padding: $defaultPadding * 2 $defaultPadding/5 $defaultPadding;
          font-size: $small;
          text-align: center;
          background-image: linear-gradient(
            to top,
            rgba($bodyBackground, 0.9) 0%,
            rgba($bodyBackground, 0) 100%
          );
          font-family: $serif-font;
          transition: $transition-slow;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
          .label {
            padding: $defaultPadding * 2 $defaultPadding/5 $defaultPadding * 2;
          }
        }
        &:nth-child(1) {
          grid-column: main-content / span 3;
          margin-bottom: $defaultPadding;
          @media (min-width: $tablet) {
            grid-column: first-col;
            margin-bottom: 0;
          }
        }
        &:nth-child(2) {
          grid-column: main-content / span 3;
          margin-bottom: $defaultPadding;
          @media (min-width: $tablet) {
            grid-column: second-col;
            margin-bottom: 0;
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
