<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="copyright-area copyright-block flow">
        <ul class="social-icons">
          <li>
            <BaseButton
              variant="outline"
              size="md"
              color="primary"
              href="https://github.com/mikemattner"
              class="footer-icon"
            >
              <Icon name="ri:github-fill" /> Github
            </BaseButton>
          </li>
          <li>
            <BaseButton
              variant="outline"
              size="md"
              color="primary"
              href="https://www.linkedin.com/in/mikeamattner/"
              class="footer-icon"
            >
              <Icon name="ri:linkedin-box-fill" /> LinkedIn
            </BaseButton>
          </li>
          <li>
            <BaseButton
              variant="outline"
              size="md"
              color="primary"
              href="https://mastodon.online/@mikemattner"
              rel="me"
              class="footer-icon"
            >
              <Icon name="ri:mastodon-fill" /> Mastodon
            </BaseButton>
          </li>
          <li>
            <a href="https://codepen.io/mikemattner/#" class="footer-icon"> <Icon name="ri:codepen-fill" /> Codepen </a>
          </li>
          <!-- <li>
            <a href="https://mikemattner.com/feed" title="RSS Feed" class="footer-icon">
              <Icon name="ri:rss-fill" />
            </a>
          </li> -->
        </ul>
        <p class="copyright-line">Copyright &copy; 2006 &ndash; {{ theYear }} Mike Mattner.</p>
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
  padding: 2rem;
  border-top: 1px solid var(--border-color);

  @media (min-width: 716px) {
    grid-area: footer;
  }

  @media (max-width: 715px) {
    padding: 1rem;
  }

  &__layout {
    max-width: var(--max-width);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .copyright-area {
      max-width: 85ch;
      width: 100%;
      font-size: var(--size-step--1);
      display: flex;
      flex-direction: column;
      gap: var(--sizing-md);

      .theme-switcher {
        display: flex;
        align-items: center;
        gap: var(--sizing-md);
      }
    }

    .copyright-line {
      font-size: var(--size-step--2);
      margin-block-start: 1.75rem;
      text-indent: 0;
    }
  }

  .social-icons {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 716px) {
      flex-direction: row;
      align-items: center;
    }

    li {
      width: 100%;
    }
  }
  a.footer-icon {
    line-height: 1;
    font-size: var(--size-step--1);
    text-decoration: none;
    width: 100%;

    .icon {
      font-size: var(--size-step-1);
      // color: var(--color-middle-gray-t);
      transition: var(--transition-fast);
    }

    &:hover {
      // color: var(--color-primary);

      .icon {
        // color: var(--color-primary);
      }
    }
  }
}
</style>
