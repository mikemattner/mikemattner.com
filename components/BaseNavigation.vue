<template>
  <header class="base-navigation">
    <div class="base-navigation__container">
      <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>

      <nav class="base-navigation__controls">
        <ul class="navigation-list">
          <li class="navigation-list__item" v-for="item in navigationList" :key="item.title">
            <NuxtLink
              class="navigation-list__item-link"
              :class="{ 'active-path': pathIsWriting && item.title === 'Writing' }"
              variant="text"
              size="xs"
              color="secondary"
              active-class="active-path"
              :to="item.url"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <div class="base-navigation__sub-controls">
          <RssButton />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const pathIsWriting = computed<boolean>(() => route.matched[0].name === 'writing-slug');

const navigationList: NavigationList[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'About',
    url: '/about',
  },
];
</script>

<style lang="scss" scoped>
.base-navigation {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-light-border-t);
  mix-blend-mode: difference;

  @media (min-width: 716px) {
    grid-area: navigation;
    position: sticky;
    top: var(--sizing-md);
    z-index: 1000;
    padding: var(--sizing-md);
    border: none;
  }

  @media (max-width: 715px) {
    padding: 1rem;
    flex-direction: column;
  }

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-inline: auto;
    gap: var(--sizing-xl);

    @media (min-width: 651px) {
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
    }

    @media (max-width: 650px) {
      flex-direction: column;
      justify-content: center;
    }

    @media (min-width: 716px) {
      // background-color: var(--background-color-t);
      // backdrop-filter: blur(10px);
      // border: 1px solid var(--color-light-border-t);
      // padding: 1rem;
      max-width: var(--max-width);
      gap: var(--sizing-xxxl);
    }
  }

  .brand-link {
    text-decoration: none;
    text-underline-offset: 0;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  &__controls {
    // display: grid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-xxl);
    grid-template-columns: 2fr auto;
    flex-grow: 1;

    @media (max-width: 650px) {
      width: 100%;
    }

    // .theme-toggle {
    //   align-self: self-end;
    // }
  }

  &__sub-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation-list {
    display: flex;
    align-items: center;
    gap: var(--sizing-xxl);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--size-step--1);
    font-family: var(--code-font-family);

    &__item {
      margin: 0;
      padding: 0;

      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration-color: transparent;
        padding: 0.5rem 0.25rem;
        color: var(--color-light);

        &:hover {
          text-decoration-color: var(--color-light);
        }
      }
    }
  }

  .router-link-active,
  .active-path {
    text-decoration-color: var(--color-light);
  }
}
</style>
