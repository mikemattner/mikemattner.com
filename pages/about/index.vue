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
      <div class="personal-image_col">
        <div class="personal-image">
          <StaticImage
            v-for="(image, index) in images"
            :key="`image-${index}`"
            :src="image.src"
            :alt="image.alt"
            circle
            overlay
          />
        </div>
      </div>
      <div class="personal-story">
        <nuxt-content :document="about" />
      </div>
      <div class="personal-projects">
        <Header tag="h3" class="personal-projects__header">
          Personal Projects
        </Header>
        <ProjectList :projects="projects" />
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
    let projects
    try {
      about = await $content('about').fetch()
      projects = await fetch('https://api.github.com/users/mikemattner/repos', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }).then((res) => res.json())
    } catch (e) {
      try {
        about = await $content('about').fetch()
      } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
      }
    }
    return {
      about,
      projects,
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
          src: 'personal/mike-profile.jpg',
          alt: 'Generic profile image.',
        },
        {
          src: 'personal/mike-cooking.jpg',
          alt: 'Tailgating in Ann Arbor.',
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
      &_col {
        grid-column: main-content / span 6;
        @media (min-width: $desktop) {
          align-items: start;
          grid-column: content-start / span 4;
        }
      }
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, minmax(100px, 1fr));
      position: relative;
      figure {
        width: 80%;
        margin: 0 auto;
        transition: $transition-cubic;
        &:nth-child(1) {
          grid-row: 1 / span 2;
          grid-column: 1 / span 2;
          z-index: 1;
        }
        &:nth-child(2) {
          grid-row: 2 / span 1;
          grid-column: 2 / span 1;
          z-index: 2;
          margin-top: $defaultPadding * 1.25;
        }
        &:nth-child(3) {
          grid-row: 2 / span 1;
          grid-column: 1 / span 1;
          z-index: 2;
          margin-top: $defaultPadding * -1;
          width: 60%;
          align-self: center;
        }
        &:hover {
          transform: scale(1.05) rotate(1deg) translate3d(0, 0, 0);
        }
      }
    }
    .personal-story {
      padding-bottom: $defaultPadding;
      grid-column: main-content / span 6;
      @media (min-width: $desktop) {
        grid-column: 6 / span 5;
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
    .personal-projects {
      grid-column: main-content / span 6;
      @media (min-width: $desktop) {
        grid-column: 3 / span 8;
      }

      &__header {
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
    }
  }
}
</style>
