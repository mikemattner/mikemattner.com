<template>
  <div class="contact">
    <BaseHero full>
      <template v-slot:default>
        <div class="columns">
          <div class="column is-two-thirds">
            <Header tag="h1" decorator>{{ intro.title }}</Header>
            <p v-html="intro.body"></p>
          </div>
        </div>
      </template>
    </BaseHero>
    <!-- <WavyLines />
    <section id="content" v-scroll-reveal class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-7 copy">
            <p v-html="statement.body"></p>
          </div>
          <div class="column">
            <Header tag="h6">{{ statement.meta }}</Header>
            <Header tag="h2" decorator>{{ statement.title }}</Header>
          </div>
        </div>
      </div>
    </section>
    <Wavy />
    <section class="section section--dark">
      <div v-scroll-reveal.reset class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <Header tag="h6">I've worked with these</Header>
            <Header tag="h2" decorator>Brands</Header>
          </div>
          <div
            class="column is-three-quarters"
            v-scroll-reveal.reset="{ delay: 500, distance: '50px' }"
          >
            <ul class="list--flat">
              <li v-for="(brand, index) in brands" :key="index">
                <StaticImage
                  :src="`img/brand/${brand.image}`"
                  :alt="brand.name"
                  class="self-portrait"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Wavy flip /> -->
    <!-- <section id="content" class="section">
      <div v-scroll-reveal class="container">
        <div class="columns">
          <div class="column is-one-quarter is-summary">
            <Header tag="h6">A Professional</Header>
            <Header tag="h2" decorator>
              Summary
            </Header>
          </div>
          <div v-scroll-reveal class="column is-one-quarter">
            <Header tag="h3">Knowledge</Header>
            <ul class="list--blank">
              <li
                v-for="(tech, index) in technical"
                :key="index"
                v-html="tech"
              ></li>
            </ul>
          </div>
          <div v-scroll-reveal class="column is-one-quarter">
            <Header tag="h3">Software</Header>
            <ul class="list--blank">
              <li
                v-for="(software, index) in softwares"
                :key="index"
                v-html="software"
              ></li>
            </ul>
          </div>
          <div v-scroll-reveal class="column is-one-quarter">
            <Header tag="h3">Skills</Header>
            <ul class="list--blank">
              <li
                v-for="(skill, index) in skills"
                :key="index"
                v-html="skill"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import {
  intro,
  statement,
  skills,
  softwares,
  technical,
  brands
} from '~/data/contact.yaml'

export default {
  name: 'Contact',
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro,
      statement,
      skills,
      softwares,
      technical,
      brands
    }
  },
  head() {
    return {
      titleTemplate: `Contact – %s`
    }
  }
}
</script>

<style lang="scss">
.contact {
  h2 {
    margin-top: 0.25rem;
  }
  h6 {
    margin: 0;
    text-transform: uppercase;
    // color: $darkBlue-10;
    letter-spacing: 0.0675rem;
    font-weight: 400;
  }
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    .container {
      position: relative;
      z-index: 10;
    }

    @media (min-width: $tablet) {
      .container {
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    &--dark {
      background-color: $darkBlue-3;
    }
    @media (max-width: $tablet) {
      .columns {
        display: flex;
        flex-direction: column;
        .column {
          padding-top: 0;
          padding-bottom: 0;
          &.copy {
            order: 2;
            padding-top: 0;
          }
          &.header {
            order: 1;
            padding-bottom: 0;
          }
        }
      }
    }
  }
  ul,
  ol {
    margin-left: 0;
    padding-left: 0;
    font-size: 0.875rem;

    &.list--blank {
      list-style: none;
    }

    &.list--flat {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;

      li {
        margin-right: 2rem;
        img {
          display: block;
          width: 120px;
          height: auto;
          opacity: 0.5;
          transition: all 0.25s ease-in-out;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
