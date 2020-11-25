<template>
  <a :href="href" :class="'button'" rel="nofollow" target="_blank">
    <slot />
  </a>
</template>

<script>
import ButtonBubble from '@/assets/js/button.js'

export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
  mounted() {
    this.initialize(ButtonBubble, '.button')
  },
  methods: {
    initialize(Script, selector, ...options) {
      document
        .querySelectorAll(selector)
        .forEach((element) => new Script(element, ...options))
    },
  },
}
</script>

<style lang="scss">
.button {
  border: 1px solid $primary;
  padding: 0.5rem 1rem;
  display: block;
  text-align: center;
  background-image: none;
  margin: 1rem 0;
  transition: $transition;
  font-size: 0.75rem;
  position: relative;
  overflow: hidden;
  font-weight: 700;

  @media (min-width: $tablet) {
    max-width: 200px;
  }

  &:focus {
    outline: 0;
    border-color: $primary;
  }

  &:hover {
    color: $white;
    border-color: $primary;
    border-radius: $radius-small;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    background-image: none;
    // transform: scale(1.02);
  }

  &__bubble {
    transition: $transition;
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    background-color: $primary;
    // background-image: linear-gradient(
    //   to right top,
    //   #e63462,
    //   #ad2564,
    //   #721f59,
    //   #3c1742,
    //   #130422
    // );
    will-change: transform;
    transform: translate(-50%, -50%) scale(0);
    transition-property: transform;
  }
  &:hover &__bubble,
  &:focus &__bubble {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
