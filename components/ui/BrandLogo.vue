<template>
  <div class="brand-logo">
    <MyLogo />
    <div v-if="label == true" class="brand-logo__type">Mike Mattner</div>
  </div>
</template>

<script>
import MyLogo from '@/assets/img/svg/logo.svg'
export default {
  name: 'BrandLogo',
  components: {
    MyLogo,
  },
  props: {
    label: Boolean,
  },
}
</script>

<style lang="scss">
.brand-logo {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: $transition;
  color: #fff;
  padding: 0;

  &__image {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border-radius: 50%;
    border: 1px solid $primary;
    background: transparent;
    z-index: 10;
    transition: $transition;
    flex: 0 0 1.5rem;

    @media (max-width: 768px) {
      height: 1.75rem;
      width: 1.75rem;
      flex: 0 0 1.75rem;
    }

    .circle-shape {
      fill: transparent;
      transition: $transition;
    }
    .logo-shape {
      fill: $primary;
      transition: $transition;
    }
  }

  &__type {
    font-size: $base * 0.75;
    font-weight: 700;
    font-family: $display-font;
    margin-left: 0.5rem;
    // opacity: 0;
    transition: all 0.125s ease-in-out;
    // transform: translateX(-100px);
    // visibility: hidden;
    line-height: 1.2;
    color: #fff;
    z-index: 9;
    text-decoration: none;
    @media (max-width: 768px) {
      font-size: $base;
    }
  }
  @media (min-width: 769px) {
    &:hover {
      .brand-logo__image {
        border: 1px solid rgba($primary, 1);
        background-color: $primary;
        .circle-shape {
          fill: rgba($primary, 1);
        }
        .logo-shape {
          fill: $darkBlue;
        }
      }
      // .brand-logo__type {
      //   // opacity: 1;
      //   // transform: translateX(0);
      //   // visibility: visible;
      //   // color: #fff;
      // }
    }
  }
}
</style>
