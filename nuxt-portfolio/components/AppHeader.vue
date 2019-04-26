<template>
    <div class="navbar" role="banner">
      <div class="navbar__logo">
        <nuxt-link to="/"><BrandLogo label /></nuxt-link>
      </div>
      <div class="navbar__nav" id="nav">
        <ul>
          <li>
            <nuxt-link to="/">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
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
  
  &__logo {
    a {
      text-decoration: none;
    }
  }
  &__nav {
    font-size: 0.675rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    text-transform: uppercase;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 0;
      }
    }

    a {
      display: block;
      margin: 0  0 0 1.5rem;
      text-decoration: none;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 100%;
        bottom: -5px;
        height: 2px;
        background-color: rgba(255,88,1,1.0);
        opacity: 0;
        transition: all 0.125s ease-in-out;
      }

      &:hover {
        &:after {
          right: 0;
          opacity: 1;
        }
      }

      &.router-link-exact-active {
        color: rgba(255,88,1,1.0);
      }
    }
  }
}
</style>
