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
      ref="inputRef"
      v-on="events"
    />
    <BaseButton v-if="clearable" class="clear" size="xs" variant="text" @click="clear">
      <Icon name="ri:close-large-fill" />
    </BaseButton>
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
  clearable: {
    type: Boolean,
    default: false,
  },
});

const inputRef = ref<HTMLInputElement | null>(null);

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'clear', 'input']);

const classes = computed(() => {
  return [
    'input-text-field',
    {
      'input-text-field--populated': !!props.modelValue,
      'input-text-field--clearable': props.clearable,
    },
  ];
});

const events = computed(() => {
  return {
    input: (event: any) => {
      emit('input');
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

const clear = () => {
  emit('clear');
  inputRef.value?.focus();
};

const focus = () => {
  inputRef.value?.focus();
};

defineExpose({
  focus,
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
    padding: 0;
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
    border-bottom: var(--control-border) solid var(--border-color);
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
    font-size: var(--size-step--2);
    z-index: 2;
  }

  &--populated > .input-text-field__input {
    opacity: 1;
  }

  &--clearable {
    .clear {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .input-text-field__input {
      padding-right: 2rem;
    }
  }
}
</style>
