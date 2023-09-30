<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__hero">
        <h1 class="main-lede">
          <ProfileImage image="/images/mike-apples.webp" is-blob class="profile-image" />
          <span class="introduction">Hello! My name is <NuxtLink to="/about">Mike Mattner</NuxtLink>.</span>
        </h1>
        <div class="home-greeting flow">
          <p class="intro">
            I&rsquo;m a <strong>UI designer &amp; developer</strong> from Michigan. I am currently working at AccuLynx
            as a Sr. UI Engineer.
          </p>
          <p class="intro">
            I&rsquo;ve previously worked as <strong>digital designer</strong> and manager of creatives, as well as a
            UX/UI developer at an advertising agency.
          </p>
          <p class="intro">
            In a former life I worked within the entire gamut of skills in what was once called digital design including
            video editing, motion graphics, and more traditional graphic design. That set of skills is now a bit
            atrophied.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="link" size="md" color="primary">
              <span>Read more about me</span> <Icon name="ri:arrow-right-line" />
            </BaseButton>
          </div>
        </div>
      </div>
      <div class="home-layout__content">
        <div class="sidebar-area flow">
          <h2 class="bar-right">On the Blog</h2>
        </div>
        <div class="content-area flow">
          <ArticleList :posts="posts" />
          <div class="button-group">
            <BaseButton to="/blog" variant="outline" size="md" color="primary">
              <span>Archives</span> <Icon name="ri:arrow-right-line" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'UX/UI Designer & Developer in Michigan',
});

const { data } = await useAsyncData('blog-short', () => queryContent('/blog').sort({ date: -1 }).find());

const posts = computed(() => {
  return data?.value?.filter((post) => !post.draft).slice(0, 3);
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
    margin-block-start: 4rem;
    margin-block-end: 4rem;
    max-width: var(--max-width);
    margin-inline: auto;

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      margin-block-start: 8rem;
      margin-block-end: 8rem;
      gap: var(--sizing-xxl) 0;
    }
    @media (max-width: 1052px) {
      grid-template-columns: repeat(4, 1fr);
      gap: var(--sizing-xxl) var(--sizing-xxl);
    }

    @media (max-width: 715px) {
      margin-inline: auto;
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

    @media (max-width: 715px) {
      margin-inline: auto;
    }
  }

  .home-greeting {
    z-index: 2;
    align-self: center;
    font-size: var(--size-step-1);
    line-height: 1.5;

    p {
      --flow-space: 0.75em;
      max-width: 65ch;
    }

    @media (min-width: 1053px) {
      grid-column: 3 / -3;
      align-self: center;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }

    .intro {
      letter-spacing: 0.01em;
      font-weight: 100;
      font-size: var(--size-step-2);
      line-height: 1.3;
    }
  }

  .content-area {
    grid-column: 1 / span 28;
    margin: var(--sizing-xxxl) 0 0;
  }

  .sidebar-area {
    grid-column: 1 / span 28;
  }

  .button-group {
    --flow-space: 2.5em;
    display: flex;
    align-items: center;
    gap: var(--sizing-md);
  }

  .main-lede {
    font-variation-settings: 'wdth' 100;
    font-size: clamp(40px, 8vw, 95px);
    line-height: 1;
    letter-spacing: 0.025em;
    color: var(--headline-font-color);
    align-items: center;
    gap: var(--sizing-lg);
    display: grid;
    grid-template-columns: subgrid;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: var(--sizing-xxl);
    }

    @media (min-width: 1053px) {
      grid-column: 1 / -1;
      align-self: center;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 4;
    }
  }

  .introduction {
    @media (min-width: 1053px) {
      grid-column: 8 / -1;
      align-self: center;
      grid-row: 1 / span 4;
    }
    @media (max-width: 1052px) {
      grid-column: 2 / span 3;
    }
    @media (max-width: 715px) {
      grid-column: 1 / span 4;
    }
  }
  .profile-image {
    aspect-ratio: 1;
    width: 100%;
    display: inline-flex;

    @media (min-width: 1053px) {
      grid-column: 1 / span 7;
      align-self: center;
      grid-row: 1 / span 4;
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 1;
    }
    @media (max-width: 715px) {
      grid-column: 1 / span 4;
    }
  }
}
</style>
