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
      <div class="branding__block">
        <div class="branding__block-logo"><MyLogo /> Mike Mattner</div>
      </div>
      <div class="nav__block">
        <CloseButton class="close" @click="toggle()" />
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
        height: 2px;
        background-color: $white;
        transition: all 0.125s ease-in-out;
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
      transform: translateX(50vh);
      z-index: 10100;
      background-color: rgba($darkBlue-3, 1);
      display: flex;
      align-items: stretch;
      justify-content: flex-start;
      flex-direction: column;

      @media (min-width: 768px) {
        font-size: 2rem;
        flex-direction: row;
        justify-content: center;
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
      .branding__block {
        background-color: $darkBlue-2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
          height: 25vh;
        }
        @media (min-width: 768px) {
          width: 50%;
        }
        &-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
      }
      .nav__block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (min-width: 768px) {
          width: 50%;
        }
      }
      .brand-logo {
        &__image {
          height: 1.5rem;
          width: 1.5rem;
          z-index: 10;
          margin-right: 1rem;

          .circle-shape {
            fill: $white;
            transition: all 0.25s ease-in-out;
          }
          .logo-shape {
            fill: $darkBlue-2;
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
        @media (max-width: 768px) {
          margin-top: 4rem;
        }
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
