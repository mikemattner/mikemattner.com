<template>
  <footer class="base-footer">
    <div class="base-footer__layout">
      <div class="base-footer__shameless-branding">
        <h2 class="small-heading">Want to say hello?</h2>
        <p>
          I don&rsquo;t do freelance work anymore, but connect with me on social or reach out to me@mikemattner.com.
        </p>
      </div>
      <nav class="base-footer__navigation">
        <h2 class="small-heading">Explore</h2>
        <ul class="navigation-list">
          <li v-for="item in navigationList" :key="item.title">
            <BaseButton class="navigation-list__item-link" variant="link" size="md" color="secondary" :to="item.url">
              {{ item.title }}
            </BaseButton>
          </li>
        </ul>
      </nav>
      <div class="base-footer__copyright">
        <p>&copy; {{ theYear }} Mike Mattner. All rights reserved. A personal website proudly made in Michigan.</p>
      </div>
      <div class="base-footer__social">
        <ul class="social-icons">
          <li v-for="item in socialList" :key="item.title">
            <BaseButton class="footer-icon" variant="link" size="xs" color="secondary" :href="item.url" :rel="item.rel">
              <Icon :name="item.icon" /> {{ item.title }}
            </BaseButton>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navigationList } from '@/data/navigationList';
import { socialList } from '~/data/social';

const date = ref<Date>(new Date());
const theYear = computed<string>(() => {
  return `2006 – ${date.value.getFullYear().toString()}`;
});
</script>

<style lang="scss" scoped>
.base-footer {
  background-color: var(--background-border-color);
  position: relative;
  font-family: var(--sans-font-family);

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
    gap: var(--sizing-xl);
    grid-template-columns: 1fr 1fr;
    align-items: start;
    position: relative;
    z-index: 2;

    @media (max-width: 875px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 597px) {
      grid-template-columns: 1fr;
    }
  }

  &__shameless-branding {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-lg);
    grid-column: 1;
    grid-row: 1;

    p {
      margin: 0;
    }

    @media (max-width: 597px) {
      grid-column: 1 / -1;
      grid-row: 1;
      padding-bottom: var(--sizing-lg);
    }
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-lg);
    grid-column: 2;
    grid-row: 1;

    @media (max-width: 875px) {
      grid-column: 1;
      grid-row: 2;
      margin-top: var(--sizing-xxl);
    }

    @media (max-width: 597px) {
      grid-column: 1;
      grid-row: 2;
    }
  }

  &__copyright {
    width: 100%;
    font-size: var(--size-step--1);
    grid-column: 1 / -1;
    grid-row: 2;
    align-self: end;
    margin-top: var(--sizing-xxxl);

    @media (max-width: 875px) {
      grid-column: 1 / -1;
      grid-row: 4;
    }

    @media (max-width: 597px) {
      grid-column: 1 / -1;
      grid-row: 4;
    }
  }

  &__social {
    display: flex;
    flex-direction: column;
    gap: var(--sizing-lg);
    grid-column: 1 / -1;
    grid-row: 3;
    font-size: var(--size-step--2);

    @media (max-width: 875px) {
      grid-column: 1;
      grid-row: 3;
    }

    @media (max-width: 597px) {
      grid-column: 1;
      grid-row: 3;
    }
  }

  .navigation-list {
    display: flex;
    flex-wrap: wrap;
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
    flex-wrap: wrap;
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
