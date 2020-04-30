<template>
  <div class="contact">
    <PageHero full>
      <template v-slot:default>
        <Header tag="h1" class="display-2">{{ intro.title }}</Header>
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
  .hero {
    h1 {
      margin-bottom: 0rem;
      @media (min-width: $tablet) {
        text-indent: -0.25rem;
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
}
</style>
