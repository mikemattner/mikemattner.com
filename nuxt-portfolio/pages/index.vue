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
            <h6>I Focus On</h6>
            <h2 class="decorator" v-html="statement.title"></h2>
          </div>
        </div>
      </div>
    </section>
    <Wavy />
    <section class="section section--writing section--dark">
      <div class="container" v-scroll-reveal.reset>
        <div class="columns">
          <div class="column">
            <h6>Some of My</h6>
            <h2 class="decorator">Recent Writing</h2>
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
            <Button to="/archive" class="button">Read More</Button>
          </div>
        </div>
      </div>
    </section>
    <Wavy flip />
    <section class="section">
      <div class="container" v-scroll-reveal.reset>
        <div class="columns is-vcentered is--work">
          <div class="column is-7">
            <div class="work-sample">
              <StaticImage
                :src="`img/jennair/home.jpg`"
                :alt="'JennAir Influencer Hub'"
                class="sample left"
              />
              <StaticImage
                :src="`img/jennair/columns.jpg`"
                :alt="'JennAir Influencer Hub'"
                class="sample right"
              />
            </div>
          </div>
          <div class="column is-5 work-description right">
            <h6>Development / Design / CMS</h6>
            <h2>Influencer Hub</h2>
            <p>
              The influencer hub is a premium destination for brand and product
              knowledge. When JennAir rebranded, I was a key team member for the
              development and design of the overhauled experience.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered is--work">
          <div class="column is-5 work-description">
            <h6>Development / AEM</h6>
            <h2>Experiential Design</h2>
            <p>
              Working with a world class UX team, I implemented the design and
              experience of the interactive touch control piece that featured
              video, complex animations, and user lead interactions. All as a
              custom piece in AEM.
            </p>
            <p>
              <a
                href="https://www.whirlpool.com/laundry/cabrio-top-load-washer-set.html"
                class="button"
                target="_blank"
                >View Work</a
              >
            </p>
          </div>
          <div class="column is-7">
            <div class="work-sample">
              <StaticImage
                :src="`img/whirlpool/secondary.jpg`"
                :alt="'Whirlpool Top Load'"
                class="sample left"
              />
              <StaticImage
                :src="`img/whirlpool/primary.jpg`"
                :alt="'Whirlpool Top Load'"
                class="sample right"
              />
            </div>
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
      // position: absolute;
      width: 250px;
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
    }

    .is-summary {
      p {
        font-size: 0.75rem;
      }
    }

    .is--work {
      margin-top: 2rem;
      margin-bottom: 2rem;
      .work-description {
        z-index: 12;
        @media (min-width: $tablet) {
          &.right {
            margin-left: -3rem;
          }
          &.left {
            margin-right: -3rem;
          }
        }
        @media (max-width: $tablet) {
          order: 2;
        }
      }
      .work-sample {
        position: relative;
        z-index: 10;
        .sample {
          border-radius: 2px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
          &.left {
            margin-left: -2rem;
          }
          &.right {
            margin-left: 4rem;
            margin-top: -20rem;
          }
        }
      }
      .brand {
        width: 100px;
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
