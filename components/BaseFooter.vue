<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <hr />
      <div class="sidebar-area flow">
        <p>
          <strong>&copy; {{ theYear }} Mike Mattner</strong>
        </p>
      </div>
      <div class="content-area flow">
        <p>
          @mikemattner on
          <a href="https://www.linkedin.com/in/mikeamattner/">LinkedIn</a>,
          <a href="https://mastodon.online/@mikemattner" rel="me">Mastodon</a>,
          <a href="https://codepen.io/mikemattner/#">Codepen</a>, &amp;
          <a href="https://github.com/mikemattner">GitHub</a>. This personal site is
          <a href="https://github.com/mikemattner/mikemattner.com">open sourced</a>. Made in Michigan and built with
          <a href="https://nuxt.com" rel="nofollow">Nuxt</a>.
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
const date = ref<Date>(new Date())
const theYear = computed<string>(() => {
  return date.value.getFullYear().toString()
})
</script>

<style lang="scss" scoped>
.base-footer {
  grid-area: 'app-footer';
  font-size: var(--size-step--1);
  padding: 2rem;

  &__layout {
    max-width: 72.5rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

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
    font-size: var(--size-step-0);

    &:hover {
      color: var(--headline-font-color);
    }
  }
}
</style>
