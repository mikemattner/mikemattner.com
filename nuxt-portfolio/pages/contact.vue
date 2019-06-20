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
  </div>
</template>

<script>
import { intro } from '~/data/contact.yaml'

export default {
  name: 'Contact',
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro
    }
  },
  head() {
    return {
      titleTemplate: `Contact – %s`
    }
  }
}
</script>
