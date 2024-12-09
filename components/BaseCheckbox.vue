<template>
  <label class="input-checkbox-field" :for="id">
    <input class="input-checkbox-field__input" :id="id" :name="name" type="checkbox" :value="value" v-model="model" />
    <span class="input-checkbox-field__control"></span>
    <span class="input-checkbox-field__label">
      <slot name="default" />
    </span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number, Boolean, Object],
    required: false,
  },
  modelValue: {
    type: [Array, Boolean],
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style scoped lang="scss">
.input-checkbox-field {
  --hover-color: var(--color-primary-hover);
  --background-color: var(--background-color);
  --text-color-white: var(--font-color);
  --text-color-rest: var(--font-color);
  --text-color-hover: var(--font-color);
  --text-color-active: var(--font-color);
  --ripple-color: hsla(var(--color-blue-hsl), 0.3);

  --transition-duration: 0.25s;
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
  --ripple-duration: 0.7s;

  --control-size: 24px;
  --control-border: 2px;
  --focus-ring-size: 4px;
  --ripple-size: 44px;
  --checkmark-width: 6px;
  --checkmark-height: 12px;

  position: relative;
  display: flex;
  align-items: center;
  gap: var(--sizing-md);
  cursor: pointer;

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__control {
    position: relative;
    width: var(--control-size);
    height: var(--control-size);
    min-width: var(--control-size);
    min-height: var(--control-size);
    border: var(--control-border) solid var(--color-primary);
    transition: all var(--transition-duration) var(--transition-timing);
    border-radius: 7px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      transition: transform var(--transition-duration) var(--transition-timing),
        opacity var(--transition-duration) var(--transition-timing);
      will-change: transform, opacity;
    }

    &::before {
      top: 50%;
      left: 50%;
      width: var(--ripple-size);
      height: var(--ripple-size);
      background-color: var(--ripple-color);
      border-radius: 50%;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }

    &::after {
      left: 50%;
      top: 45%;
      width: var(--checkmark-width);
      height: var(--checkmark-height);
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg) scale(0);
      opacity: 0;
    }
  }

  .input-checkbox-field__input:checked ~ .input-checkbox-field__control {
    background-color: var(--color-primary);
    border-color: var(--color-primary);

    &::before {
      animation: ripple 240ms linear;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
      opacity: 1;
    }
  }

  .input-checkbox-field__input:focus-visible ~ .input-checkbox-field__control {
    box-shadow: 0 0 0 var(--focus-ring-size) rgba(100, 108, 255, 0.3);
  }

  &__label {
    user-select: none;
    color: var(--text-color-rest);
    transition: color var(--transition-duration) var(--transition-timing);
  }
}

/* Animations */
@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(0.35);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}
</style>
