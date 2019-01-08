<template>
    <header role="banner">
      <div class="logo">
        <router-link to="/"><BrandLogo /></router-link>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/type">Type</router-link>
      </div>
    </header>
</template>

<script>
import BrandLogo from '@/components/BrandLogo.vue';

export default {
  name: 'AppHeader',
  components: {
    BrandLogo,
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 5%;
  height: 3rem;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
}
#nav {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;

  a {
    display: block;
    margin: 0  0 0 1.25rem;
    &.router-link-exact-active {
      color: rgba(255,88,1,1.0);
    }
  }
}
</style>
