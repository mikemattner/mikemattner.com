<template>
  <section class="work">
    <div :key="$route.params.slug">
      <PageHero full dark>
        <Header
          tag="h1"
          class="display-4"
          v-html="introduction.title"
          decorator
        ></Header>
        <div class="header-content">
          <p v-html="introduction.body"></p>
        </div>
      </PageHero>
      <section id="content" class="section--work two-col">
        <WorkCard :info="MaytagExperience" />
        <WorkCard :info="JennAirWorkbook" />
        <WorkCard :info="JennAirHub" />
        <WorkCard :info="WhirlpoolTopLoad" />
      </section>
    </div>
  </section>
</template>

<script>
import {
  introduction,
  JennAirWorkbook,
  JennAirHub,
  MaytagExperience,
  WhirlpoolTopLoad,
} from '~/data/work.yaml'

export default {
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      introduction,
      JennAirWorkbook,
      JennAirHub,
      MaytagExperience,
      WhirlpoolTopLoad,
    }
  },
  head() {
    return {
      titleTemplate: `Work – %s`,
    }
  },
}
</script>

<style lang="scss">
.work {
  .hero {
    h1 {
      grid-column: main-content / span 6;
      margin-bottom: 0;
      @media (min-width: $tablet) {
        grid-column: main-content / span 8;
      }
    }
    .header-content {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        position: relative;
        grid-column: main-content / span 6;
        p,
        .button {
          position: relative;
          z-index: 3;
        }
      }
    }
  }
  .section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
    &--work {
      padding-top: 4rem;
      padding-bottom: 4rem;
      @media (min-width: $tablet) {
        padding-top: 2rem;
        padding-bottom: 10rem;

        .is--work:nth-child(even) {
          margin-top: 6rem;
          margin-bottom: -6rem;
        }
        // .is--work:nth-child(2n + 1) {
        //   margin-top: -6rem;
        //   margin-bottom: -6rem;
        // }
      }
    }
  }
}
</style>
