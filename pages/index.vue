<template>
  <div class="home">
    <PageHero arrow>
      <template v-slot:default>
        <div class="columns">
          <div class="column is-offset-one-quarter is-two-thirds">
            <BaseImage
              :src="`${intro.image}`"
              :alt="intro.imageAlt"
              class="self-portrait"
            />
            <Header tag="h1" decorator>{{ intro.title }}</Header>
            <p v-html="intro.body"></p>
            <p v-html="intro.social"></p>
          </div>
        </div>
      </template>
    </PageHero>
    <WaveRight />
    <section id="content" class="section section--writing section--dark">
      <div v-scroll-reveal class="container">
        <div class="columns">
          <div class="column">
            <Header tag="h6">{{ writing.meta }}</Header>
            <Header tag="h2" decorator>{{ writing.title }}</Header>
          </div>
          <div class="column is-three-quarters">
            <ArticleList :posts="posts" />
            <Button :to="writing.link" class="button">{{
              writing.buttonTitle
            }}</Button>
          </div>
        </div>
      </div>
    </section>
    <WaveRight flip />
    <section class="section section--work">
      <div class="container">
        <div class="columns is--work--header">
          <div class="column">
            <Header tag="h6">Some of My</Header>
            <Header tag="h2" decorator>Most Recent Projects</Header>
          </div>
        </div>
        <Work left pull-left :info="JennAirWorkbook" />
        <Work right :info="JennAirHub" />
        <Work left :info="WhirlpoolTopLoad" />
      </div>
    </section>
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
      h1 {
        margin-left: -5rem;
      }
    }
    .column {
      position: relative;
    }
    .self-portrait {
      // position: absolute;
      // top: -5rem;
      // left: 7rem;
      border-radius: 2px;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
      transition: $transition;
      &:hover {
        .self-portrait {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
      }
      @media (min-width: $tablet) {
        margin-top: 0;
        position: absolute;
        top: 2rem;
        left: -13rem;
        width: 350px;
        z-index: -1;
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
      h2 {
        @media (min-width: $tablet) {
          font-size: 3rem;
        }
      }
      h6 {
        margin-top: 2rem;
      }
    }
    &--work {
      .is--work--header {
        @media (min-width: $tablet) {
          text-align: center;
        }
        h2 {
          @media (min-width: $tablet) {
            font-size: 3rem;
          }
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
