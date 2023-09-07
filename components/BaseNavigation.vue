<template>
  <header class="base-navigation">
    <div class="base-navigation__container">
      <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>

      <nav class="base-navigation__main">
        <ul class="navigation-list">
          <li class="navigation-list__item" v-for="item in navigationList" :key="item.title">
            <NuxtLink
              class="navigation-list__item-link"
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
      </nav>
      <!-- <ThemeSwitcher v-if="isLargeScreen" /> -->
    </div>
  </header>
</template>

<script setup lang="ts">
// import { useMediaQuery } from '@vueuse/core';
// const isLargeScreen = useMediaQuery('(min-width: 1024px)');

const navigationList: NavigationList[] = [
  {
    title: 'Writing',
    url: '/writing',
  },
  {
    title: 'Links',
    url: '/links',
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
  border-bottom: 1px solid var(--color-primary);

  @media (min-width: 716px) {
    grid-area: navigation;
    position: sticky;
    top: 0;
    background-color: var(--background-color-t);
    backdrop-filter: blur(10px);
    z-index: 1000;
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

    @media (min-width: 511px) {
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
    }

    @media (max-width: 510px) {
      flex-direction: column;
      justify-content: center;
      gap: var(--sizing-xl);
    }
  }

  .brand-link {
    text-decoration: none;
    text-underline-offset: 0;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  &__main {
    font-size: var(--size-step--1);
    text-transform: uppercase;
    font-variation-settings: 'wdth' 90;
    letter-spacing: 0.1em;

    @media (min-width: 716px) {
      margin-left: auto;
    }

    .navigation-list {
      display: flex;
      gap: var(--sizing-xxl);
      margin: 0;
      padding: 0;
      list-style: none;

      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        @media (min-width: 511px) and (max-width: 715px) {
          justify-content: flex-end;
        }

        @media (min-width: 716px) {
          justify-content: flex-end;
        }

        &-link {
          text-decoration: none;
        }
      }
    }

    .router-link-active,
    .active-path {
      font-weight: 700;
      color: var(--color-primary);

      &:hover {
        color: var(--color-highlight);
      }
    }
  }
}
</style>
