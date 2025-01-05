<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="base-footer__copyright">
        <p>&copy; {{ theYear }} Mike Mattner. All rights reserved. A personal website proudly made in Michigan.</p>
      </div>
      <nav class="base-footer__navigation">
        <h2 class="small-text">Explore</h2>
        <ul class="navigation-list">
          <li v-for="item in navigationList" :key="item.title">
            <BaseButton class="navigation-list__item-link" variant="link" size="sm" color="secondary" :to="item.url">
              {{ item.title }}
            </BaseButton>
          </li>
        </ul>
      </nav>
      <div class="base-footer__social">
        <h2 class="small-text">Connect</h2>
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
              href="https://www.linkedin.com/in/mikeamattner/"
            >
              <Icon name="ri:linkedin-box-fill" /> LinkedIn
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
              href="https://bsky.app/profile/mikemattner.com"
              rel="me"
            >
              <Icon name="ri:bluesky-fill" /> Bluesky
            </BaseButton>
          </li>
          <li>
            <BaseButton class="footer-icon" variant="link" size="sm" color="secondary" href="/rss.xml">
              <Icon name="ri:rss-fill" /> RSS Feed
            </BaseButton>
          </li>
        </ul>
      </div>
      <div class="shameless-branding">
        <p>Want to say hello?</p>
        <p>Reach me at me @ mikemattner.com</p>
      </div>
      <!-- <div class="base-footer__sub-controls">
        <div class="controls">
          <ThemeSwitcher />
        </div>
      </div> -->
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
  background-color: var(--background-border-color);
  background-image: var(--topographic-pattern);
  background-size: 600px;
  background-position: top;
  background-repeat: repeat-x;
  position: relative;
  font-family: var(--sans-font-family);

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, hsla(var(--footer-gradient), 50%) 0%, hsla(var(--footer-gradient), 0%) 100%);
    z-index: 1;
  }

  @media (min-width: 716px) {
    grid-area: footer;
    padding: 2.5rem var(--sizing-xl) 3rem;
  }

  @media (max-width: 715px) {
    padding: 2rem 1rem;
  }

  &__layout {
    max-width: var(--max-width);
    margin-inline: auto;
    display: grid;
    gap: var(--sizing-md);
    grid-template-columns: 1fr 250px 200px;
    align-items: start;
    position: relative;
    z-index: 2;

    @media (max-width: 875px) {
      grid-template-columns: 1fr 150px 120px;
      grid-template-rows: auto 1fr;
      gap: var(--sizing-lg) var(--sizing-md);
    }

    @media (max-width: 597px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: var(--sizing-lg) var(--sizing-md);
    }
  }

  .shameless-branding {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-lg);
    font-size: var(--size-step-1);
    grid-column: 1;
    grid-row: 1;
    line-height: 1;

    p {
      margin: 0;
    }

    @media (max-width: 597px) {
      grid-column: 1 / -1;
      grid-row: 1;
      padding-bottom: var(--sizing-lg);
    }
  }

  &__copyright {
    width: 100%;
    font-size: var(--size-step--2);
    margin-top: var(--sizing-xl);

    grid-column: 1 / -1;
    grid-row: 2;
    align-self: end;

    @media (max-width: 875px) {
      grid-column: 1 / -1;
      grid-row: 2;
    }

    @media (max-width: 597px) {
      margin-top: var(--sizing-lg);
      grid-column: 1 / -1;
      grid-row: 3;
    }
  }

  &__sub-controls {
    display: flex;
    align-items: center;
    gap: var(--sizing-xl);
    grid-column: 1 / -1;
    grid-row: 3;

    // background-color: var(--block-quote-bg);
    // padding: var(--sizing-md) var(--sizing-lg);
    // border-radius: var(--border-radius);

    @media (max-width: 597px) {
      grid-row: 4;
    }
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-lg);
    grid-column: 2;
    grid-row: 1 / span 2;

    @media (max-width: 875px) {
      grid-column: 2;
      grid-row: 1;
    }

    @media (max-width: 597px) {
      grid-column: 1;
      grid-row: 2;
    }
  }

  &__social {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-lg);
    grid-column: 3;
    grid-row: 1 / span 2;

    @media (max-width: 875px) {
      grid-column: 3;
      grid-row: 1;
    }

    @media (max-width: 597px) {
      grid-column: 2;
      grid-row: 2;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);
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
      height: 1.25rem;

      a.navigation-list__item-link {
        text-decoration: none;
      }

      .icon {
        transition: var(--transition-fast);
        width: 1.25rem;
        height: 1.25rem;
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
    margin: 0;

    li {
      display: flex;
      align-items: center;
      height: 1.25rem;

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
  }
}
</style>
