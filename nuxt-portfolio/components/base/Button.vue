<template>
  <nuxt-link :class="'button'" :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
import ButtonBubble from '@/assets/js/button.js'

export default {
  props: {
    to: {
      type: String,
      default: '/'
    }
  },
  mounted() {
    this.initialize(ButtonBubble, '.button')
  },
  methods: {
    initialize: function(Script, selector, ...options) {
      document
        .querySelectorAll(selector)
        .forEach(element => new Script(element, ...options))
    }
  }
}
</script>

<style lang="scss">
.button {
  border: 1px solid $darkBlue-7;
  padding: 0.5rem 1rem;
  display: block;
  text-align: center;
  background-image: none;
  margin: 1rem 0;
  transition: all 0.25s ease-in-out;
  font-size: 0.75rem;
  position: relative;
  overflow: hidden;

  @media (min-width: $tablet) {
    max-width: 200px;
  }

  &:focus {
    outline: 0;
    border-color: $orange;
  }

  &:hover {
    color: $white;
    border-color: $orange;
    border-radius: 2px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    background-image: none;
    transform: scale(1.02);
  }

  &__bubble {
    transition: all 0.25s ease-in-out;
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    background-color: $orange;
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
