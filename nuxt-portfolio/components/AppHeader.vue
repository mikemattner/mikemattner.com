<template>
  <headroom class="headroom--surround">
    <div class="navbar" role="banner">
      <div class="navbar__logo">
        <nuxt-link to="/"><BrandLogo label/></nuxt-link>
      </div>
      <div class="navbar__menu">
        <div
          class="navbar__menu-button"
          tabindex="0"
          role="button"
          aria-label="Open navigation"
          @click="toggle()"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div id="nav" class="navbar__nav" :class="{ active: navOpen }">
      <CloseButton class="close" @click="toggle()" />
      <MyLogo />
      <ul>
        <li>
          <nuxt-link to="/"><span @click="toggle()">Home</span></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/archive"
            ><span @click="toggle()">Archive</span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/contact"
            ><span @click="toggle()">Contact</span></nuxt-link
          >
        </li>
      </ul>
    </div>
  </headroom>
</template>

<script>
import MyLogo from '@/assets/img/logo.svg'
import CloseButton from '@/assets/img/close.svg'
import { headroom } from 'vue-headroom'
headroom.computed.style = () => ''
export default {
  name: 'AppHeader',
  components: {
    headroom,
    CloseButton,
    MyLogo
  },
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    toggle: function() {
      this.navOpen = !this.navOpen
    }
  }
}
</script>

<style lang="scss">
.headroom {
  &--surround {
    position: fixed;
    top: 0;
    height: 3.5rem;
    width: 100%;
    z-index: 1000;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 3.5rem;
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
    &__menu-button {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      width: 32px;
      height: 20px;
      cursor: pointer;
      span {
        height: 3px;
        background-color: $white;
        transition: all 0.25s ease-in-out;
        border-radius: 2px;
        &:nth-child(2) {
          margin-left: 20%;
        }
      }
      &:hover {
        span {
          background-color: $orange;
          &:nth-child(2) {
            margin-left: 0;
          }
        }
      }
    }
    &__nav {
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.125rem;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      opacity: 0;
      visibility: hidden;
      transition: all 0.125s 0.25s ease-in-out;
      transform: scale(0.5) translateY(-50vh);
      z-index: 10100;
      background-color: rgba($darkBlue-3, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (min-width: 768px) {
        font-size: 2srem;
      }

      h2 {
        font-size: 0.875rem;
        margin-top: 0;
        opacity: 0;
        transition: all 0.25s ease-in-out;
      }

      .close {
        position: absolute;
        right: 2rem;
        top: 2rem;
        width: 1.5rem;
        height: 1.5rem;
        transition: all 0.25s ease-in-out;
        stroke: $white;
        cursor: pointer;

        &:hover {
          stroke: $orange;
        }
      }
      .brand-logo {
        &__image {
          height: 2rem;
          width: 2rem;
          z-index: 10;
          margin-bottom: 2rem;

          .circle-shape {
            fill: $darkBlue;
            transition: all 0.25s ease-in-out;
          }
          .logo-shape {
            fill: $darkBlue-3;
            transition: all 0.25s ease-in-out;
          }
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin: 0.5rem 0;
          padding: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.125s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }

      a {
        display: block;
        text-decoration: none;
        position: relative;
        background-size: 100% 0px;

        &:hover {
          background-size: 100% 6px;
        }

        &.nuxt-link-exact-active {
          color: $orange;
          background-size: 100% 0;
        }
      }
      &.active {
        opacity: 1;
        visibility: visible;
        transform: scale(1) translateY(0);
        transition: all 0.25s ease-in-out;
        h2 {
          opacity: 1;
          transition: all 0.25s 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        ul {
          li {
            opacity: 1;
            transform: translateY(0);

            &:nth-child(1) {
              transition: all 0.25s 0.375s
                cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            &:nth-child(2) {
              transition: all 0.25s 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            &:nth-child(3) {
              transition: all 0.25s 0.625s
                cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            &:nth-child(4) {
              transition: all 0.25s 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
          }
        }
      }
    }
  }
  // &--pinned {
  //   .navbar {
  //     background-color: $darkBlue-3;
  //     box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  //     height: 3.5rem;
  //   }
  // }
  // &--unpinned {
  //   .navbar {
  //     background-color: $darkBlue-3;
  //     box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  //     height: 2.5rem;
  //   }
  // }
  &--not-top {
    .navbar {
      background-color: $darkBlue-3;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
      @media (min-width: 768px) {
        height: 2.5rem;
      }
    }
  }
}
</style>
