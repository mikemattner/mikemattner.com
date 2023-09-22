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
          <h1 class="article-title" v-html="data.title"></h1>
        </header>
        <ContentRenderer :value="data">
          <ContentRendererMarkdown class="article-body flow" :value="data" />
          <div v-if="data.link" class="article-link">
            <BaseButton :href="data.link" variant="outline" size="md" color="primary">
              Read More <Icon name="ri:external-link-fill" />
            </BaseButton>
          </div>
          <template #empty>
            <h1>No Content</h1>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
        <ArticleNavigation class="prev-next" content="links" />
      </article>
    </template>
  </main>
</template>

<script setup lang="ts">
import { formatDate } from '~~/utils/formatDate';

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent(path).findOne();
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
  // padding-left: 0;
  // padding-right: 0;
  padding-bottom: 0;
}
.article-layout {
  max-width: var(--max-width);
  margin-inline: auto;
  display: grid;

  @media (max-width: 881px) {
    gap: var(--sizing-md);
  }

  @media (max-width: 1000px) {
    gap: var(--sizing-xl);
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 1001px) {
    display: grid;
    row-gap: var(--sizing-xxl);
    grid-template-columns: repeat(28, 1fr);
  }
  .article-header {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 988px) {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    @media (min-width: 989px) {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    @media (min-width: 1001px) {
      grid-column: 1 / -1;
      grid-row: 1;
    }
  }
  .article-body {
    grid-column: 3 / span 4;
    grid-row: 2;

    @media (max-width: 988px) {
      grid-column: 1 / span 6;
      grid-row: 3;
    }

    @media (min-width: 989px) {
      grid-column: 1 / span 6;
      grid-row: 3;
    }

    @media (min-width: 1001px) {
      grid-column: 6 / span 18;
      grid-row: 2;
    }
  }

  .article-title {
    font-size: clamp(40px, 8vw, 95px);
  }
  .article-link {
    padding-bottom: 3rem;
    grid-column: 3 / span 4;
    grid-row: 3;

    @media (max-width: 988px) {
      grid-column: 1 / span 6;
      grid-row: 4;
    }

    @media (min-width: 989px) {
      grid-column: 1 / span 6;
      grid-row: 4;
    }

    @media (min-width: 1001px) {
      grid-column: 6 / span 18;
      grid-row: 3;
    }
  }

  .prev-next {
    @media (max-width: 988px) {
      grid-column: 1 / span 6;
      grid-row: 5;
    }

    @media (min-width: 989px) {
      grid-column: 1 / span 6;
      grid-row: 5;
    }

    @media (min-width: 1001px) {
      grid-column: 1 / span 28;
      grid-row: 4;
    }
  }

  .article-meta {
    border-top: 1px solid var(--border-color);
    padding: var(--sizing-md) 0;
    font-size: var(--size-step--1);
    font-weight: 700;
    grid-column: 1 / span 4;
    grid-row: 2;

    @media (min-width: 1001px) {
      grid-column: 1 / span 4;
      grid-row: 2;
    }

    @media (max-width: 1000px) {
      grid-column: 1 / span 6;
      grid-row: 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--sizing-xl);
    }

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
      grid-column: 1 / span 6;
      grid-row: 2;
      border-bottom: 1px solid var(--border-color);
    }
  }
}
:deep(.footnotes) {
  font-size: var(--size-step--1);
  border-top: 1px solid var(--border-color);
  margin-top: var(--sizing-xxxl);
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
