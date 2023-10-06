<template>
  <main class="home-page">
    <div class="home-layout">
      <div class="home-layout__hero">
        <h1 class="main-lede">
          <ProfileImage image="/images/pro-profile.jpg" is-blob class="profile-image" />
          <span class="introduction">Hello! My name is Mike Mattner.</span>
        </h1>
        <div class="home-greeting flow">
          <p class="intro">
            I&rsquo;m a
            <strong>UI designer<Icon name="ri:layout-bottom-2-line" /></strong> &amp;
            <strong>developer<Icon name="ri:terminal-box-line" /></strong>
            from Michigan, currently working at AccuLynx as a Sr. UI Engineer.
          </p>
          <p class="intro">
            I previously worked at an advertising agency as a
            <strong>digital designer<Icon name="ri:brush-line" /></strong> and manager of creatives before switching to
            a UX/UI developer role.
          </p>
          <p class="intro">
            In a former life I worked with the entire gamut of skills in what was once called
            <strong>digital media<Icon name="ri:flashlight-line" /></strong> including video editing, motion graphics,
            interactive CDs, <strong>et cetera <Icon name="ri:loop-right-line" /></strong>.
          </p>
          <div class="button-group">
            <BaseButton to="/about" variant="link" size="md" color="primary">
              <span>Read more ( if you feel like it )</span> <Icon name="ri:arrow-right-line" />
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
              <span>Read the Archives</span> <Icon name="ri:arrow-right-line" />
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
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
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

    svg {
      fill: var(--color-highlight);
      color: var(--color-highlight);
      display: inline-flex;
      width: 1em;
      height: 1em;
      vertical-align: middle;
      margin: -0.1em 0.2em 0 0.1em;
      transform: scale(1.15);
      transition: var(--transition);
    }

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
    display: grid;
    grid-template-columns: subgrid;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: var(--sizing-xxl);
      gap: var(--sizing-lg);
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
    }
    @media (max-width: 1052px) {
      grid-column: 2 / span 3;
    }
    @media (max-width: 515px) {
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
    }
    @media (max-width: 1052px) {
      grid-column: 1 / span 1;
    }
    @media (max-width: 515px) {
      grid-column: 1 / span 4;
    }
  }
}
</style>
