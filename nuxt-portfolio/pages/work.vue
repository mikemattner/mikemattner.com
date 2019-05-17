<template>
  <section class="section section--article">
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
      <div id="content" class="container">
        <JennAir />
        <Whirlpool />
      </div>
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
.section--article {
  min-height: 90vh;
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      border-bottom: 1px solid $darkBlue-6;

      &:first-child {
        border-top: 1px solid $darkBlue-6;
      }
    }
  }
  pre {
    background-color: $darkBlue-2;
    font-size: 0.75rem;
    padding: 2rem;
    border-radius: 2px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    @media (min-width: $tablet) {
      margin-left: -4rem;
      margin-right: -4rem;
    }
    code {
      background-color: transparent;
    }
  }
  .meta {
    font-size: 0.675rem;
    margin: 0;
    color: rgba($white, 0.25);
    .bull {
      margin: 0 0.25rem;
    }
    .tag {
      font-size: 0.575rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
  .links {
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba($white, 0.1);
    text-align: center;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
