<template>
  <section class="section section--article">
    <div :key="$route.params.slug">
      <BaseHero arrow dark>
        <template v-slot:default>
          <div class="columns is-centered">
            <div class="column is-two-thirds">
              <h1 v-html="articleTitle"></h1>
              <div class="meta">
                <span class="tag">{{ articleTopic }}</span>
                <span class="bull">&bull;</span>
                <time>{{ articleDate }}</time>
              </div>
            </div>
          </div>
        </template>
      </BaseHero>
      <Wavy flip />
      <div id="content" class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div v-html="articleContent" v-scroll-reveal></div>
            <div class="links">
              <nuxt-link
                v-if="prevArticle"
                :to="'/' + prevArticle.path"
                class="prev-link"
                >← {{ prevArticle.title }}</nuxt-link
              >
              <nuxt-link to="/" class="home-link">Home</nuxt-link>
              <nuxt-link
                v-if="nextArticle"
                :to="'/' + nextArticle.path"
                class="next-link"
                >{{ nextArticle.title }} →</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleList from '@/static/articleList.json'
export default {
  transition: 'fade',
  data() {
    return {
      article: null,
      articleTitle: null,
      articleDate: null,
      articleDescription: null,
      articleTopic: null,
      prevArticle: null,
      nextArticle: null,
      articleContent: null
    }
  },
  created() {
    this.getArticleData()
  },
  methods: {
    /**
     * Gets data and content of the current, next and previous articles in the article list
     */
    getArticleData() {
      this.article = articleList.filter((a, index) => {
        if (a.path === this.$route.params.slug) {
          this.prevArticle = articleList[index - 1]
          this.nextArticle = articleList[index + 1]
          return a
        }
      })[0]
      // Check if article exists
      if (!this.article) {
        this.$router.push('/')
        return
      }
      this.articleContent = require(`~/static/articles/${
        this.article.path
      }.md`).default
      this.articleTitle = this.article.title
      this.articleDate = this.article.date
      this.articleTopic = this.article.topic
      this.articleDescription = this.article.description
    }
  },
  head() {
    if (!this.article) return
    return {
      titleTemplate: `${this.article.title} – %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.title
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.section--article {
  min-height: 90vh;
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
