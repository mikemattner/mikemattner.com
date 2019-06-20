<template>
  <section class="section--work">
    <div :key="$route.params.slug">
      <BaseHero arrow dark>
        <template v-slot:default>
          <div class="columns">
            <div class="column is-two-thirds">
              <Header tag="h1" decorator>{{ intro.title }}</Header>
              <p v-html="intro.body"></p>
            </div>
          </div>
        </template>
      </BaseHero>
      <Wavy flip />
      <section id="content" class="section">
        <div v-scroll-reveal class="container">
          <Work left pull-left :info="JennAirWorkbook" />
          <Work right :info="JennAirHub" />
          <Work left :info="WhirlpoolTopLoad" />
          <Work right :info="Craftsman" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import {
  intro,
  JennAirWorkbook,
  JennAirHub,
  WhirlpoolTopLoad,
  Craftsman
} from '~/data/work.yaml'

export default {
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro,
      JennAirWorkbook,
      JennAirHub,
      WhirlpoolTopLoad,
      Craftsman
    }
  },
  head() {
    return {
      titleTemplate: `Work – %s`
    }
  }
}
</script>

<style lang="scss">
.section--work {
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
  }
}
</style>
