<template>
  <div class="default">
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<style lang="scss">
.default {
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.175s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
