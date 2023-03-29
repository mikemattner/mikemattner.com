<template>
  <main>
    <div class="writing-layout">
      <div class="writing-layout__content">
        <div class="content-area flow">
          <h2>Writing</h2>
          <p>I'm building this out in the open, so bare with me. Here's a list of my articles.</p>
          <ul>
            <li v-for="post in data" :key="post.title">
              <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
              &mdash; {{ formatDate(post.date) }}
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

const { data } = await useAsyncData('writing', () => queryContent('/writing').sort({ date: -1 }).find());
</script>

<style lang="scss" scoped>
.writing-layout {
  max-width: var(--max-width);
  margin-inline: auto;

  &__content {
    margin-block-end: 2rem;

    @media (min-width: 500px) {
      display: grid;
      gap: var(--sizing-xl);
      grid-template-columns: repeat(4, 1fr);
    }

    hr {
      grid-column: 1 / span 4;
      margin-block-start: 2rem;
      margin-block-end: 3rem;
    }
  }

  .content-area {
    grid-column: 2 / span 3;
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
}
</style>
