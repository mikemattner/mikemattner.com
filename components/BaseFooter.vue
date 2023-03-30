<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="copyright-area copyright-block flow">
        <p>
          This personal site is
          <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a>. Fork it and modify it for yourself,
          or just browse the code. Made in Michigan and built with <a href="https://nuxt.com" rel="nofollow">Nuxt</a>.
        </p>
        <p class="copyright-line">Content copyright &copy; 2006 &ndash; {{ theYear }} Mike Mattner.</p>
      </div>
      <div class="meta-area flow">
        <!-- <ThemeSwitcher /> -->
        <ul class="social-icons">
          <li>
            <a href="https://github.com/mikemattner" class="footer-icon">
              <Icon name="ri:github-fill" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mikeamattner/" class="footer-icon">
              <Icon name="ri:linkedin-box-fill" />
            </a>
          </li>
          <li>
            <a href="https://mastodon.online/@mikemattner" rel="me" class="footer-icon">
              <Icon name="ri:mastodon-fill" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/mikemattner/#" class="footer-icon">
              <Icon name="ri:twitter-fill" />
            </a>
          </li>
          <!-- <li>
            <a href="https://mikemattner.com/feed" title="RSS Feed" class="footer-icon">
              <Icon name="ri:rss-fill" />
            </a>
          </li> -->
        </ul>
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
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 766px) {
      .copyright-block {
        margin-block-end: 1.5rem;
      }
    }

    .copyright-area {
      max-width: 85ch;
      grid-column: 1;
      @media (min-width: 767px) {
        display: flex;
        flex-direction: column;
      }

      .copyright-line {
        font-size: var(--size-step--1);
      }
    }

    .meta-area {
      grid-column: 2;
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      @media (min-width: 767px) {
        justify-content: flex-end;
      }
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a.footer-icon {
    color: var(--color-middle-gray);
    font-size: var(--size-step-1);
    line-height: 1;

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
