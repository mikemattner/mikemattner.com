<template>
  <BaseButton
    @click="next()"
    class="theme-toggle"
    :class="{ 'is-dark': mode === 'dark' }"
    title="Toggle theme"
    variant="outline"
    size="sm"
    color="secondary"
  >
    <Icon v-show="darkIcon" name="ri:moon-fill" />
    <Icon v-show="!darkIcon" name="ri:sun-fill" />
  </BaseButton>
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
</script>

<style lang="scss" scoped>
.theme-toggle {
  --icon-fill: var(--button-outline-color-text);
  --icon-fill-hover: var(--button-outline-text-hover);

  font-size: var(--size-step-0);
  fill: var(--icon-fill);
  color: var(--icon-fill);

  &:hover:not(:disabled),
  &:focus-visible {
    color: var(--icon-fill-hover);
    fill: var(--icon-fill);
  }
}
</style>
