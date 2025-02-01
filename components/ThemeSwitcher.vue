<template>
  <BaseToggle v-model="isDark" @change="next()">
    <div class="theme-toggle">
      <span class="sr-only">Toggle theme</span>
      <Icon :name="iconName" />
    </div>
  </BaseToggle>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core';

const mode = useColorMode({
  initialValue: 'dark',
  storageKey: 'mikemattner-com-theme',
  disableTransition: false,
});
const { state, next } = useCycleList(['dark', 'light'], { initialValue: mode });

watchEffect(() => (mode.value = state.value as any));

const iconName = computed(() => (isDark.value ? 'ri:moon-fill' : 'ri:sun-fill'));

const isDark = ref<boolean>(true);
</script>

<style lang="scss" scoped>
.theme-toggle {
  --icon-fill: var(--background-color);
  font-size: var(--size-step-0);
  fill: var(--icon-fill);
  color: var(--icon-fill);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 50%;
  }
}
</style>
