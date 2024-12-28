<template>
  <main>
    <div class="writing-layout">
      <div class="writing-layout__content">
        <div class="sidebar-area flow">
          <h1 class="page-header"><small>Posts tagged</small> &lsquo;{{ tagName }}&rsquo;</h1>
          <p class="intro">{{ postCount }}</p>
          <hr />
        </div>
        <div class="content-area flow">
          <ArticleList :posts="posts" list-all />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Post } from '../../../types/posts';

const route = useRoute();
const tagName = computed<string>(() => {
  return route.path.split('/')[3];
});

useHead({
  title: `Tag: ${tagName.value} - Blog`,
});

const { data } = await useAsyncData(`blog-tag-list-${tagName.value}`, () => {
  return queryContent<Post>('/blog')
    .where({ tag: { $contains: tagName.value } })
    .sort({ date: -1 })
    .find();
});

const posts = computed<Post[]>(() => {
  return data?.value?.filter((post) => !post.draft) as Post[];
});

const postCount = computed<string>(() => {
  if (posts.value.length < 1) return 'No posts tagged.';
  if (posts.value.length == 1) return '1 lonely post.';
  return `${posts.value.length} total posts.`;
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
      margin-block-start: 3rem;
      margin-block-end: 3rem;
    }

    p {
      max-width: 65ch;
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
    margin: 0;

    @media (min-width: 1053px) {
      grid-column: 1 / span 28;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
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
    font-weight: 300;
    font-size: var(--size-step-1);
    line-height: 1.4;
    max-width: 65ch;
    text-wrap: pretty;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }
}
</style>
