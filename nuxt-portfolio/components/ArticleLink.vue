<template>
  <div class="single-link">
    <nuxt-link :to="article.path">
      <div>
        <h3 class="article-title">
          {{ article.title }}
        </h3>
        <div class="article-meta">
          {{ article.topic }} &bull; {{ article.date }}
        </div>
        <p class="article-description">
          {{ article.description }}
        </p>
      </div>
      <div>
        <div class="icon">
          <fa-icon icon="chevron-right" size="lg"></fa-icon>
        </div>
      </div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    .icon {
      flex-basis: 3rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: rgba($black, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      opacity: 0.25;
      transition: all 0.25s ease-in-out;
      fill: $white;
      color: $white;
    }
    h3 {
      transition: all 0.25s ease-in-out;
      background-image: linear-gradient($orange, $orange);
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 100% 1px;
      display: inline-block;
    }
    &:hover {
      background-color: $darkBlue-5;
      border-radius: 2px;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
      transform: scale(1.01);
      // background-size: 100% 100%;
      h3 {
        color: $orange;
        background-size: 100% 2px;
      }
      p {
        color: $white;
      }
      svg {
        opacity: 1;
        fill: $white;
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
    font-size: 0.875rem;
  }
  .article-meta {
    font-size: 0.75rem;
    margin: 0;
    color: rgba($white, 0.25);
  }
}
</style>
