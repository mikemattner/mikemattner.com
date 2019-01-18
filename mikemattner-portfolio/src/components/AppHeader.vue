<template>
    <div class="navbar" role="banner">
      <div class="navbar__logo">
        <router-link to="/"><BrandLogo /></router-link>
      </div>
      <div class="navbar__nav" id="nav">
        <router-link to="/">About</router-link>
        <router-link to="/work">Work</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
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
.navbar {
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

  @media (min-width: 768px) {
    padding: 0 2%;
  }

  &__nav {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    text-transform: uppercase;

    a {
      display: block;
      margin: 0  0 0 1.5rem;
      text-decoration: none;

      &.router-link-exact-active {
        color: rgba(255,88,1,1.0);
      }
    }
  }
}
</style>
