<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__hero">
        <BaseImage src="/images/mike-profile-two.jpg" class="profile-image" />
        <div class="home-greeting flow">
          <h1 class="home-hello">Hello there!</h1>
          <p>
            <strong>I&rsquo;m Mike</strong>, a creative developer from Michigan with over 15 years of experience working
            on the web in a variety of design and development roles.
          </p>
          <p>
            I&rsquo;m currently working at AccuLynx as a Sr. UI Engineer. On the web, I'm primarily working with Vue and
            Nuxt. This site is being designed and built out in the open.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="outline" size="md" color="primary">
              <span>Learn About Me</span> <Icon name="ri:arrow-right-line" />
            </BaseButton>
          </div>
        </div>
      </div>
      <hr />
      <div class="home-layout__content">
        <div class="sidebar-area flow">
          <h2>Writing</h2>
          <p>Some things I've written about over the years on topics like career, personal, and politics.</p>
        </div>
        <div class="content-area flow">
          <ul class="article-list">
            <li v-for="post in posts" :key="post.title">
              <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
              &mdash; {{ formatDate(post.date) }}
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

const { data } = await useAsyncData('writing', () => queryContent('/writing').sort({ date: -1 }).find());

const posts = computed(() => {
  return data?.value?.filter((post) => post.type === 'entry').slice(0, 4);
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 0;

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
    margin-block-start: 2rem;
    margin-block-end: 2rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      grid-template-rows: repeat(3, 1fr);
      margin-block-start: 6rem;
      margin-block-end: 6rem;
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, auto);
      padding: 2rem;
      gap: var(--sizing-xxl) var(--sizing-xxl);
    }

    @media (max-width: 715px) {
      padding: 1rem;
    }

    @media (min-width: 500px) {
      display: grid;
    }
  }

  &__content {
    max-width: var(--max-width);
    margin-inline: auto;
    margin-block-start: 2rem;
    margin-block-end: 2rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 10rem;
      margin-block-end: 10rem;
      display: grid;
    }

    @media (max-width: 1052px) {
      padding: 2rem;
    }

    @media (max-width: 715px) {
      padding: 1rem;
    }

    @media (min-width: 500px) {
    }
  }

  .profile-image {
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;

    @media (min-width: 1053px) {
      grid-column: 14 / -2;
      grid-row: 1 / span 3;
      aspect-ratio: 1 / 1.125;
      align-self: center;
    }
    @media (max-width: 1052px) and (min-width: 501px) {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
      aspect-ratio: 1 / 1.125;
    }

    @media (max-width: 500px) {
      aspect-ratio: 1;
    }

    :deep(img) {
      mix-blend-mode: multiply;
      z-index: 2;
      position: relative;
      opacity: 0.8;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
      font-family: 'object-fit: cover; object-position: center';
      width: 100%;
      height: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: var(--gradient-1);
      mix-blend-mode: normal;
      opacity: 0.8;
      z-index: 3;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: var(--image-background);
      mix-blend-mode: screen;
      opacity: 0.8;
      z-index: 1;
    }
  }
  .home-hello {
    color: var(--color-primary);
    z-index: 2;
    position: relative;
    font-size: clamp(var(--size-step-4), 8vw, 100px);
    line-height: 1;

    @media (min-width: 1053px) {
      text-indent: -0.5rem;
    }

    @media (max-width: 500px) {
      margin-top: -0.5em;
    }
  }

  .home-greeting {
    z-index: 2;
    align-self: center;
    max-width: 65ch;

    @media (min-width: 1053px) {
      grid-column: 2 / span 10;
      grid-row: 1 / span 3;
      align-self: center;
    }
    @media (max-width: 1052px) {
      grid-column: 2 / span 3;
      grid-row: 2;
    }
  }

  .article-list {
    list-style: none;
    padding: 0;
  }

  .content-area {
    grid-column: 9 / -2;
  }

  .sidebar-area {
    grid-column: 2 / span 6;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }
}
</style>
