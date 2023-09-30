<template>
  <main>
    <div class="writing-layout">
      <div class="writing-layout__content">
        <div class="sidebar-area flow">
          <h1>Writing</h1>
          <p class="intro">Some things I've written about over the years on several unrelated topics.</p>
        </div>
        <div class="content-area flow">
          <ArticleList :posts="posts" list-all />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Post } from 'types/posts';

useHead({
  title: 'Writing',
});

const { data } = await useAsyncData('blog-list', () => queryContent('/blog').sort({ date: -1 }).find());

const posts = computed<Post[]>(() => {
  return data?.value?.filter((post) => !post.draft) as Post[];
});
</script>

<style lang="scss" scoped>
.writing-layout {
  max-width: var(--max-width);
  margin-inline: auto;

  &__content {
    margin-block-start: 2rem;
    margin-block-end: 2rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xxl) var(--sizing-xxl);
    }

    @media (min-width: 768px) {
      margin-block-start: 6rem;
      margin-block-end: 6rem;
    }

    @media (min-width: 500px) {
      display: grid;
    }

    hr {
      grid-column: 1 / span 4;
      margin-block-start: 2rem;
      margin-block-end: 3rem;
    }

    p {
      max-width: 70ch;
    }
  }

  .writing-title {
    color: var(--color-primary);
    z-index: 2;
    position: relative;
    font-size: clamp(var(--size-step-6), 10vw, 120px);
    line-height: 1;
  }

  .content-area {
    margin: var(--sizing-xxxl) 0 0;

    @media (min-width: 1053px) {
      grid-column: 1 / span 28;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }

    @media (max-width: 499px) {
      padding-top: 2rem;
    }
  }

  .sidebar-area {
    font-size: var(--size-step-1);

    @media (min-width: 1053px) {
      grid-column: 1 / span 28;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }
  }

  .intro {
    letter-spacing: 0.01em;
    font-weight: 100;
    font-size: var(--size-step-2);
    line-height: 1.3;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }
}
</style>
