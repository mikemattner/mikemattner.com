<template>
  <main>
    <div class="home-layout">
      <div class="home-layout__hero">
        <BaseImage src="/images/mike-profile-two.jpg" class="profile-image" />
        <h1 class="home-hello">Hello</h1>
        <div class="home-greeting flow">
          <p class="lede">
            I&rsquo;m <strong>Mike</strong>, a creative developer from Michigan with over 15 years of experience working
            on the web in a variety of design and development roles. I&rsquo;m currently working at AccuLynx as a Sr. UI
            Engineer.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="outline" size="sm" color="primary">
              <span>Learn More About Me</span> <Icon name="ri:arrow-right-line" />
            </BaseButton>
          </div>
        </div>
      </div>
      <div class="home-layout__content">
        <hr />
        <div class="content-area flow">
          <h2>Writing</h2>
          <p>I'm building this out in the open, so bare with me. Here's a list of my articles.</p>
          <ul>
            <li v-for="post in posts" :key="post.title">
              <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
              {{ formatDate(post.date) }}
            </li>
          </ul>
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
  return data?.value?.slice(0, 5);
});
</script>

<style lang="scss" scoped>
.home-layout {
  max-width: var(--max-width);
  margin-inline: auto;

  &__hero {
    gap: var(--sizing-xxl);
    margin-block-start: 2rem;
    margin-block-end: 2rem;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
      margin-block-start: 2rem;
      margin-block-end: 6rem;
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, auto);
    }
    @media (min-width: 500px) {
      display: grid;
    }
  }

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

  .profile-image {
    z-index: 1;
    overflow: hidden;
    border-radius: 30% 2px;

    @media (min-width: 1053px) {
      grid-column: 2 / span 2;
      grid-row: 1 / span 3;
    }
    @media (max-width: 1052px) and (min-width: 716px) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
      aspect-ratio: 1;
      align-self: self-end;
    }

    @media (max-width: 715px) {
      aspect-ratio: 1;
    }

    :deep(img) {
      mix-blend-mode: multiply;
      z-index: 2;
      position: relative;
      opacity: 0.8;

      @media (max-width: 929px) {
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
    text-transform: uppercase;
    color: var(--color-primary);
    z-index: 2;
    position: relative;
    font-size: var(--size-step-7);

    @media (min-width: 1053px) {
      grid-column: 1 / span 2;
      grid-row: 2;
    }
    @media (max-width: 1052px) {
      grid-column: 2 / span 3;
      grid-row: 1;
      align-self: self-end;
      font-size: var(--size-step-6);
      line-height: 1;
    }
    @media (max-width: 500px) {
      font-size: var(--size-step-6);
      margin-top: -0.5em;
    }
  }

  .home-greeting {
    z-index: 2;
    align-self: center;

    @media (min-width: 1053px) {
      grid-column: 4 / span 2;
      grid-row: 1 / span 3;
    }
    @media (max-width: 1052px) {
      grid-column: 2 / span 3;
      grid-row: 2;
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
