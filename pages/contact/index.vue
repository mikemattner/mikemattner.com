<template>
  <div class="contact">
    <PageHero full>
      <template v-slot:default>
        <Header tag="h1" decorator>{{ intro.title }}</Header>
        <p v-html="intro.body"></p>
      </template>
    </PageHero>
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
  min-height: 90vh;
  padding-bottom: 4rem;
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
          transition: $transition;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
