<template>
  <main class="home-page">
    <div class="home-layout">
      <h1 class="intro-title">
        <small>Mike is a</small>
        <span class="intro-title__design">Designer</span>
        <span class="intro-title__ampersand">&amp;</span>
        <span class="intro-title__development">Developer</span>
        <small>from Michigan</small>
      </h1>
      <div class="profile-image-wide">
        <PrimaryImage
          src="/images/about-profile.jpg"
          alt="Portrait shot of Mike."
          has-overlay
          class="profile-image-photo"
        />
      </div>
      <div class="home-layout__hero">
        <h2 class="main-lede h3-heading">Introduction</h2>

        <div class="home-greeting flow">
          <p>
            I currently work as a Sr. UI Engineer, but in a former life I worked as a digital designer. That was
            basically a catch-all for web design and development, video editing, motion graphics, print design, et
            cetera.
          </p>
          <p>
            These days I create and design in code and think of myself as a
            <a href="https://www.trysmudford.com/blog/i-think-im-a-design-engineer/">design engineer</a> more than
            anything else.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="solid" size="md" color="primary">
              <span>Read More</span>
            </BaseButton>
            <BaseButton to="/about/uses" variant="text" size="sm" color="secondary">
              <Icon name="ri:apps-line" />
              <span>Mike Uses</span>
            </BaseButton>
            <BaseButton to="/about/resume" variant="text" size="sm" color="secondary">
              <Icon name="ri:file-text-line" />
              <span>The Resume</span>
            </BaseButton>
          </div>
        </div>
      </div>
      <hr />
      <div class="home-layout__content">
        <h2 class="h4-heading recently-posted-header">Recently Posted</h2>
        <ArticleList class="recently-posted-articles" :posts="posts" />
        <div class="button-group recently-posted-archives">
          <BaseButton to="/blog" variant="solid" size="sm" color="primary">
            <span>Blog Archives</span>
          </BaseButton>
          <BaseButton to="/notes" variant="outline" size="sm" color="secondary">
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
  return data?.value?.filter((post) => !post.draft).slice(0, 2) as Post[];
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
      margin-block-start: 4rem;
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

  .intro-title {
    text-align: center;
    line-height: 1;
    grid-row: 1;
    text-wrap: balance;
    display: flex;
    flex-direction: column;
    margin: var(--sizing-xxxxl) 0;

    &__design {
      font-size: var(--size-step-8);
      z-index: 1;
      letter-spacing: -0.025em;
      text-shadow: 0 0 var(--sizing-xl) hsla(var(--color-blue-hsl), 0.5);
      font-variation-settings: 'wdth' 75, 'wght' 800;
      text-transform: uppercase;

      @media (max-width: 893px) {
        font-size: var(--size-step-7);
      }
    }

    &__ampersand {
      font-size: var(--size-step-6);
      z-index: 2;
      margin-top: -0.875em;
      color: var(--color-blue);
      text-shadow: 0 0 var(--sizing-xl) hsla(var(--color-blue-hsl), 0.05);
      font-variation-settings: 'wdth' 100, 'wght' 800;
      background: var(--gradient-1-filled);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 893px) {
        font-size: var(--size-step-5);
      }
    }

    &__development {
      font-size: var(--size-step-8);
      z-index: 3;
      letter-spacing: -0.025em;
      margin-top: -0.3em;
      text-shadow: 0 0 var(--sizing-xl) hsla(var(--color-blue-hsl), 0.5);
      font-variation-settings: 'wdth' 75, 'wght' 800;
      text-transform: uppercase;

      @media (max-width: 893px) {
        font-size: var(--size-step-7);
      }
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
      grid-column: 13 / span 15;
      align-self: center;
      grid-row: 1;
    }
    @media (max-width: 1052px) {
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

    @media (min-width: 1053px) {
      grid-column: 1 / span 10;
      grid-row: 1;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }
  }

  .profile-image {
    aspect-ratio: 1 / 0.75;
    border-radius: var(--border-radius);
    overflow: hidden;
    z-index: 1;

    @media (min-width: 1053px) {
      grid-column: 18 / span 11;
      aspect-ratio: 1 / 1.125;
      grid-row: 2;
    }

    @media (max-width: 1052px) {
      grid-column: 1 / -1;
      align-self: self-start;
      aspect-ratio: 1.5 / 1;
      grid-row: 1;
    }

    @media (max-width: 499px) {
      grid-column: 1 / span 4;
      grid-row: 1;
      aspect-ratio: 1.25 / 1;
    }

    .profile-image-photo {
      width: 100%;
      height: 100%;
    }
  }

  .profile-image-wide {
    aspect-ratio: 1 / 0.75;
    border-radius: var(--border-radius);
    overflow: hidden;
    z-index: 1;
    max-width: var(--max-width);
    margin-inline: auto;

    @media (min-width: 1053px) {
      grid-column: 18 / span 11;
      aspect-ratio: 1 / 0.375;
      grid-row: 2;
    }

    @media (max-width: 1052px) {
      grid-column: 1 / -1;
      align-self: self-start;
      aspect-ratio: 1.5 / 1;
      grid-row: 1;
    }

    @media (max-width: 499px) {
      grid-column: 1 / span 4;
      grid-row: 1;
      aspect-ratio: 1.25 / 1;
    }

    .profile-image-photo {
      width: 100%;
      height: 100%;
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

  .recently-posted-header {
    grid-column: 1 / -1;
    grid-row: 1;
    margin-block-end: var(--sizing-xxxl);

    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .recently-posted-articles {
    grid-column: 1 / -1;
    grid-row: 2;

    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
  }

  .recently-posted-archives {
    grid-column: 1 / -1;
    grid-row: 3;
    margin-top: var(--sizing-xxl);

    @media (min-width: 768px) {
      grid-row: 3;
      grid-column: 1 / -1;
      margin-top: var(--sizing-xxxl);
      display: flex;
    }
  }

  .half-posts {
    grid-column: 1 / -1;
  }
}
</style>
