<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__hero">
        <PrimaryImage src="/images/pro-profile.jpg" alt="Portrait shot of Mike." has-overlay class="profile-image" />

        <h1 class="main-lede very-large-heading">
          <span class="introduction">Hey there.</span>
        </h1>
        <div class="home-greeting flow">
          <p class="intro">
            I&rsquo;m Mike, a
            <strong>UI designer</strong> and
            <strong>UI developer</strong>
            from Michigan, currently working at AccuLynx as a Sr. UI Engineer.
          </p>
          <p class="intro">
            In a former life I worked as a <strong>digital designer</strong> using a wide range of skills including
            video editing, the creation of motion graphics, the development of interactive CDs, et cetera.
          </p>
          <!-- <p class="intro">
            I previously worked at an advertising agency as a
            <strong>digital designer<Icon name="ri:contrast-drop-2-fill" /></strong> and manager of creatives before
            switching to a UX/UI developer role.
          </p> -->
          <!-- <p class="intro">
            In a former life I worked as a <strong>digital media<Icon name="ri:dvd-fill" /></strong> specialist using a
            wide range of skills including video editing, motion graphics, interactive CDs, et cetera.
          </p> -->
          <div class="button-group">
            <BaseButton to="/about" variant="outline" size="md" color="primary">
              <span>Read more about me</span>
            </BaseButton>
            <BaseButton to="/projects" variant="text" size="sm" color="secondary">
              <span>Projects</span> <Icon name="ri:code-box-fill" />
            </BaseButton>
            <BaseButton to="/about/uses" variant="text" size="sm" color="secondary">
              <span>Uses</span> <Icon name="ri:command-fill" />
            </BaseButton>
          </div>
        </div>
      </div>
      <hr />
      <div class="home-layout__content">
        <div class="half-posts flow">
          <h2 class="h4-heading recently-posted-header">Recently Posted</h2>
          <ArticleList :posts="posts" />
          <div class="button-group">
            <BaseButton to="/blog" variant="outline" size="md" color="primary">
              <span>Blog archives</span>
            </BaseButton>
            <BaseButton to="/notes" variant="text" size="sm" color="secondary">
              <span>Note archives</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Post } from '../types/posts';
import { Note } from '../types/notes';

useHead({
  title: 'UX/UI Designer & Developer in Michigan',
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
});

const { data } = await useAsyncData('blog-short', () => queryContent('/blog').sort({ date: -1 }).find());
const { data: noteData } = await useAsyncData('notes-short', () => queryContent('/notes').sort({ date: -1 }).find());

const posts = computed(() => {
  return data?.value?.filter((post) => !post.draft).slice(0, 2) as Post[];
});

const notes = computed(() => {
  return noteData?.value?.filter((note) => !note.draft).slice(0, 1) as Note[];
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
      gap: var(--sizing-xxl) var(--sizing-xxl);
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

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 4rem;
      margin-block-end: 8rem;
      display: grid;
    }

    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xxl) var(--sizing-xxl);
      display: grid;
    }

    @media (max-width: 715px) {
      margin-inline: auto;
      display: block;
    }
  }

  .home-greeting {
    z-index: 2;
    align-self: center;
    font-size: var(--size-step-1);
    line-height: 1.5;

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
      grid-column: 11 / -1;
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
    --flow-space: 2.5em;
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

    @media (min-width: 1053px) {
      grid-column: 1 / -1;
      grid-row: 1;
      align-self: end;
      z-index: 1;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }

    @media (max-width: 499px) {
      margin: 0;
      gap: var(--sizing-lg);
      grid-row: 1;
    }
  }

  .introduction {
    // font-size: clamp(30px, 6vw, 75px);
    // font-variation-settings: 'wdth' 85, 'wght' 900;
    // line-height: 95%;
    // letter-spacing: 0.025em;
    // color: var(--headline-font-color);
    // display: flex;
    // flex-direction: column;
    // gap: var(--sizing-lg);
    text-wrap: balance;

    @media (min-width: 1053px) {
      grid-column: 8 / -1;
      align-self: center;
    }
    @media (max-width: 1052px) {
      grid-column: 2 / span 3;
    }
    @media (max-width: 499px) {
      grid-column: 1 / span 4;
    }

    // .introduction-hello {
    //   // font-variation-settings: 'wdth' 95, 'wght' 800;
    // }

    // .introduction-name {
    //   // font-size: clamp(40px, 8vw, 110px);
    //   // font-variation-settings: 'wdth' 75, 'wght' 800;
    //   // text-transform: uppercase;
    // }

    // .introduction-salutation {
    //   font-variation-settings: 'wdth' 95, 'wght' 800;
    // }
  }

  .profile-image {
    aspect-ratio: 2 / 1.5;
    width: 100%;
    display: inline-flex;
    border-radius: 7px;
    overflow: hidden;

    @media (min-width: 1053px) {
      grid-column: 1 / span 9;
      grid-row: 1 / span 2;
      aspect-ratio: 1 / 1.75;
      border-radius: 7px 50px 7px 50px;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 1;
      grid-row: 1;
      aspect-ratio: 1;
    }
    @media (max-width: 499px) {
      grid-column: 1 / span 4;
      aspect-ratio: 2 / 1.5;
      grid-row: 2;
    }
  }

  .recently-posted-header {
    margin-block-end: var(--sizing-xxxl);

    @media (max-width: 715px) {
      margin-block-end: var(--sizing-xl);
    }
  }

  .half-posts {
    grid-column: 1 / -1;
  }
}
</style>
