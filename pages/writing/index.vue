<template>
  <main>
    <div class="writing-layout">
      <div class="writing-layout__content">
        <div class="content-area flow">
          <h1>Writing</h1>
          <p>Some things I've written about over the years on topics like career, personal, and politics.</p>
          <ul class="article-list">
            <li v-for="post in posts" :key="post.title">
              <NuxtLink :to="post._path" class="title">{{ post.title }}</NuxtLink>
              <time>{{ formatDate(post.date) }}</time>
              <p class="small-text" v-html="post.description"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { formatDate } from '../../utils/formatDate';

useHead({
  title: 'UX/UI Designer & Developer in Michigan',
});

const { data } = await useAsyncData('writing-list', () => queryContent('/writing').sort({ date: -1 }).find());

const posts = computed(() => {
  return data?.value?.filter((post) => post.type === 'entry').filter((post) => !post.draft);
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
    @media (min-width: 1053px) {
      grid-column: 1 / span 18;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }

    @media (max-width: 499px) {
      padding-top: 2rem;
    }
  }

  .sidebar-area {
    grid-column: 1;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }

  .article-list {
    list-style: none;
    padding: 0;
    margin: var(--sizing-xxxl) 0 0;

    li {
      display: flex;
      flex-direction: column;
      gap: var(--sizing-md);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      padding: var(--sizing-xxl) var(--sizing-md);

      .title {
        font-weight: 700;
      }

      p {
        max-width: 70ch;
      }
    }

    time {
      font-size: var(--size-step--2);
      text-transform: uppercase;
      margin-bottom: var(--sizing-lg);
    }
  }
}
</style>
