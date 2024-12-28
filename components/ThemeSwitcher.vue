<template>
  <BaseToggle v-model="isDark" @change="next()">
    <div class="theme-toggle">
      <span class="sr-only">Toggle theme</span>
      <Icon name="ri:moon-fill" />
      <Icon name="ri:sun-fill" />
    </div>
  </BaseToggle>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core';

const mode = useColorMode({
  initialValue: 'dark',
  storageKey: 'mikemattner-com-theme',
});
const { state, next } = useCycleList(['dark', 'light'], { initialValue: mode });

watchEffect(() => (mode.value = state.value as any));

const darkIcon = computed<boolean>(() => state.value === 'dark');

const isDark = ref<boolean>(true);
</script>

<style lang="scss" scoped>
.theme-toggle {
  --icon-fill: var(--button-outline-color-text);
  font-size: var(--size-step-0);
  fill: var(--icon-fill);
  color: var(--icon-fill);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 50%;
  }
}
</style>
