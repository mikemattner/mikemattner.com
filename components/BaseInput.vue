<template>
  <div :class="classes">
    <label class="input-text-field__label" :for="id">
      <slot />
    </label>
    <input
      autocomplete="off"
      class="input-text-field__input"
      :id="id"
      :name="name"
      :value="modelValue"
      ref="vModel"
      v-on="events"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const classes = computed(() => {
  return [
    'input-text-field',
    {
      'input-text-field--populated': !!props.modelValue,
    },
  ];
});

const events = computed(() => {
  return {
    input: (event: any) => {
      emit('update:modelValue', event.target.value);
    },
    focus: (event: any) => {
      emit('focus', event);
    },
    blur: (event: any) => {
      emit('blur', event);
    },
  };
});
</script>

<style lang="scss" scoped>
.input-text-field {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;

  &__label {
    background-color: var(--background-color);
    padding: 0 2px;
    opacity: 1;
    transition: var(--transition-cubic);
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    font-weight: 700;
    font-size: var(--size-step--1);
    width: max-content;
  }

  &__input {
    border: none;
    border: var(--control-border) solid var(--border-color);
    border-radius: 7px;
    background: none;
    color: var(--header-color);
    padding: 0.25rem 0.5rem;
    outline: none;
    transition: var(--transition);
    margin: 0;
    font-family: var(--sans-font-family);

    &:hover {
      border-color: var(--color-primary);
    }
    &:focus-visible {
      border-color: var(--color-primary);
    }
  }

  &:focus-within {
    .input-text-field__input {
      opacity: 1;
    }
    .input-text-field__label {
      top: 0;
      transform: translateY(-50%);
      font-size: var(--size-step--2);
      z-index: 2;
    }
  }
  &--populated > .input-text-field__label {
    top: 0;
    transform: translateY(-50%);
    font-size: 0.5rem;
    z-index: 2;
  }

  &--populated > .input-text-field__input {
    opacity: 1;
  }
}
</style>
