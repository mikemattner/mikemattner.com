<template>
  <div :class="['single-link', archive == true ? 'article--link' : '']">
    <nuxt-link :to="article.path">
      <h3 class="article-title">
        {{ article.title }}
      </h3>
      <div class="article-meta">
        <span class="tag">{{ article.topic }}</span>
        <span class="bull">&bull;</span>
        <time>{{ article.date }}</time>
      </div>
      <p class="article-description">
        {{ article.description }}
      </p>
      <div class="icon">
        <!-- <fa-icon icon="chevron-right" size="lg"></fa-icon> -->
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
    },
    archive: Boolean
  }
}
</script>

<style lang="scss">
.single-link {
  a {
    display: block;
    padding: 2rem 3rem 2rem 0;
    background-image: none;
    position: relative;
    overflow: hidden;
    @media (min-width: $tablet) {
      padding: 2rem 3.5rem 2rem 1rem;
    }
    .icon {
      // width: 2rem;
      // height: 2rem;
      // border-radius: 50%;
      // background-color: rgba($black, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.25s ease-in-out;
      &:before {
        @include arrow-right(rgba($white, 0.25));
      }
    }
    svg {
      opacity: 0.25;
      transition: all 0.25s ease-in-out;
      fill: $white;
      color: $white;
      transform: translateX(2px);
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
      // transform: scale(1.01);
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
      .icon {
        transform: translateY(-50%) translateX(0.5rem);
      }
    }
    .button__bubble {
      transition: all 0.125s ease-in-out;
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      background-color: $darkBlue-5;
      will-change: transform;
      transform: translate(-50%, -50%) scale(0);
      transition-property: transform;
    }
    &:hover .button__bubble,
    &:focus .button__bubble {
      transform: translate(-50%, -50%) scale(1.5);
      transition: all 0.5s ease-in-out;
    }
  }
  &.article--link {
    a {
      &:hover {
        background-color: rgba($darkBlue-6, 0);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0);
      }
    }
  }
  .article-title {
    margin: 0;
  }
  .article-description {
    color: $white;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.875rem;
  }
  .article-meta {
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
}
</style>
