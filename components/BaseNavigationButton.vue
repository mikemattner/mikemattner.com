<template>
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
</template>

<script setup lang="ts">
const props = defineProps({
  navOpen: { type: Boolean, default: false },
});

const emit = defineEmits(['toggle']);

const toggle = () => {
  emit('toggle');
};
</script>

<style lang="scss" scoped>
.navbar__menu {
  z-index: 1000;

  @media (min-width: 716px) {
    display: none;
  }

  &-button {
    width: 32px;
    height: 20px;
    cursor: pointer;
    outline: none;
    position: relative;

    span {
      position: absolute;
      height: 2px;
      width: 32px;

      background-color: var(--headline-font-color);
      border-radius: var(--sizing-xs);
      display: block;

      &:nth-child(1) {
        top: 0;
        transition: top 0.125s var(--cubic-bezier) 0.125s, transform 0.125s var(--cubic-bezier) 0.1s;
      }
      &:nth-child(2) {
        top: 9px;
        left: 0;
        right: 0;
        opacity: 1;
        transition: all 0.125s var(--cubic-bezier) 0.125s;
      }
      &:nth-child(3) {
        top: 18px;
        transition: top 0.125s var(--cubic-bezier) 0.125s, transform 0.125s var(--cubic-bezier) 0.1s;
      }
    }

    &.active {
      span {
        &:nth-child(1) {
          top: 9px;
          transition: top 0.125s var(--cubic-bezier) 0.1s, transform 0.125s var(--cubic-bezier) 0.125s;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: 100%;
          right: 100%;
          width: 0;
        }
        &:nth-child(3) {
          top: 9px;
          transition: top 0.1s var(--cubic-bezier) 0.125s, transform 0.125s var(--cubic-bezier) 0.125s;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
