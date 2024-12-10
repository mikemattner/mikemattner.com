<template>
  <label class="input-radio-field" :for="id">
    <input
      class="input-radio-field__input"
      :id="id"
      :name="name"
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @change="onChange"
    />
    <span class="input-radio-field__control"></span>
    <span class="input-radio-field__label">
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
    type: [String, Number, Boolean, Object],
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const onChange = () => {
  emit('update:modelValue', props.value);
};
</script>

<style scoped lang="scss">
.input-radio-field {
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
    border-radius: 50%;

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
      top: 50%;
      left: 50%;
      width: var(--radio-dot-size);
      height: var(--radio-dot-size);
      border-radius: 50%;
      background-color: var(--color-blue-tint-80);
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
  }

  .input-radio-field__input:checked ~ .input-radio-field__control {
    background-color: var(--color-primary);
    border-color: var(--color-primary);

    &::before {
      animation: ripple 240ms linear;
    }

    &::after {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  .input-radio-field__input:focus-visible ~ .input-checkbox-field__control {
    box-shadow: 0 0 0 var(--focus-ring-size) rgba(100, 108, 255, 0.3);
  }

  &__label {
    user-select: none;
    color: var(--font-color);
    transition: color var(--transition-duration) var(--transition-timing);
  }
}
</style>
