<template>
  <headroom>
    <div class="navbar" role="banner">
      <div class="navbar__logo">
        <nuxt-link to="/"><BrandLogo label/></nuxt-link>
      </div>
      <div id="nav" class="navbar__nav">
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
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0 2rem;
    height: 3rem;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;

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

        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 100%;
          bottom: -5px;
          height: 2px;
          background-image: linear-gradient(90deg, $orange 0%, $orange-1 100%);
          opacity: 0;
          transition: all 0.25s ease-in-out;
        }

        &:hover {
          &:after {
            right: 0;
            opacity: 1;
          }
        }

        &.nuxt-link-exact-active {
          color: $orange;
        }
      }
    }
  }
  &--not-top {
    .navbar {
      background-color: $darkBlue;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
