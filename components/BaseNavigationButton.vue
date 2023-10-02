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
  mix-blend-mode: difference;

  @media (min-width: 716px) {
    display: none;
  }

  &-button {
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
      background-color: var(--color-light);
      transition: var(--transition-cubic);
      border-radius: var(--sizing-xs);
      width: 32px;
      display: block;
      &:nth-child(2) {
        width: 22px;
      }
    }
    &:hover {
      span {
        &:nth-child(2) {
          width: 32px;
        }
      }
    }
    &:active {
      span {
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
}
</style>
