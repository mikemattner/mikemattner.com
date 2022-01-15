<template>
  <div class="about">
    <PageHero dark>
      <Header
        tag="h1"
        class="display-1"
        decorator
        v-html="about.title"
      ></Header>
      <p v-html="about.subtitle"></p>
    </PageHero>
    <section class="section layout">
      <div class="personal-image">
        <StaticImage :src="images[0].src" :alt="images[0].alt" rounded />
      </div>
      <div class="personal-story">
        <nuxt-content :document="about" />
      </div>
    </section>
    <WaveRight flip />
  </div>
</template>

<script>
export default {
  name: 'About',
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, app, error }) {
    let about
    try {
      about = await $content('about').fetch()
    } catch (e) {
      try {
        about = await $content('about').fetch()
      } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
      }
    }
    return {
      about,
    }
  },
  data() {
    return {
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
    background-color: $darkShadeBackground;

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
        grid-column: 6 / span 6;
      }

      h2 {
        font-size: $h4;

        &:after {
          content: '';
          margin-top: math.div($defaultPadding, 2);
          display: block;
          height: 4px;
          width: 100%;
          border-top: 2px dotted $borderColor-light;
        }
      }
      h3 {
        font-size: $h5;
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
