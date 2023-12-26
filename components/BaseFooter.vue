<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="copyright-area copyright-block">
        <ul class="social-icons">
          <li>
            <BaseButton
              variant="text"
              size="sm"
              color="secondary"
              href="https://github.com/mikemattner"
              class="footer-icon"
            >
              <Icon name="ri:github-fill" /> Github
            </BaseButton>
          </li>
          <li>
            <BaseButton
              variant="text"
              size="sm"
              color="secondary"
              href="https://www.linkedin.com/in/mikeamattner/"
              class="footer-icon"
            >
              <Icon name="ri:linkedin-box-fill" /> LinkedIn
            </BaseButton>
          </li>
          <li>
            <BaseButton
              variant="text"
              size="sm"
              color="secondary"
              href="https://mastodon.online/@mikemattner"
              rel="me"
              class="footer-icon"
            >
              <Icon name="ri:mastodon-fill" /> Mastodon
            </BaseButton>
          </li>
          <li>
            <BaseButton
              variant="text"
              size="sm"
              color="secondary"
              href="https://codepen.io/mikemattner/#"
              class="footer-icon"
            >
              <Icon name="ri:codepen-fill" /> Codepen
            </BaseButton>
          </li>
        </ul>
        <p class="copyright-line">&copy; 2006 &ndash; {{ theYear }} Mike Mattner</p>
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
    max-width: var(--max-width-nav);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .copyright-area {
      width: 100%;
      font-size: var(--size-step--1);
      display: flex;
      gap: var(--sizing-md);

      @media (min-width: 801px) {
        align-items: center;
        justify-content: space-between;
      }

      @media (max-width: 800px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .copyright-line {
      font-size: var(--size-step--2);
      text-indent: 0;

      @media (max-width: 800px) {
        margin-block-start: var(--sizing-lg);
      }
    }
  }

  .social-icons {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: var(--sizing-lg);
    list-style: none;
    padding: 0;
    margin: 0 auto;

    @media (min-width: 801px) {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(4, 140px);
      margin: 0;
    }

    @media (max-width: 800px) and (min-width: 451px) {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 140px);
    }

    @media (max-width: 450px) {
      width: 100%;

      li {
        width: 100%;
      }
    }
  }
  a.footer-icon {
    line-height: 1;
    text-decoration: none;
    width: 100%;

    .icon {
      transition: var(--transition-fast);
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>
