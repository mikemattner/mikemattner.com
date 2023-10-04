<template>
  <header class="base-navigation">
    <div class="base-navigation__container">
      <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>
      <ClientOnly>
        <BaseNavigationMenu />
      </ClientOnly>
    </div>
  </header>
</template>

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
    mix-blend-mode: difference;
  }

  @media (max-width: 715px) {
    padding: 1rem;
    flex-direction: column;
    background: var(--background-border-color);
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
      position: sticky;
      top: 0;
    }

    @media (max-width: 715px) {
      justify-content: space-between;
      background: var(--background-border-color);
      // flex-direction: column;
      // justify-content: center;
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
    mix-blend-mode: difference;
  }
}
</style>
