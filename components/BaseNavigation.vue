<template>
  <header class="base-navigation">
    <div class="base-navigation__container">
      <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>

      <nav class="base-navigation__controls">
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
        <ThemeSwitcher />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
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
  border-bottom: 1px solid var(--color-light-border-t);

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
      gap: var(--sizing-xl);
    }

    @media (min-width: 716px) {
      background-color: var(--background-color-t);
      backdrop-filter: blur(10px);
      border: 1px solid var(--color-light-border-t);
      border-radius: var(--sizing-sm);
      padding: 1.5rem 2rem;
      max-width: var(--max-width-nav);
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
    display: grid;
    align-items: stretch;
    justify-items: end;
    gap: var(--sizing-xxl);
    grid-template-columns: repeat(3, minmax(80px, 1fr)) auto;

    @media (max-width: 650px) {
      width: 100%;
    }

    @media (min-width: 716px) {
      margin-left: auto;
      justify-content: space-between;
    }

    .theme-toggle {
      align-self: self-end;
    }
  }

  .navigation-list {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / span 3;
    gap: var(--sizing-xxl);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--size-step--1);
    text-transform: uppercase;
    font-variation-settings: 'wdth' 90;
    letter-spacing: 0.1em;

    &__item {
      margin: 0;
      padding: 0;

      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 100%;
        height: 100%;
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
</style>
