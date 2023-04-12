<template>
  <header class="base-navigation">
    <div class="base-navigation__container">
      <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>
      <nav class="base-navigation__main">
        <ul class="navigation-list">
          <li class="navigation-list__item">
            <NuxtLink class="navigation-list__item-link" active-class="active-path" to="/">Home</NuxtLink>
          </li>
          <li class="navigation-list__item">
            <NuxtLink class="navigation-list__item-link" active-class="active-path" to="/writing">Writing</NuxtLink>
          </li>
          <li class="navigation-list__item">
            <NuxtLink class="navigation-list__item-link" to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.base-navigation {
  padding: 1.5rem 2rem;
  // border-bottom: 1px solid var(--border-color);

  @media (max-width: 715px) {
    padding: 1rem;
  }

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: var(--max-width);
    margin-inline: auto;

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

    @media (min-width: 511px) {
      margin-left: auto;
      // font-size: var(--size-step--2);
    }

    .navigation-list {
      display: grid;
      grid-auto-columns: minmax(65px, 1fr);
      grid-auto-flow: column;
      gap: 0.75rem;
      margin: 0;
      padding: 0;
      list-style: none;

      @media (min-width: 511px) {
        grid-auto-flow: row;
      }

      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        @media (min-width: 511px) {
          justify-content: flex-end;
        }

        &-link {
          color: var(--font-color);
        }
      }
    }

    .router-link-active,
    .active-path {
      font-weight: 700;
      color: var(--headline-font-color);
    }
  }
}
</style>
