<template>
  <header class="base-navigation">
    <NuxtLink to="/" class="brand-link"><BaseLogo logo-large show-label /></NuxtLink>
    <nav class="base-navigation__main">
      <ul class="navigation-list">
        <li class="navigation-list__item">
          <NuxtLink class="navigation-list__item-link" to="/">Home</NuxtLink>
        </li>
        <li class="navigation-list__item">
          <NuxtLink class="navigation-list__item-link" to="/writing">Writing</NuxtLink>
        </li>
        <!-- <li class="navigation-list__item">
          <NuxtLink class="navigation-list__item-link" to="/about">About</NuxtLink>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.base-navigation {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  grid-area: 'app-header';
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 715px) {
    padding: 1rem;
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
    margin-left: auto;
    text-transform: uppercase;
    font-variation-settings: 'wdth' 90;
    letter-spacing: 0.1em;

    .navigation-list {
      display: grid;
      grid-auto-columns: minmax(65px, 1fr);
      grid-auto-flow: column;
      gap: 0.75rem;
      margin: 0;
      padding: 0;
      list-style: none;

      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        &-link {
          color: var(--font-color);
        }
      }
    }

    .router-link-active {
      font-weight: 700;
      text-decoration-thickness: 0.4ex;
      color: var(--headline-font-color);
    }
  }
}
</style>
