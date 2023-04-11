<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="copyright-area copyright-block flow">
        <h2 class="eyebrow">About This Site</h2>
        <p>
          Thanks for stopping by. I'm Mike, a creative developer from the beautiful state of Michigan. This personal
          site is <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a>. Fork it and modify it for
          yourself, or just browse the code. Made in Michigan and built with
          <a href="https://nuxt.com" rel="nofollow">Nuxt</a>.
        </p>
        <div class="copyright-line">Content copyright &copy; 2006 &ndash; {{ theYear }} Mike Mattner.</div>
        <!-- <ThemeSwitcher /> -->
      </div>
      <div class="meta-area flow">
        <h2 class="eyebrow">Elsewhere</h2>
        <ul class="social-icons">
          <li>
            <a href="https://github.com/mikemattner" class="footer-icon"> <Icon name="ri:github-fill" /> Github </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mikeamattner/" class="footer-icon">
              <Icon name="ri:linkedin-box-fill" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://mastodon.online/@mikemattner" rel="me" class="footer-icon">
              <Icon name="ri:mastodon-fill" /> Mastodon
            </a>
          </li>
          <li>
            <a href="https://codepen.io/mikemattner/#" class="footer-icon"> <Icon name="ri:twitter-fill" /> Twitter </a>
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
  padding: 2rem 0;
  border-top: 1px solid var(--border-color);

  @media (max-width: 1052px) {
    padding: 2rem;
  }

  @media (max-width: 715px) {
    padding: 1rem;
  }

  &__layout {
    max-width: var(--max-width);
    margin-inline: auto;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--sizing-xxl);
    }

    @media (min-width: 1053px) {
      grid-template-columns: repeat(28, 1fr);
      gap: 0;
    }

    @media (max-width: 766px) {
      .meta-area {
        margin-block-end: 1.5rem;
      }
    }

    .copyright-area {
      max-width: 85ch;

      @media (min-width: 767px) {
        grid-column: 1;
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 1053px) {
        grid-column: 2 / span 14;
      }

      .copyright-line {
        font-size: var(--size-step--1);
        margin-block-start: 1.75rem;
      }
    }

    .meta-area {
      // display: flex;
      // align-items: flex-start;
      // flex-direction: column;
      // gap: 1rem;

      @media (min-width: 767px) {
        grid-column: 2;
      }

      @media (min-width: 1053px) {
        grid-column: 18 / -2;
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
    line-height: 1;
    font-size: var(--size-step--1);

    .icon {
      font-size: var(--size-step-1);
      color: var(--color-middle-gray);
    }

    &:hover {
      .icon {
        color: var(--color-primary);
      }
    }
  }
}
</style>
