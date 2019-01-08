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

main {
  padding: 0 5%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translate(0, -2em);
}
</style>
