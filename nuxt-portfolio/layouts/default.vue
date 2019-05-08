<template>
  <div>
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.375s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translate(0, -2em);
}
</style>
