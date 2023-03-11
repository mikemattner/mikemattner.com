<template>
  <header class="base-navigation">
    <NuxtLink to="/"><BaseLogo show-label /></NuxtLink>
    <ThemeSwitcher />
  </header>
</template>

<style lang="scss" scoped>
.base-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
