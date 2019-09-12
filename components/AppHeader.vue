<template>
  <headroom class="headroom--surround">
    <div class="navbar" :class="{ active: navOpen }" role="banner">
      <div class="navbar__logo">
        <nuxt-link to="/"><BrandLogo label/></nuxt-link>
      </div>
      <div class="navbar__menu">
        <div
          class="navbar__menu-button"
          :class="{ active: navOpen }"
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
      <nav class="nav__block">
        <ul>
          <li>
            <nuxt-link to="/"><span @click="toggle()">Home</span></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/work"
              ><span @click="toggle()">Work</span></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/writing"
              ><span @click="toggle()">Writing</span></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/contact"
              ><span @click="toggle()">Contact</span></nuxt-link
            >
          </li>
        </ul>
      </nav>
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
$transparent-bg: rgba($darkBlue-3, 1);
.headroom {
  &--surround {
    position: fixed;
    top: 0;
    height: 3.5rem;
    width: 100%;
    z-index: 1001;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 3.5rem;
    box-sizing: border-box;
    transition: $transition;
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;

    &__logo {
      a {
        text-decoration: none;
      }
    }
    &__menu-button {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      width: 32px;
      height: 20px;
      cursor: pointer;
      outline: none;
      span {
        height: 2px;
        background-color: $white;
        transition: $transition-cubic;
        border-radius: 2px;
        width: 32px;
        display: block;
        &:nth-child(2) {
          width: 22px;
        }
      }
      &:hover {
        span {
          background-color: $white;
          &:nth-child(2) {
            width: 32px;
          }
        }
      }
      &:active {
        span {
          background-color: $white;
          &:nth-child(2) {
            width: 32px;
          }
        }
      }
      &.active {
        justify-content: center;
        span {
          height: 2px;
          &:nth-child(1) {
            transform: rotate(45deg) translateY(50%);
          }
          &:nth-child(2) {
            opacity: 0;
            width: 32px;
            transform: rotate(90deg);
            display: none;
          }
          &:nth-child(3) {
            transform: rotate(-45deg) translateY(-50%);
          }
        }
      }
    }
    &__nav {
      font-size: 2.25rem;
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
      transition: all 0.125s 0.25s ease-in-out, clip-path 0.5s;
      transform: translateY(-50vh);
      z-index: 999;
      background-color: $transparent-bg;
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      flex-direction: column;
      clip-path: circle(25% at 150% -50%);

      @media (min-width: 768px) {
        font-size: 3rem;
      }

      h2 {
        font-size: 0.875rem;
        margin-top: 0;
        opacity: 0;
        transition: $transition;
      }
      .nav__block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;
      }
      .brand-logo {
        &__image {
          height: 1.5rem;
          width: 1.5rem;
          z-index: 10;
          margin-right: 1rem;

          .circle-shape {
            fill: $white;
            transition: $transition;
          }
          .logo-shape {
            fill: $darkBlue-2;
            transition: $transition;
          }
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        margin: 0 0 0 0;
        padding: 0;
        li {
          margin: 0.25rem 0;
          padding: 0;
          opacity: 0;
          transform: translateY(-20px);
          transition: $transition-cubic;
        }
      }

      a {
        display: block;
        text-decoration: none;
        position: relative;
        background-size: 100% 0px;
        line-height: 1.2;

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
        transition: $transition, clip-path 0.75s;
        clip-path: circle(100%);
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
      // background-color: $darkBlue-3;
      // box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
      @media (min-width: 768px) {
        // height: 2.5rem;
      }
      // &.active {
      //   box-shadow: none;
      //   background-color: $darkBlue-3;
      //   @media (min-width: 768px) {
      //     background-color: $transparent-bg;
      //   }
      // }
    }
  }
}
</style>
