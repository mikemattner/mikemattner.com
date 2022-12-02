<template>
  <div class="about">
    <PageHero dark>
      <Header tag="h1" class="text-huge" v-html="about.title"></Header>
      <p v-html="about.subtitle"></p>
    </PageHero>
    <section class="section layout">
      <div class="about-layout">
        <div class="personal-image">
          <div class="personal-image__list">
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
        <div class="professional-info">
          <div class="professional-info__list">
            <Header tag="h2" class="text-small">Experience</Header>
            <ul class="text-small">
              <li v-for="(item, index) in experience" :key="`exp-${index}`">
                <strong>{{ item.company }}</strong> {{ item.title }}
              </li>
            </ul>
            <!-- <Header tag="h2" class="text-small">Skills</Header>
            <ul class="text-small">
              <li v-for="(item, index) in skills" :key="`exp-${index}`">
                {{ item }}
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </section>
    <WaveRight flip />
  </div>
</template>

<script>
import { experience, skills } from '~/data/resume.yaml'

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
      experience,
      skills,
      images: [
        {
          src: 'personal/mike-painting.jpg',
          alt: 'What a lovely painting! Not mine.',
        },
        {
          src: 'personal/mike-profile-three.jpg',
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
      font-size: $h6;
      line-height: 1.5;
      grid-column: main-content / span 6;
    }
  }
  .section {
    padding: $defaultPadding 0;
    background-color: $darkShadeBackground;

    .about-layout {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        grid-column: content-start / span 8;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 0.5fr 1fr;
        column-gap: 1.25rem;
        align-content: start;
      }
      @media (min-width: $desktop) {
        grid-column: content-start / span 9;
        grid-template-columns: repeat(9, 1fr);
      }
    }

    .professional-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1.25rem;
      grid-column: 1 / span 4;
      grid-row: 2 / span 2;

      @media (min-width: $tablet) {
        ul {
          opacity: 0.5;
          transition: $transition;

          &:hover {
            opacity: 1;
          }
        }
      }
      @media (max-width: $tablet) {
        padding: $defaultPadding;
        background-color: $darkerShadeBackground;
        border-radius: $radius-large;
        box-shadow: boxShadow;

        h2:first-child {
          margin-top: 0;
        }
      }

      &__list {
        grid-column: 1 / span 4;

        @media (min-width: $tablet) {
          grid-column: 2 / span 3;
        }
      }
    }
    .personal-image {
      &__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, minmax(100px, 1fr));
        position: relative;
      }

      @media (min-width: $tablet) {
        grid-column: 2 / span 3;
        grid-row: 1;
      }

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

      @media (min-width: $tablet) {
        grid-column: 5 / span 4;
        grid-row: 1 / span 3;
      }

      @media (min-width: $desktop) {
        grid-column: 5 / span 5;
        grid-row: 1 / span 3;
      }

      h2 {
        font-size: $h4;
      }
      h3 {
        font-size: $h6;
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
