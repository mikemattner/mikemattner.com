<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="sidebar-area copyright-block flow">
        <p>
          <strong>&copy; {{ theYear }} Mike Mattner</strong>
        </p>
      </div>
      <div class="content-area flow">
        <p>
          This personal site is
          <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a>. Made in Michigan and built with
          <a href="https://nuxt.com" rel="nofollow">Nuxt</a>.
        </p>
        <p class="social-icons">
          <a href="https://www.linkedin.com/in/mikeamattner/" class="footer-icon">
            <Icon name="ri:linkedin-box-fill" />
          </a>
          <a href="https://mastodon.online/@mikemattner" rel="me" class="footer-icon">
            <Icon name="ri:mastodon-fill" />
          </a>
          <a href="https://codepen.io/mikemattner/#" class="footer-icon">
            <Icon name="ri:twitter-fill" />
          </a>
          <a href="https://github.com/mikemattner" class="footer-icon">
            <Icon name="ri:github-fill" />
          </a>
        </p>
        <!-- <p class="social-icons">
          <a href="https://mikemattner.com/feed" title="RSS Feed" class="footer-icon"><Icon name="ri:rss-fill" /></a>
          <a href="https://github.com/mikemattner/mikemattner.com" class="footer-icon" title="View GitHub Project">
            <Icon name="ri:github-fill" />
          </a>
        </p> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const date = ref<Date>(new Date());
const theYear = computed<string>(() => {
  return date.value.getFullYear().toString();
});
</script>

<style lang="scss" scoped>
.base-footer {
  grid-area: 'app-footer';
  font-size: var(--size-step--1);
  padding: 2rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 715px) {
    padding: 1rem;
  }

  &__layout {
    max-width: var(--max-width);
    margin-inline: auto;

    @media (min-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 766px) {
      .copyright-block {
        margin-block-end: 1.5rem;
      }
    }

    .content-area {
      grid-column: 2 / span 3;
    }

    .sidebar-area {
      grid-column: 1;
    }

    hr {
      grid-column: 1 / span 4;
      margin-bottom: 1.5rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  a.footer-icon {
    color: var(--color-primary);
    font-size: var(--size-step-1);

    &:hover {
      color: var(--headline-font-color);
    }
  }
}
</style>
