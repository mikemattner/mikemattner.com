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
    <section id="content" class="section" v-scroll-reveal.reset>
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-7 copy">
            <p v-html="statement.body"></p>
          </div>
          <div class="column">
            <h2 v-html="statement.title"></h2>
          </div>
        </div>
      </div>
    </section>
    <Wavy />
    <section class="section section--writing section--dark">
      <WavyLines class="wavy--fixed" />
      <div class="container" v-scroll-reveal.reset>
        <div class="columns">
          <div class="column">
            <h2 class="decorator">Recent Writing</h2>
          </div>
          <div class="column is-8 copy">
            <ul class="article-list">
              <li
                v-for="article in articles.slice(0, 5)"
                :key="article.title"
                class="article"
              >
                <ArticleLink :article="article" />
              </li>
            </ul>
            <nuxt-link to="/archive" class="button">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Wavy flip />
    <!-- <Wavy />
    <section class="section section--dark">
      <div class="container" v-scroll-reveal.reset>
        <div class="columns">
          <div class="column is-one-quarter">
            <h2 class="decorator">Brands</h2>
          </div>
          <div
            class="column is-three-quarters"
            v-scroll-reveal.reset="{ delay: 500, distance: '50px' }"
          >
            <ul class="list--flat">
              <li v-for="(brand, index) in brands" :key="index">
                <StaticImage
                  :src="`img/brand/${brand.image}`"
                  :alt="brand.name"
                  class="self-portrait"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Wavy flip /> -->
    <section class="section">
      <div class="container" v-scroll-reveal.reset>
        <div class="columns">
          <div class="column is-one-quarter is-summary">
            <h2 class="decorator">
              Summary
            </h2>
          </div>
          <div
            class="column is-one-quarter"
            v-scroll-reveal.reset="{ delay: 400, distance: '50px' }"
          >
            <h3>Knowledge</h3>
            <ul class="list--blank">
              <li
                v-for="(tech, index) in technical"
                :key="index"
                v-html="tech"
              ></li>
            </ul>
          </div>
          <div
            class="column is-one-quarter"
            v-scroll-reveal.reset="{ delay: 600, distance: '50px' }"
          >
            <h3>Software</h3>
            <ul class="list--blank">
              <li
                v-for="(software, index) in softwares"
                :key="index"
                v-html="software"
              ></li>
            </ul>
          </div>
          <div
            class="column is-one-quarter"
            v-scroll-reveal.reset="{ delay: 800, distance: '50px' }"
          >
            <h3>Skills</h3>
            <ul class="list--blank">
              <li
                v-for="(skill, index) in skills"
                :key="index"
                v-html="skill"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
} from '~/data/home.yaml'
import articles from '@/static/articleList.json'

export default {
  name: 'Home',
  transition: 'fade',
  data() {
    return {
      intro,
      statement,
      skills,
      softwares,
      technical,
      brands,
      articles
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
      position: absolute;
      width: 250px;
      top: -3rem;
      left: 7rem;
      z-index: -1;
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
        top: -5rem;
        left: -13rem;
        width: 350px;
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
  .wavy--fixed {
    position: absolute;
    top: 50%;
    left: -2rem;
    right: 0;
    width: 120%;
    transform: rotate(15deg);
    opacity: 0.25;
    z-index: 1;
    @media (max-width: $tablet) {
      visibility: hidden;
      opacity: 0;
    }
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
        margin-top: 2rem;
      }
    }

    .is-summary {
      p {
        font-size: 0.75rem;
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
