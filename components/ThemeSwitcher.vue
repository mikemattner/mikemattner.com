<template>
  <button @click="next()" class="theme-switcher" title="Toggle theme">
    <div class="theme-switcher__toggle">
      <template v-if="mode === 'dark'">
        <Icon name="ri:moon-clear-fill" />
        <span class="sr-only">Dark Theme</span>
      </template>
      <template v-if="mode === 'light'">
        <Icon name="ri:sun-fill" />
        <span class="sr-only">Light Theme</span>
      </template>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core';

const mode = useColorMode({
  initialValue: 'dark',
  storageKey: 'mikemattner-com-theme',
});
const { next } = useCycleList(['dark', 'light'], { initialValue: mode });
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
  border: none;
  background-color: var(--color-middle-gray-t);
  color: var(--font-color);
  transition: var(--transition);
  overflow: hidden;
  backdrop-filter: invert(80%);

  &:hover {
    background-color: var(--color-middle-gray);
    backdrop-filter: invert(80%);
  }

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--background-color);
    transition: var(--transition);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    transform: translate(1px);
    .icon {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
}

.light .theme-switcher {
  .theme-switcher__toggle {
    transform: translate(21px);
  }
}
</style>
