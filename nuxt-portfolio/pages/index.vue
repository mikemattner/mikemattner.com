<template>
  <div class="home">
    <BaseHero full arrow decorator>
      <template v-slot:default>
        <div class="columns">
          <div class="column is-offset-one-quarter is-two-thirds">
            <BaseImage
              :src="`${intro.image}`"
              :alt="intro.imageAlt"
              class="self-portrait"
            />
            <h1 v-html="intro.title"></h1>
            <p v-html="intro.body"></p>
            <p v-html="intro.social"></p>
          </div>
        </div>
      </template>
    </BaseHero>
    <WavyLines />
    <section id="content" class="section" v-scroll-reveal>
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-7 copy">
            <p v-html="statement.body"></p>
          </div>
          <div class="column">
            <h6 v-html="statement.meta"></h6>
            <h2 class="decorator" v-html="statement.title"></h2>
          </div>
        </div>
      </div>
    </section>
    <Wavy />
    <section class="section section--writing section--dark">
      <div class="container" v-scroll-reveal>
        <div class="columns">
          <div class="column">
            <h6 v-html="writing.meta"></h6>
            <h2 class="decorator" v-html="writing.title"></h2>
            <MyGlass />
          </div>
          <div class="column is-8 copy">
            <ul class="article-list">
              <li
                v-for="article in articles.slice(0, 3)"
                :key="article.title"
                class="article"
              >
                <ArticleLink :article="article" />
              </li>
            </ul>
            <Button :to="writing.link" class="button">{{
              writing.buttonTitle
            }}</Button>
          </div>
        </div>
      </div>
    </section>
    <Wavy flip />
    <section class="section">
      <div class="container" v-scroll-reveal>
        <Work left pullLeft :info="JennAirWorkbook" />
        <Work right :info="JennAirHub" />
        <Work left :info="WhirlpoolTopLoad" />
      </div>
    </section>
  </div>
</template>

<script>
import { intro, statement, writing } from '~/data/home.yaml'
import { JennAirWorkbook, JennAirHub, WhirlpoolTopLoad } from '~/data/work.yaml'
import articles from '@/static/articleList.json'
import MyGlass from '@/assets/img/glass.svg'

export default {
  name: 'Home',
  transition: 'fade',
  components: {
    MyGlass
  },
  data() {
    return {
      intro,
      statement,
      articles,
      writing,
      JennAirWorkbook,
      JennAirHub,
      WhirlpoolTopLoad
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
          transition: all 0.25s ease-in-out;
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
      transition: all 0.25s ease-in-out;
      &:hover {
        .self-portrait {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
      }
      @media (min-width: $tablet) {
        margin-top: 0;
        position: absolute;
        top: -2rem;
        left: -13rem;
        width: 350px;
        z-index: -1;
      }
    }
  }
  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      border-bottom: 1px solid $darkBlue-5;

      &:first-child {
        border-top: 1px solid $darkBlue-5;
      }
    }
  }
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

    &.top-fade {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 50%;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1;
        background-image: linear-gradient(
          0deg,
          rgba($darkBlue, 0) 0%,
          $darkBlue 100%
        );
      }
    }

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
        // margin-top: 2rem;
      }
      .my-glass {
        fill: rgba(255, 255, 255, 0.125);
        width: 70%;
        @media (max-width: $tablet) {
          display: none;
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
