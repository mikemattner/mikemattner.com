<template>
  <header class="base-navigation">
    <div class="base-navigation__container">
      <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>
      <BaseNavigationMenu />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.base-navigation {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border-color);
  font-family: var(--sans-font-family);

  @media (max-width: 715px) {
    padding: 1rem;
    flex-direction: column;
    background: var(--color-menu-bg);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  @media (min-width: 716px) {
    grid-area: navigation;
    top: var(--sizing-md);
    z-index: 1000;
    padding: var(--sizing-xl);
    border: none;
  }

  @media (min-width: 90rem) {
    padding: var(--sizing-xxl) var(--sizing-xxxl);
  }

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-inline: auto;
    gap: var(--sizing-xl);

    @media (min-width: 716px) {
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: 715px) {
      justify-content: space-between;
    }

    @media (min-width: 716px) {
      max-width: var(--max-width-nav);
      gap: var(--sizing-xl);
    }
  }

  .brand-link {
    line-height: 1;
    display: flex;
    align-items: center;
    z-index: 1001;
    text-decoration-color: transparent;
  }
}
</style>
