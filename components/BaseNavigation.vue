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
    title: 'Home',
    url: '/',
  },
  {
    title: 'Writing',
    url: '/writing',
  },
  // {
  //   title: 'Links',
  //   url: '/links',
  // },
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
    }

    @media (min-width: 716px) {
      background-color: var(--background-color-t);
      backdrop-filter: blur(10px);
      border: 1px solid var(--color-light-border-t);
      padding: 1.5rem 2rem;
      max-width: var(--max-width-nav);
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
    display: grid;
    align-items: center;
    justify-items: start;
    gap: var(--sizing-xxl);
    grid-template-columns: 2fr auto;
    flex-grow: 1;

    .theme-toggle {
      align-self: self-end;
    }
  }

  .navigation-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(80px, 1fr));
    grid-column: 1;
    gap: var(--sizing-xl);
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
        width: 100%;
        height: 100%;
        text-decoration-color: transparent;
      }
    }
  }

  .router-link-active,
  .active-path {
    font-weight: 900;
    text-decoration-color: var(--color-highlight);

    &:hover {
      color: var(--color-highlight);
    }
  }
}
</style>
