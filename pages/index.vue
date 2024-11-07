<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__hero">
        <div class="profile-image">
          <PrimaryImage
            src="/images/pro-profile.jpg"
            alt="Portrait shot of Mike."
            has-overlay
            class="profile-image-photo"
          />
        </div>

        <h1 class="main-lede very-large-heading">
          <span class="introduction">Hey there</span>
        </h1>
        <div class="home-greeting flow">
          <p class="intro">
            I&rsquo;m a
            <strong>designer</strong> and
            <strong>developer</strong>
            from Michigan, currently working at AccuLynx as a Sr. UI Engineer.
          </p>
          <p>
            In a former life I worked as a <strong>digital designer</strong>&mdash;basically a catch-all for video
            editing, motion graphics, print design, et cetera. Now I mostly create in code.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="solid" size="md" color="primary">
              <span>Read More</span>
            </BaseButton>
          </div>
        </div>
      </div>
      <hr />
      <div class="home-layout__content">
        <h2 class="small-heading recently-posted-header">Recently Posted</h2>
        <ArticleList class="recently-posted-articles" :posts="posts" />
        <div class="button-group recently-posted-archives">
          <BaseButton to="/blog" variant="solid" size="md" color="primary">
            <span>Blog Archives</span>
          </BaseButton>
          <BaseButton to="/notes" variant="outline" size="md" color="primary">
            <span>Note Archives</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Post } from '../types/posts';

useHead({
  title: 'Designer & Developer in Michigan',
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
});

const { data } = await useAsyncData('blog-short', () => queryContent<Post>('/blog').sort({ date: -1 }).find());

const posts = computed(() => {
  return data?.value?.filter((post) => !post.draft).slice(0, 3) as Post[];
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: 0 var(--sizing-xl);
  @media (max-width: 715px) {
    padding: 1rem;
  }

  hr {
    max-width: var(--max-width);
    margin-inline: auto;
  }
}
.home-layout {
  &__hero {
    margin-block-start: 2rem;
    margin-block-end: 4rem;
    max-width: var(--max-width);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 6rem;
      margin-block-end: 6rem;
      gap: var(--sizing-xxl) 0;
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xl) var(--sizing-xl);
    }

    @media (max-width: 715px) {
      margin-inline: auto;
    }
  }

  &__content {
    max-width: var(--max-width);
    margin-inline: auto;
    margin-block-start: 4rem;
    margin-block-end: 4rem;
    display: grid;

    @media (min-width: 716px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 4rem;
      margin-block-end: 8rem;
    }

    @media (max-width: 715px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xxl) var(--sizing-xxl);
      margin-inline: auto;
      display: block;
    }
  }

  .home-greeting {
    z-index: 2;
    align-self: center;

    strong:hover {
      svg {
        transform: scale(1.35);
        transition: var(--transition-cubic);
      }
    }

    p {
      --flow-space: 0.75em;
      max-width: 65ch;
    }

    @media (min-width: 1053px) {
      grid-column: 13 / -1;
      align-self: start;
      grid-row: 2;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }

    .intro {
      letter-spacing: 0.01em;
      font-weight: 300;
      font-size: var(--size-step-1);
      line-height: 1.4;
      max-width: 65ch;
      text-wrap: pretty;

      svg {
        fill: var(--color-highlight);
        color: var(--color-highlight);
        display: inline-flex;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        margin: -0.1em 0.2em 0 0.25em;
        transform: scale(1.15);
        transition: var(--transition);
      }
    }
  }

  .content-area {
    grid-column: 1 / span 28;
    margin: var(--sizing-xl) 0 0;
  }

  .sidebar-area {
    grid-column: 1 / span 28;
  }

  .button-group {
    --flow-space: 1.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-xl);

    @media (max-width: 499px) {
      flex-direction: column;

      .button {
        width: 100%;
      }
    }
  }

  .main-lede {
    align-items: center;
    display: grid;
    grid-template-columns: subgrid;
    line-height: 1;
    grid-row: 1;
    z-index: 2;

    @media (min-width: 1053px) {
      grid-column: 1 / -1;
      align-self: end;
      grid-row: 1 / span 2;
      align-self: start;
      z-index: 1;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / -1;
      grid-row: 1;
    }

    @media (max-width: 499px) {
      margin: 0;
      gap: 0;
      line-height: 1.1;
    }
  }

  .introduction {
    text-wrap: balance;

    @media (min-width: 1053px) {
      grid-column: 1 / -1;
      align-self: center;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 3;
      align-self: end;
    }
    @media (max-width: 499px) {
      grid-column: 1 / span 4;
    }
  }

  .profile-image {
    aspect-ratio: 2 / 1.25;
    border-radius: 7px;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 1052px) {
      grid-column: 1 / -1;
      aspect-ratio: 1 / 0.5;
      align-self: self-start;
      grid-row: 1;
    }

    @media (min-width: 1053px) {
      grid-column: 13 / -1;
      aspect-ratio: 2 / 1.5;
      grid-row: 1;
    }

    @media (max-width: 499px) {
      grid-column: 1 / span 4;
      aspect-ratio: 2 / 1;
      grid-row: 2;
    }

    .profile-image-photo {
      width: 100%;
      height: 100%;
    }
  }

  .recently-posted-header {
    grid-column: 1 / -1;
    grid-row: 1;

    @media (min-width: 768px) {
      grid-row: 1;
      grid-column: 1 / 9;
    }

    @media (max-width: 767px) {
      margin-block-end: var(--sizing-xxl);
    }
  }

  .recently-posted-articles {
    grid-column: 1 / -1;
    grid-row: 2;

    @media (min-width: 768px) {
      grid-row: 1;
      grid-column: 9 / -1;
    }
  }

  .recently-posted-archives {
    grid-column: 1 / -1;
    grid-row: 3;
    margin-top: var(--sizing-xxl);

    @media (min-width: 768px) {
      grid-row: 2;
      grid-column: 9 / -1;
      margin-top: var(--sizing-xxxl);
    }
  }

  .half-posts {
    grid-column: 1 / -1;
  }
}
</style>
