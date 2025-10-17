<template>
  <label class="toggle-switch-container">
    <div class="toggle-switch" :class="[`toggle-switch--${type}`, { checked: modelValue }]">
      <input type="checkbox" v-model="model" />
      <span class="toggle-button">
        <slot name="icon" />
      </span>
    </div>
    <span class="toggle-switch__label">
      <slot name="default" />
    </span>
  </label>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type Severity = 'primary' | 'success' | 'warning';

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  },
  type: {
    type: String as PropType<Severity>,
    default: 'primary',
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('change');
    emit('update:modelValue', value);
  },
});
</script>

<style lang="scss" scoped>
.toggle-switch {
  --switch-color-bg: var(--color-blue);

  background: var(--toggle-switch-bg);
  border-radius: 0.75em;
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset;
  cursor: pointer;
  display: inline-block;
  flex: none;
  height: 1.25em;
  position: relative;
  transition: var(--transition);
  width: 2.5em;

  &-container {
    display: inline-flex;
    align-items: center;
    gap: var(--sizing-sm);
    cursor: pointer;
    user-select: none;
  }

  &__label {
    font-size: var(--size-step--1);
    user-select: none;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  &--primary {
    --switch-color-bg: var(--color-blue);
  }

  &--success {
    --switch-color-bg: var(--color-green);
  }

  &--warning {
    --switch-color-bg: var(--color-red);
  }

  .toggle-button {
    background: var(--headline-font-color);
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    border-radius: 0.625em;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08);
    content: '';
    display: block;
    height: 1em;
    left: 0.125em;
    position: absolute;
    top: 0.125em;
    transition: left 150ms;
    width: 1em;
    will-change: left;
  }

  &.checked {
    background-color: var(--switch-color-bg);
  }

  &.checked .toggle-button {
    background: var(--color-light);
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    left: 1.375em;
  }

  &:hover {
    box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
  }

  &:hover .toggle-button {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0375) 1em);
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
  }
}
</style>
