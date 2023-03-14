<template>
  <header class="base-navigation">
    <NuxtLink to="/" class="brand-link"><BaseLogo show-label /></NuxtLink>
    <nav class="base-navigation__main">
      <ul class="navigation-list">
        <li class="navigation-list-item"><BaseButton to="/">Home</BaseButton></li>
        <li class="navigation-list-item"><BaseButton to="/test">Writing</BaseButton></li>
        <li class="navigation-list-item"><BaseButton to="/about">About</BaseButton></li>
      </ul>
    </nav>
    <ThemeSwitcher />
  </header>
</template>

<style lang="scss" scoped>
.base-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;

  .brand-link {
    text-decoration: none;
    text-underline-offset: 0;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  &__main {
    font-size: var(--size-step--1);
    letter-spacing: 0.025rem;
    margin-left: auto;

    .navigation-list {
      display: grid;
      grid-auto-columns: minmax(65px, 1fr);
      grid-auto-flow: column;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      list-style: none;

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
      }
    }

    .router-link-active {
      font-weight: 700;
    }
  }
}
</style>
