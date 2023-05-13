<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__hero">
        <div class="home-greeting flow">
          <h1 class="main-lede">
            <span>I&rsquo;m Mike, a designer <em>&amp;</em> developer from Michigan.</span>
          </h1>
          <p>I&rsquo;m currently working at AccuLynx as a Sr. UI Engineer.</p>
          <div class="button-group">
            <BaseButton to="/about" variant="outline" size="md" color="primary">
              <span>Learn About Me</span> <Icon name="ri:arrow-right-line" />
            </BaseButton>
          </div>
        </div>
      </div>
      <div class="home-layout__content">
        <div class="sidebar-area flow">
          <h2>Writing</h2>
          <p>Some things I've written about over the years on topics like career, personal, and politics.</p>
        </div>
        <div class="content-area flow">
          <ul class="article-list">
            <li v-for="post in posts" :key="post.title">
              <NuxtLink :to="post._path" class="title">{{ post.title }}</NuxtLink>
              <time>{{ formatDate(post.date) }}</time>
              <p class="small-text" v-html="post.description"></p>
            </li>
          </ul>
          <div class="button-group">
            <BaseButton to="/writing" variant="outline" size="md" color="primary">
              <span>More Articles</span> <Icon name="ri:arrow-right-line" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { formatDate } from '../utils/formatDate';

useHead({
  title: 'UX/UI Designer & Developer in Michigan',
});

const { data } = await useAsyncData('writing-short', () => queryContent('/writing').sort({ date: -1 }).find());

const posts = computed(() => {
  return data?.value
    ?.filter((post) => post.type === 'entry')
    .filter((post) => !post.draft)
    .slice(0, 3);
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 0 2rem;
  @media (max-width: 715px) {
    padding: 1rem;
  }

  hr {
    grid-column: 1 / span 4;
    margin-block-start: 3rem;
    margin-block-end: 3rem;
  }
}
.home-layout {
  &__hero {
    max-width: var(--max-width);
    margin-inline: auto;
    margin-block-start: 4rem;
    margin-block-end: 4rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 8rem;
      margin-block-end: 8rem;
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xxl) var(--sizing-xxl);
    }

    @media (min-width: 500px) {
      display: grid;
    }
  }

  &__content {
    max-width: var(--max-width);
    margin-inline: auto;
    margin-block-start: 8rem;
    margin-block-end: 4rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 10rem;
      margin-block-end: 10rem;
      display: grid;
    }
  }

  .main-lede {
    // font-variation-settings: 'wdth' 100;
    font-size: clamp(40px, 8vw, 95px);
    line-height: 1;
    letter-spacing: -0.025em;
    color: var(--headline-font-color);
    display: grid;
    grid-auto-rows: auto;
    gap: var(--sizing-md);
    // text-transform: uppercase;

    .intro {
      letter-spacing: 0.01em;
      font-weight: 300;
      font-size: var(--size-step--1);
      line-height: 1.5;
    }
  }

  .home-greeting {
    z-index: 2;
    align-self: center;
    font-size: var(--size-step-1);
    line-height: 1.5;

    p {
      --flow-space: 1.75em;
      max-width: 65ch;
    }

    @media (min-width: 1053px) {
      grid-column: 1 / -1;
      grid-row: 1 / span 3;
      align-self: center;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }
  }

  .article-list {
    list-style: none;
    padding: 0;
    margin: 0;

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

  .content-area {
    grid-column: 9 / -1;

    @media (max-width: 1052px) {
      padding-top: 2rem;
    }
  }

  .sidebar-area {
    grid-column: 1 / span 7;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }
}
</style>
