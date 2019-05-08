<template>
  <div class="brand-logo">
    <MyLogo />
    <div v-if="label == true" class="brand-logo__type">
      Mike Mattner
    </div>
  </div>
</template>

<script>
import MyLogo from '@/assets/img/logo.svg'
export default {
  name: 'BrandLogo',
  components: {
    MyLogo
  },
  props: {
    label: Boolean
  }
}
</script>

<style lang="scss">
.brand-logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  color: #fff;

  &__image {
    height: 1.75rem;
    width: 1.75rem;
    z-index: 10;

    .circle-shape {
      fill: $white;
      transition: all 0.25s ease-in-out;
    }
    .logo-shape {
      fill: $darkBlue;
      transition: all 0.25s ease-in-out;
    }
  }

  &__type {
    font-size: 1rem;
    letter-spacing: 0.125rem;
    font-weight: 400;
    margin-left: 0.5rem;
    opacity: 0;
    transition: all 0.125s ease-in-out;
    transform: translateX(-100px);
    color: #fff;
    z-index: 9;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    &:hover {
      .brand-logo__image {
        .circle-shape {
          fill: rgba($white, 0);
        }
        .logo-shape {
          fill: $white;
        }
      }
      .brand-logo__type {
        opacity: 1;
        transform: translateX(0);
        color: #fff;
      }
    }
  }
}
</style>
