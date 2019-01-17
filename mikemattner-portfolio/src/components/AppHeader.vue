<template>
    <div class="navbar" role="banner">
      <div class="navbar__logo">
        <router-link to="/"><BrandLogo /></router-link>
      </div>
      <div class="navbar__nav" id="nav">
        <router-link to="/">About</router-link>
        <router-link to="/work">Work</router-link>
        <router-link to="/styles">Styles</router-link>
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

</style>
