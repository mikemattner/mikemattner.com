<template>
  <button
    @click="next()"
    :class="['theme-switcher', mode]"
    title="Toggle theme"
  >
    <div class="theme-switcher__toggle">
      <Icon v-if="mode === 'dark'" name="ri:moon-clear-fill" />
      <Icon v-if="mode === 'light'" name="ri:sun-fill" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core'

const mode = useColorMode({
  initialValue: 'dark',
  storageKey: 'mikemattner-com-theme',
})
const { next } = useCycleList(['dark', 'light'], { initialValue: mode })
</script>

<style lang="scss" scoped>
.theme-switcher {
  position: relative;
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 42px;
  height: 22px;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  border: 1px solid var(--color-middle-gray);
  background-color: var(--color-middle-gray);
  color: var(--font-color);
  transition: all 0.25s;

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--background-color);
    transition: var(--transition-cubic-med);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

    .icon {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  &.dark {
    .theme-switcher__toggle {
      transform: translate(20px) rotate(720deg);
    }
  }
}
</style>
