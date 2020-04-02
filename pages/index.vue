<template>
  <div class="home">
    <PageHero bold>
      <template v-slot:default>
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <div class="self-portrait">
              <BaseImage :src="`${intro.image}`" :alt="intro.imageAlt" />
            </div>
            <Header
              tag="h1"
              class="text-display-large text-indent-3rem"
              decorator
              >{{ intro.title }}</Header
            >
            <p v-html="intro.body"></p>
            <p v-html="intro.social" class="social"></p>
          </div>
        </div>
      </template>
    </PageHero>
    <!-- <WaveRight /> -->
    <WavyLines />
    <section id="content" class="section section--writing section--dark">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <Header tag="h2" class="display-5">{{ writing.title }}</Header>
            <p>{{ writing.body }}</p>
            <ArticleList :posts="posts" />
            <Button :to="writing.link" class="button">{{
              writing.buttonTitle
            }}</Button>
          </div>
        </div>
      </div>
    </section>
    <!-- <WaveRight flip /> 
    <section class="section section--work">
      <div class="container">
        <div class="columns is--work--header">
          <div class="column">
            <Header tag="h6" class="text-small">Some of My</Header>
            <Header tag="h2" class="display-5" decorator
              >Most Recent Projects</Header
            >
          </div>
        </div>
        <Work left pull-left :info="JennAirWorkbook" />
        <Work right :info="JennAirHub" />
        <Work left :info="WhirlpoolTopLoad" />
      </div>
    </section> -->
  </div>
</template>

<script>
import { intro, writing } from '~/data/home.yaml'
import { JennAirWorkbook, JennAirHub, WhirlpoolTopLoad } from '~/data/work.yaml'

export default {
  name: 'Home',
  transition: 'fade',
  scrollToTop: true,
  data() {
    return {
      intro,
      writing,
      JennAirWorkbook,
      JennAirHub,
      WhirlpoolTopLoad,
      postCount: 0
    }
  },
  async asyncData() {
    // create context via webpack to map over all blog posts
    const allPosts = await require.context('~/articles/', true, /\.md$/)
    const posts = allPosts.keys().map(key => {
      // give back the value of each post context
      return allPosts(key)
    })
    return {
      posts
    }
  },
  head() {
    return {
      titleTemplate: `UX Designer & Developer in Michigan – %s`
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  img {
    display: block;
    width: 100%;
    height: auto;
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
  .hero {
    @media (min-width: $tablet) {
      // h1 {
      //   margin-left: -5rem;
      // }
    }
    .column {
      position: relative;
      &.is-vertical-center {
        display: flex;
        align-items: center;
      }
    }
    .social {
      font-size: 1rem;
    }
    .self-portrait {
      // position: absolute;
      // top: -5rem;
      // left: 7rem;
      position: relative;
      margin-bottom: -3rem;
      border-radius: 2px;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
      transition: $transition;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($darkBlue, 0.5);
        mix-blend-mode: hard-light;
      }
      &:hover {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        &:after {
          background-color: rgba($darkBlue, 0.375);
        }
      }
      @media (min-width: $tablet) {
        margin-top: 0;
        position: absolute;
        // top: 50%;
        // transform: translateY(-50%);
        left: -200px;
        width: 350px;
        z-index: -1;
      }
      img {
        margin: 0;
      }
    }
  }
  h2 {
    margin-top: 0.25rem;
  }
  h6 {
    margin: 0;
    // text-transform: uppercase;
    // color: $darkBlue-10;
    // letter-spacing: 0.0675rem;
    font-weight: 400;
    // font-family: serif;
    // font-style: italic;
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

    &--writing {
      padding-top: 0;
      // h2 {
      //   @media (min-width: $tablet) {
      //     font-size: 3rem;
      //   }
      // }
      h2 {
        position: relative;
        // margin: 2rem 0;
        // display: flex;
        // align-items: center;
        // &:after {
        //   content: '';
        //   position: absolute;
        //   width: 100%;
        //   height: 1px;
        //   background-color: $darkBlue-6;
        //   z-index: -1;
        // }
      }
      .button {
        margin-top: 2rem;
      }
    }
    &--work {
      .is--work--header {
        @media (min-width: $tablet) {
          text-align: center;
        }
        h2 {
          // @media (min-width: $tablet) {
          //   font-size: 3rem;
          // }
          margin-bottom: 0;

          &.decorator:after {
            @media (min-width: $tablet) {
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }
    }

    .is-summary {
      p {
        font-size: 0.75rem;
      }
    }

    .more-work {
      background-color: $darkBlue-3;
      border-radius: 2px;
      padding: 1rem 2rem;
      h3,
      p {
        margin: 0;
      }
      @media (min-width: $mobile) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
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
}
</style>
