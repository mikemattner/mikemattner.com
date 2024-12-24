<template>
  <div class="badge" :class="`badge--${type}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type Severity = 'info' | 'success' | 'warning' | 'light';

defineProps({
  type: {
    type: String as PropType<Severity>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.badge {
  --message-color: #fff;
  --message-color-bg: var(--color-green);

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--message-color);
  background-color: var(--message-color-bg);
  border-radius: 50%;
  flex-shrink: 0;
  min-width: 1.5em;
  min-height: 1.5em;
  font-size: var(--size-step--2);

  &--info {
    --message-color: #fff;
    --message-color-bg: var(--color-blue);
  }

  &--success {
    --message-color: #fff;
    --message-color-bg: var(--color-green);
  }

  &--warning {
    --message-color: #fff;
    --message-color-bg: var(--color-red);
  }

  &--light {
    --message-color: hsla(var(--color-dark-hsl), 0.8);
    --message-color-bg: #fff;
  }
}
</style>
