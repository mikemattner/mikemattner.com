<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="base-footer__copyright">
        <p>&copy; {{ theYear }} Mike Mattner</p>
      </div>
      <ul class="navigation-list">
        <li v-for="item in navigationList" :key="item.title">
          <BaseButton class="navigation-list__item-link" variant="link" size="sm" color="secondary" :to="item.url">
            {{ item.title }}
          </BaseButton>
        </li>
      </ul>
      <ul class="social-icons">
        <li>
          <BaseButton
            class="footer-icon"
            variant="link"
            size="sm"
            color="secondary"
            href="https://github.com/mikemattner"
          >
            <Icon name="ri:github-fill" /> Github
          </BaseButton>
        </li>
        <li>
          <BaseButton
            class="footer-icon"
            variant="link"
            size="sm"
            color="secondary"
            href="https://codepen.io/mikemattner/#"
          >
            <Icon name="ri:codepen-fill" /> Codepen
          </BaseButton>
        </li>
        <li>
          <BaseButton
            class="footer-icon"
            variant="link"
            size="sm"
            color="secondary"
            href="https://mastodon.online/@mikemattner"
            rel="me"
          >
            <Icon name="ri:mastodon-fill" /> Mastodon
          </BaseButton>
        </li>
        <li>
          <BaseButton
            class="footer-icon"
            variant="link"
            size="sm"
            color="secondary"
            href="https://www.linkedin.com/in/mikeamattner/"
          >
            <Icon name="ri:linkedin-box-fill" /> LinkedIn
          </BaseButton>
        </li>
      </ul>
      <div class="base-footer__sub-controls">
        <RssButton />
        <ThemeSwitcher />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navigationList } from '@/data/navigationList';

const date = ref<Date>(new Date());
const theYear = computed<string>(() => {
  return date.value.getFullYear().toString();
});
</script>

<style lang="scss" scoped>
.base-footer {
  border-top: 1px solid var(--border-color);

  @media (min-width: 716px) {
    grid-area: footer;
    padding: 2rem var(--sizing-xl) 3rem;
  }

  @media (max-width: 715px) {
    padding: 2rem 1rem;
  }

  &__layout {
    max-width: var(--max-width);
    margin-inline: auto;
    display: grid;
    gap: var(--sizing-md);
    grid-template-columns: 250px 200px 200px 1fr;
    align-items: start;

    @media (max-width: 875px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto 1fr;
      gap: var(--sizing-lg) var(--sizing-md);
    }

    @media (max-width: 525px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: var(--sizing-lg) var(--sizing-md);
    }
  }

  &__copyright {
    width: 100%;
    font-size: var(--size-step--1);
    line-height: 1;

    @media (max-width: 875px) {
      grid-column: 3;
      grid-row: 1;
      text-align: right;
    }

    @media (max-width: 525px) {
      padding-top: var(--sizing-lg);
      grid-column: 1 / -1;
      grid-row: 2;
      text-align: center;
    }
  }

  &__sub-controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--sizing-md);

    @media (max-width: 875px) {
      grid-column: 3;
      grid-row: 2;
    }

    @media (max-width: 525px) {
      grid-column: 1 / -1;
      grid-row: 3;
      justify-content: center;
    }
  }

  .navigation-list {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: var(--sizing-lg);
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;

      a.navigation-list__item-link {
        text-decoration: none;
      }
    }

    @media (max-width: 875px) {
      grid-column: 1;
      grid-row: 1 / span 2;
    }

    @media (max-width: 525px) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  .social-icons {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: var(--sizing-lg);
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;

      a.footer-icon {
        line-height: 1;
        text-decoration: none;

        .icon {
          transition: var(--transition-fast);
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }

    @media (max-width: 875px) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }

    @media (max-width: 525px) {
      grid-column: 2;
      grid-row: 1;
    }
  }
}
</style>
