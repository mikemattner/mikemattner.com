<template>
  <main class="article-page">
    <template v-if="data">
      <article class="article-layout">
        <aside class="article-meta">
          <div class="article-meta-block">
            <h4 class="eyebrow">Posted</h4>
            <time>{{ formatDate(data.date) }}</time>
          </div>
          <div class="article-meta-block">
            <h4 class="eyebrow">Topic</h4>
            <ul class="tag-list">
              <li v-for="tag in data.tag" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </aside>
        <header class="article-header">
          <ul class="breadcrumb-trail">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          </ul>
          <h1 class="article-title" v-html="data.title"></h1>
        </header>
        <ContentRenderer :value="data">
          <ContentRendererMarkdown class="article-body flow" :value="data" />
          <template #empty>
            <h1>No Content</h1>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
        <div v-if="data.link" class="article-link">
          <div class="link-icon">
            <Icon name="ri:external-link-line" />
          </div>
          <div class="text">
            Read more at <a :href="data.link">{{ data.link }}</a>
          </div>
        </div>
        <ArticleNavigation class="prev-next" />
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

    @media (max-width: 767px) {
      grid-column: 1 / span 6;
      grid-row: 3;
    }

    @media (min-width: 768px) {
      grid-column: 2 / span 4;
      grid-row: 3;
    }

    @media (min-width: 1001px) {
      grid-column: 6 / span 18;
      grid-row: 2;
    }
  }

  .breadcrumb-trail {
    margin: 0 0 var(--sizing-md);
    padding: 0;
    list-style: none;
    display: flex;
    gap: var(--sizing-lg);
    align-items: center;
    font-size: var(--size-step--1);
    font-family: var(--code-font-family);

    li {
      margin: 0;
      padding: 0;
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--sizing-lg);

      &:after {
        content: '›';
        line-height: 1;
        opacity: 0.5;
      }
    }
  }
  .article-title {
    font-size: clamp(40px, 8vw, 95px);
  }

  .article-meta {
    border-top: 1px solid var(--border-color);
    padding: var(--sizing-md) 0;
    font-size: var(--size-step--1);
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

    time {
      font-family: var(--code-font-family);
    }

    .tag-list {
      margin: 0;
      padding: 0;
      list-style: none;
      font-family: var(--code-font-family);
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

  .article-link {
    padding: 0;
    grid-column: 3 / span 4;
    grid-row: 3;
    display: flex;
    align-items: stretch;
    background-color: var(--block-quote-bg);
    border-radius: 0 var(--sizing-sm) var(--sizing-sm) 0;

    .link-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 0.5rem;
      font-size: var(--size-step-1);
      background-color: var(--color-primary);
      color: var(--color-light);
    }

    .text {
      padding: 1rem 1.5rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      grid-column: 1 / span 6;
      grid-row: 4;
    }

    @media (min-width: 768px) {
      grid-column: 2 / span 4;
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
}
:deep(.footnotes) {
  font-size: var(--size-step--1);
  border-top: 1px solid var(--border-color);
  margin-top: var(--sizing-xxxl);
}
:deep(sup a) {
  display: inline-block;
  padding: 3px;
  background-color: hsla(var(--color-primary-hsl), 0.75);
  color: hsl(var(--color-white-hsl));
  line-height: 1;
  text-decoration: none;
  margin-left: 2px;
  font-weight: 700;
  transition: var(--transition);
  border-radius: 2px;

  &:hover {
    color: hsl(var(--color-white-hsl));
    background-color: var(--color-primary);
  }
}
</style>
