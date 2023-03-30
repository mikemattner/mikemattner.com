<template>
  <main class="article-page">
    <template v-if="data">
      <article class="article-layout">
        <aside class="article-meta">
          <div class="article-meta-block">
            <h4 class="eyebrow">Posted</h4>
            <p>{{ formatDate(data.date) }}</p>
          </div>
          <div class="article-meta-block">
            <h4 class="eyebrow">Topic</h4>
            <ul class="tag-list">
              <li v-for="tag in data.tag" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </aside>
        <header class="article-header">
          <h1 v-html="data.title"></h1>
        </header>
        <ContentRenderer :value="data">
          <ContentRendererMarkdown class="article-body flow" :value="data" />
          <template #empty>
            <h1>No Content</h1>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
        <ArticleNavigation class="prev-next" />
      </article>
    </template>
  </main>
</template>

<script setup lang="ts">
import { formatDate } from '~~/utils/formatDate';

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

const pageTitle = computed<string>(() => {
  return data?.value?.title ? data?.value?.title : 'UX/UI Designer & Developer in Michigan';
});

useHead({
  title: pageTitle.value,
});
</script>

<style lang="scss" scoped>
.article-page {
  padding-left: 0;
  padding-right: 0;
}
.article-layout {
  @media (min-width: 1324px) {
    display: grid;
    gap: var(--sizing-xl);
    grid-template-columns:
      calc(50vw - 41.25rem)
      repeat(6, 1fr)
      calc(50vw - 41.25rem);
  }
  @media (max-width: 1323px) {
    display: grid;
    gap: var(--sizing-xl);
    grid-template-columns:
      var(--sizing-xl)
      repeat(6, 1fr)
      var(--sizing-xl);
  }

  @media (max-width: 881px) {
    display: grid;
    gap: var(--sizing-md);
    grid-template-columns:
      var(--sizing-lg)
      repeat(6, 1fr)
      var(--sizing-lg);
  }

  .article-header {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 3 / span 5;
    grid-row: 1;

    @media (max-width: 988px) {
      grid-column: 2 / span 6;
      grid-row: 1;
    }
  }
  .article-body {
    grid-column: 3 / span 4;
    grid-row: 2;

    @media (max-width: 1200px) {
      grid-column: 3 / span 4;
      grid-row: 2;
    }

    @media (max-width: 988px) {
      grid-column: 2 / span 6;
      grid-row: 3;
    }
  }

  .article-meta {
    border-top: 1px solid var(--border-color);
    padding: var(--sizing-md) 0;
    font-size: var(--size-step--1);
    font-weight: 700;
    grid-column: 2 / span 1;
    grid-row: 2;

    &-block {
      @media (min-width: 989px) {
        margin-block-end: 1.5rem;
      }
    }

    .tag-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    @media (min-width: 989px) {
      margin-top: 0.5rem;
    }

    @media (max-width: 988px) {
      grid-column: 2 / span 6;
      grid-row: 2;
      border-bottom: 1px solid var(--border-color);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--sizing-xl);
    }
  }

  .prev-next {
    grid-column: 3 / span 4;

    @media (max-width: 1200px) {
      grid-column: 3 / span 4;
      grid-row: 3;
    }

    @media (max-width: 988px) {
      grid-column: 2 / span 6;
      grid-row: 4;
    }
  }
}
:deep(.footnotes) {
  font-size: var(--size-step--1);

  hr {
    margin-top: var(--sizing-lg);
  }
}
:deep(sup a) {
  display: inline-block;
  padding: 3px;
  background-color: var(--color-middle-gray);
  color: var(--color-dark);
  line-height: 1;
  text-decoration: none;
  margin-left: 2px;
  font-weight: 700;
  transition: var(--transition);
  border-radius: 2px;

  &:hover {
    background-color: var(--color-primary);
  }
}
</style>
