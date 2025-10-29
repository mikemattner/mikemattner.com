<template>
  <main class="article-page">
    <template v-if="data">
      <header class="article-layout__feature">
        <div class="article-header">
          <ul class="breadcrumb-trail flex--justify-center">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/notes">Notes</NuxtLink></li>
          </ul>
          <h1 class="article-title" v-html="data.title"></h1>
          <hr />
        </div>
      </header>
      <article class="article-layout">
        <aside class="article-meta">
          <div class="article-meta-block">
            <h4 class="eyebrow"><Icon name="ri:calendar-schedule-line" /> Posted</h4>
            <time>{{ formatDate(data.date) }}</time>
          </div>
          <div class="article-meta-block">
            <h4 class="eyebrow"><Icon name="ri:chat-thread-line" /> Topic</h4>
            <div class="tag-list">
              <BaseButton
                v-for="tag in data.tag"
                :key="tag"
                :to="`/blog/tag/${tag}`"
                size="xs"
                color="secondary"
                variant="solid"
              >
                {{ tag }}
              </BaseButton>
            </div>
          </div>
        </aside>
        <ContentRenderer :value="data">
          <ContentRendererMarkdown class="article-body flow" :value="data" />
          <template #empty>
            <h1>No Content</h1>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </template>
  </main>
</template>

<script setup lang="ts">
import type { Note } from '~/types/notes';
import { formatDate } from '~~/utils/formatDate';

const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent<Note>(path).findOne() as Promise<Note>;
});

const pageTitle = computed<string>(() => {
  return data?.value?.title ? data?.value?.title : 'UX/UI Designer & Developer in Michigan';
});

useHead({
  title: pageTitle.value,
});
</script>

<style lang="scss" scoped>
// .article-page {
//   // padding-left: 0;
//   // padding-right: 0;
//   padding-bottom: 0;
// }
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

  &__feature {
    padding: 1rem 0 0;
    z-index: 1;
    max-width: var(--max-width);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    @media (min-width: 768px) {
      margin-block-start: 6rem;
    }

    .article-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      z-index: 2;
      grid-column: 1;
      grid-row: 1;
      padding: var(--sizing-lg);

      .article-title {
        font-size: clamp(30px, 8vw, 75px);
      }

      hr {
        margin-block-start: 2.5em;

        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
  }
  .article-body {
    grid-column: 3 / span 4;
    grid-row: 1;

    @media (max-width: 899px) {
      grid-column: 1 / span 6;
      grid-row: 1;
    }

    @media (min-width: 900px) {
      grid-column: 2 / span 4;
      grid-row: 1;
    }

    @media (min-width: 1001px) {
      grid-column: 6 / span 18;
      grid-row: 1;
    }
  }

  .article-meta {
    padding: var(--sizing-md) 0;
    font-size: var(--size-step--1);
    grid-column: 1 / span 4;
    grid-row: 1;

    @media (min-width: 1001px) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }

    @media (max-width: 1000px) {
      grid-column: 1 / span 6;
      grid-row: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--sizing-xl);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
      margin-block-end: var(--sizing-sm);
    }

    &-block {
      svg {
        width: 1.5em;
        height: 1.5em;
      }
      @media (min-width: 1001px) {
        margin-block-end: 1.5rem;
      }
    }

    // time {
    //   font-family: var(--code-font-family);
    // }

    .tag-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--sizing-md);
      margin: var(--sizing-md) 0 0;
      padding: 0;
      list-style: none;

      .button {
        font-size: var(--size-step--2);
        font-family: var(--code-font-family);
      }

      @media (max-width: 1000px) {
        flex-direction: row;
        align-items: center;
        gap: var(--sizing-sm);
        margin: 0;
      }
    }

    @media (min-width: 989px) {
      margin-top: 0.5rem;
    }

    @media (max-width: 988px) {
      grid-column: 1 / span 6;
      grid-row: 2;
    }
  }
}
:deep(.footnotes) {
  font-size: var(--size-step--1);
  margin-top: var(--sizing-xxxl);
}
:deep(sup a) {
  display: inline-block;
  padding: 3px;
  background-color: var(--border-color);
  color: var(--headline-font-color);
  line-height: 1;
  text-decoration: none;
  margin-left: 3px;
  font-weight: 700;
  transition: var(--transition);
  border-radius: 2px;
  top: -2px;
  position: relative;

  &:hover {
    color: hsl(var(--color-white-hsl));
    background-color: var(--color-primary);
  }
}
</style>
