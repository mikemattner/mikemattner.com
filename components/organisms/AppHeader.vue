<template>
  <div id="navbar" :class="['navbar', 'layout', classes]" role="banner">
    <div class="navbar__logo">
      <nuxt-link to="/"><BrandLogo label /></nuxt-link>
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
    <div id="nav" class="navbar__nav" :class="{ active: navOpen }">
      <nav class="nav__block">
        <ul>
          <li>
            <nuxt-link to="/" exact
              ><span @click="toggle()">Home</span></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/writing"
              ><span @click="toggle()">Writing</span></nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/about" exact
              ><span @click="toggle()">About</span></nuxt-link
            >
          </li>
          <li>
            <Button
              href="/files/mikemattner_20201224.pdf"
              target="_blank"
              icon="arrow-alt-circle-down"
              icon-right
              secondary
              ghost
              small
              >R&eacute;sum&eacute;
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      navOpen: false,
      fixed: false,
      navBarElm: null,
    }
  },
  computed: {
    classes() {
      return {
        active: this.navOpen,
        fixed: this.fixed,
      }
    },
  },
  mounted() {
    this.navBarElm = document.getElementById('navbar')
    window.addEventListener('scroll', this.updateNavBarFixed)
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateNavBarFixed)
  },
  methods: {
    toggle() {
      this.navOpen = !this.navOpen
    },
    updateNavBarFixed() {
      const scrollPos = window.scrollY
      const navbarBottom = this.navBarElm.offsetHeight
      if (scrollPos > navbarBottom) {
        this.fixed = true
      } else {
        this.fixed = false
      }
    },
  },
}
</script>

<style lang="scss">
$transparent-bg: rgba($darkShadeBackground, 0.9);
.navbar {
  background-color: none;
  padding: 0 1.25rem;
  height: 3rem;
  box-sizing: border-box;
  transition: $transition;
  z-index: 1001;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: none;

  &.fixed {
    background-color: $transparent-bg;
  }

  @media (min-width: 769px) {
    position: fixed;
    padding: 0;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
  }

  &__logo {
    display: flex;
    align-items: center;
    z-index: 1000;
    a {
      text-decoration: none;
      display: inline-flex;
    }
    @media (min-width: 769px) {
      grid-column: content-start / span 2;
    }
  }
  &__menu {
    z-index: 1000;
    @media (min-width: 769px) {
      display: none;
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
      border-radius: $radius-small;
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
    font-size: $base * 0.75;
    letter-spacing: 0.03em;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none;
      margin: 0 0 0 0;
      padding: 0;
      li {
        margin: 0 $defaultPadding * 1.5 0 0;
        padding: 0;
        &:before {
          display: none;
        }
        a {
          background-size: 100% 0;
          position: relative;
          font-weight: 700;
          display: flex;
          align-items: center;
          color: $middleGray;

          &.nuxt-link-active {
            color: $white;
            background-size: 100% 1px;
            text-decoration-color: $primary;
          }
          &:hover {
            color: $white;
          }
        }
        .button {
          margin: 0;
        }
      }
    }
    @media (min-width: 769px) {
      grid-column: main-content-start / span 6;
    }
    @media (max-width: 768px) {
      font-size: 1.25rem;
      font-weight: 900;
      letter-spacing: 0.125rem;
      position: fixed;
      top: 0;
      padding: 4.5rem 1.25rem 2.5rem;
      left: 0;
      right: 0;
      width: 100%;
      opacity: 0;
      visibility: hidden;
      transition: all 0.125s 0.5s ease-in-out, clip-path 0.75s;
      transform: translateY(-50vh);
      z-index: 999;
      background-color: $transparent-bg;
      display: flex;
      align-items: stretch;
      justify-content: center;
      flex-direction: column;
      clip-path: circle(25% at 150% -50%);
      box-shadow: 0 2px 25px 1px rgba($black, 0.25);

      .nav__block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        list-style: none;
        margin: 0 0 0 0;
        padding: 0;
        li {
          margin: 0.5rem 0;
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
          color: $white !important;
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
}
</style>
