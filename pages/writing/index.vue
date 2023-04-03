<template>
  <main>
    <div class="writing-layout">
      <div class="writing-layout__content">
        <div class="content-area flow">
          <h1>Writing</h1>
          <ul>
            <li v-for="post in posts" :key="post.title">
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

const posts = computed(() => {
  return data?.value?.filter((post) => post.type === 'entry');
});
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

  .writing-title {
    color: var(--color-primary);
    z-index: 2;
    position: relative;
    font-size: clamp(var(--size-step-6), 10vw, 120px);
    line-height: 1;
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
