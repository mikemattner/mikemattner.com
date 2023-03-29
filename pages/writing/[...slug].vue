<template>
  <main class="article-layout">
    <template v-if="data">
      <article class="article-body">
        <header class="article-header">
          <div class="meta">{{ formatDate(data.date) }}</div>
          <h1 v-html="data.title"></h1>
        </header>
        <ContentRenderer :value="data">
          <ContentRendererMarkdown class="flow" :value="data" />
          <template #empty>
            <h1>No Content</h1>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
        <ArticleNavigation />
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
</script>

<style lang="scss" scoped>
.article-layout {
  @media (min-width: 500px) {
    display: grid;
    gap: var(--sizing-xl);
    grid-template-columns:
      calc(50vw - 41.25rem)
      repeat(4, 1fr)
      calc(50vw - 41.25rem);

    .article-body {
      grid-column: 2 / span 3;
    }
  }

  .article-body .flow pre {
    grid-column: 2 / span 4;
  }

  .article-header {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
