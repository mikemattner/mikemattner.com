<template>
  <section class="section--work">
    <div :key="$route.params.slug">
      <BaseHero arrow decorator dark>
        <template v-slot:default>
          <div class="columns">
            <div class="column is-two-thirds">
              <h1>Work</h1>
              <p>
                A selection of projects I&rsquo;ve worked on as a designer and
                developer.
              </p>
            </div>
          </div>
        </template>
      </BaseHero>
      <Wavy flip />
      <section class="section">
        <div class="container" v-scroll-reveal>
          <Work left pullLeft :info="JennAirWorkbook" />
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
  JennAirWorkbook,
  JennAirHub,
  WhirlpoolTopLoad,
  Craftsman
} from '~/data/work.yaml'

export default {
  transition: 'fade',
  data() {
    return {
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
