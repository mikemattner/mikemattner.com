<template>
  <headroom class="headroom--surround">
    <div class="navbar" role="banner">
      <div class="navbar__logo">
        <nuxt-link to="/"><BrandLogo label/></nuxt-link>
      </div>
      <div id="nav" class="navbar__nav">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'
headroom.computed.style = () => ''
export default {
  name: 'AppHeader',
  components: {
    headroom
  }
}
</script>

<style lang="scss">
.headroom {
  &--surround {
    position: fixed;
    height: 3rem;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 3rem;
    box-sizing: border-box;
    transition: all 0.25s ease-in-out;

    @media (min-width: 768px) {
      // padding: 0 2%;
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
        margin: 0 0 0 1.5rem;
        text-decoration: none;
        position: relative;
        background-size: 100% 0px;

        &:hover {
          background-size: 100% 2px;
        }

        &.nuxt-link-exact-active {
          color: $orange;
          background-size: 100% 2px;
        }
      }
    }
  }
  &--not-top {
    .navbar {
      background-color: $darkBlue;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      height: 2.5rem;
    }
  }
}
</style>
