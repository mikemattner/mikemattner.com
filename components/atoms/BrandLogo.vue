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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: $transition;
  color: #fff;
  padding: 0;

  &__image {
    height: 1.25rem;
    width: 1.25rem;
    padding: 0;
    border-radius: 50%;
    // border: 1px solid $white;
    background: $blueSteel;
    // background: shade($blueSteel, 80%);
    z-index: 10;
    transition: $transition;
    flex: 0 0 1.25rem;

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
      fill: shade($blueSteel, 80%);
      // fill: $white;
      transition: $transition;
    }
  }

  &__type {
    // font-family: $serif-font;
    font-size: $base * 0.75;
    // letter-spacing: 0.0125rem;
    font-weight: 700;
    margin-left: 0.5rem;
    // opacity: 0;
    transition: all 0.125s ease-in-out;
    // transform: translateX(-100px);
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
        // border: 1px solid rgba($primary, 1);
        background-color: $primary;
        .circle-shape {
          fill: rgba($primary, 1);
        }
        .logo-shape {
          fill: $white;
        }
      }
      .brand-logo__type {
        // opacity: 1;
        // transform: translateX(0);
        // color: #fff;
      }
    }
  }
}
</style>
