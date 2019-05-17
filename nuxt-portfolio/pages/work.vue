<template>
  <section class="section--work">
    <div :key="$route.params.slug">
      <BaseHero arrow decorator dark>
        <template v-slot:default>
          <div class="columns">
            <div class="column is-two-thirds">
              <h1>Work</h1>
              <p>A selection of things I&rsquo;ve worked on.</p>
            </div>
          </div>
        </template>
      </BaseHero>
      <Wavy flip />
      <section class="section">
        <div class="container" v-scroll-reveal>
          <JennAir />
          <Whirlpool />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Whirlpool from '@/components/home/WhirlpoolWork.vue'
import JennAir from '@/components/home/JennAirWork.vue'

export default {
  transition: 'fade',
  components: {
    Whirlpool,
    JennAir
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
