<template>
  <div id="app">
    <AppHeader />
    <main>
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'Portfolio',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.375s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  // transform: translate(0, -2em);
  transform: scale(0.5);
}
</style>
