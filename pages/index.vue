<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__intro">
        <h1 class="intro-title">
          <small class="intro-title__role">Mike is a</small>
          <span class="intro-title__design">Designer</span>
          <span class="intro-title__ampersand">&amp;</span>
          <span class="intro-title__development">Developer</span>
          <small class="intro-title__location">from Michigan</small>
        </h1>
        <div class="profile-image-wide">
          <PrimaryImage
            src="/images/about-profile.jpg"
            alt="Portrait shot of Mike."
            has-overlay
            class="profile-image-photo"
          />
        </div>
      </div>
      <hr />
      <div class="home-layout__hero">
        <h2 class="main-lede h4-heading">About Mike</h2>

        <div class="home-greeting flow">
          <h3 class="small-heading">Hey there 👋</h3>
          <p>I’m Mike — a Senior UI Engineer at AccuLynx.</p>
          <p>
            I’ve been designing and building for the web for over twenty years, evolving from hobby projects into a
            career focused on thoughtful UI, component-driven design, and clean, maintainable front-end architecture.
          </p>
          <p>
            These days, I’m all about crafting intuitive, human-centered web experiences that balance form, function,
            and a bit of personality. I create and design in code and think of myself as a
            <a href="https://www.trysmudford.com/blog/i-think-im-a-design-engineer/">design engineer</a> more than
            anything else.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="solid" size="sm" color="primary">
              <span>Read More</span>
            </BaseButton>
          </div>
        </div>
      </div>
      <hr />
      <div class="home-layout__content">
        <header class="recently-posted-header">
          <h2 class="h4-heading">Recently Posted</h2>
          <div class="button-group">
            <BaseButton to="/blog" variant="solid" size="xs" color="secondary">
              <span>Blog Archives</span>
            </BaseButton>
            <BaseButton to="/notes" variant="solid" size="xs" color="secondary">
              <span>Note Archives</span>
            </BaseButton>
          </div>
        </header>
        <ArticleList class="recently-posted-articles" :posts="posts" />
        <NoteSummaryList class="recently-posted-notes" :notes="notes" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Post } from '../types/posts';
import type { Note } from '../types/notes';

useHead({
  title: 'Designer & Developer in Michigan',
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
});

const { data } = await useAsyncData('blog-short', () => queryContent<Post>('/blog').sort({ date: -1 }).find());
const { data: notesData } = await useAsyncData('notes-short', () =>
  queryContent<Note>('/notes').sort({ date: -1 }).find()
);

const posts = computed(() => {
  return data?.value?.filter((post) => !post.draft).slice(0, 6) as Post[];
});

const notes = computed(() => {
  return notesData?.value?.filter((note) => !note.draft).slice(0, 6) as Note[];
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
  &__hero,
  &__intro {
    margin-block-start: 2rem;
    margin-block-end: 4rem;
    max-width: var(--max-width);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1000px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 4rem;
      margin-block-end: 6rem;
      gap: var(--sizing-xxl) 0;
    }
    @media (max-width: 999px) {
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

  .intro-title {
    line-height: 1;
    grid-row: 1;
    text-wrap: balance;
    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    z-index: 2;

    @media (min-width: 1000px) {
      grid-row: 1;
      grid-column: 1 / span 12;
      margin: var(--sizing-xxxxl) 0;
    }

    @media (max-width: 999px) {
      grid-column: 1 / -1;
      align-self: self-start;
      grid-row: 1;
      grid-column: 1 / -1;
      margin: var(--sizing-xxl) 0;
    }

    &__role {
      margin: 0;
      line-height: 1.2;
      grid-row: 1;
      grid-column: 1;
    }

    &__design {
      font-size: var(--size-step-7);
      z-index: 1;
      // text-shadow: 0 0 var(--sizing-xl) hsla(var(--color-blue-hsl), 0.5);
      font-variation-settings: 'wdth' 75, 'wght' 800;
      text-transform: uppercase;
      line-height: 0.875;
      grid-row: 2;
      grid-column: 1;
      color: var(--color-blue);

      @media (max-width: 893px) {
        font-size: var(--size-step-7);
      }
    }

    &__ampersand {
      font-size: var(--size-step-6);
      z-index: 2;
      color: var(--headline-font-color);
      // text-shadow: 0 0 var(--sizing-xl) hsla(var(--color-blue-hsl), 0.05);
      font-variation-settings: 'wdth' 100, 'wght' 300, 'ital' 10;
      line-height: 1;
      grid-row: 2 / span 2;
      grid-column: 1;
      align-self: center;
      margin-left: 0.0125em;

      @media (max-width: 893px) {
        font-size: var(--size-step-6);
      }
    }

    &__development {
      font-size: var(--size-step-7);
      z-index: 3;
      letter-spacing: -0.025em;
      // text-shadow: 0 0 var(--sizing-xl) hsla(var(--color-blue-hsl), 0.5);
      font-variation-settings: 'wdth' 75, 'wght' 800;
      text-transform: uppercase;
      line-height: 0.75;
      grid-column: 1;
      grid-row: 3;
      color: var(--color-blue);

      @media (max-width: 893px) {
        font-size: var(--size-step-7);
      }
    }

    &__location {
      margin: 0;
      line-height: 1.2;
      grid-row: 4;
      grid-column: 1;
    }
  }

  .profile-image-wide {
    border-radius: var(--border-radius);
    overflow: hidden;
    z-index: 1;
    max-width: var(--max-width);
    margin-inline: auto;
    width: 100%;
    height: 100%;

    @media (min-width: 1000px) {
      grid-row: 1;
      grid-column: 10 / -1;
    }

    @media (max-width: 999px) {
      grid-column: 1 / -1;
      align-self: self-start;
      grid-row: 2;
      grid-column: 1 / -1;
      aspect-ratio: 2/1;
    }

    @media (max-width: 499px) {
      grid-column: 1 / span 4;
      grid-row: 2;
      grid-column: 1 / -1;
      aspect-ratio: 2/1.5;
    }

    .profile-image-photo {
      width: 100%;
      height: 100%;
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

    @media (min-width: 1000px) {
      grid-column: 8 / -1;
      align-self: center;
      grid-row: 1;
    }
    @media (max-width: 999px) {
      grid-column: 1 / span 4;
      grid-row: 2;
    }
  }

  .main-lede {
    align-items: center;
    line-height: 1;
    grid-row: 1;
    text-wrap: balance;
    z-index: 2;

    @media (min-width: 1000px) {
      grid-column: 1 / span 6;
      grid-row: 1;
    }
    @media (max-width: 999px) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }
  }

  .content-area {
    grid-column: 1 / span 28;
    margin: var(--sizing-xl) 0 0;
  }

  .button-group {
    --flow-space: 1.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);

    @media (max-width: 499px) {
      flex-direction: column;
      gap: var(--sizing-lg);

      .button {
        width: 100%;
      }
    }
  }

  .recently-posted-header {
    grid-column: 1 / -1;
    grid-row: 1;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: var(--sizing-lg);
    margin-bottom: var(--sizing-xxxl);

    @media (min-width: 540px) {
      flex-direction: row;
      align-items: center;
    }
  }

  .recently-posted-articles {
    grid-column: 1 / -1;
    grid-row: 2;

    @media (min-width: 1000px) {
      grid-column: 1 / span 19;
      grid-row: 2;
    }
    @media (max-width: 999px) {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }

  .recently-posted-notes {
    grid-column: 1 / -1;
    grid-row: 3;

    @media (min-width: 1000px) {
      grid-column: 21 / -1;
      grid-row: 2;
    }
    @media (max-width: 999px) {
      grid-column: 1 / -1;
      grid-row: 3;
    }
  }
}
</style>
