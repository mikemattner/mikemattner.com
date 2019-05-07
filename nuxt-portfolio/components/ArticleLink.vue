<template>
  <div class="single-link">
    <nuxt-link :to="article.path">
      <h3 class="article-title">
        {{ article.title }}
      </h3>
      <div class="article-meta">
        {{ article.topic }} &bull; {{ article.date }}
      </div>
      <p class="article-description">
        {{ article.description }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.single-link {
  a {
    display: block;
    padding: 2rem 1rem;
    background-image: none;
    // background-image: linear-gradient(
    //   to right,
    //   $darkBlue 0,
    //   rgba($darkBlue, 0) 100%
    // );
    // background-position: 0% 100%;
    // background-repeat: no-repeat;
    // background-size: 0 100%;

    h3 {
      transition: all 0.25s ease-in-out;
      background-image: linear-gradient($orange, $orange);
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 100% 1px;
      display: inline-block;
    }
    &:hover {
      // background-size: 100% 100%;
      h3 {
        color: $orange;
        background-size: 100% 2px;
      }
      p {
        color: $white;
      }
    }
  }
  .article-title {
    margin: 0;
  }
  .article-description {
    color: $white;
    margin-bottom: 0;
  }
  .article-meta {
    font-size: 0.75rem;
    margin: 0;
    color: $white;
  }
}
</style>
