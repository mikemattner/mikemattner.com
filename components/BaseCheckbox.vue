<template>
  <div class="input-checkbox-field">
    <input class="input-checkbox-field__input" :id="id" :name="name" type="checkbox" :value="value" v-model="model" />
    <label class="input-checkbox-field__label" :for="id">
      <slot name="default" />
    </label>
  </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 10px;

  &__label {
    text-align: left;
    display: flex;
    align-items: center;
    font-size: var(--size-step--1);

    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: 50%;
      background: white;
      width: 3px;
      height: 3px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg) translate(-50%, -50%);
      opacity: 0;
      transition: all 0.25s ease-in-out;
    }
  }

  &__input {
    border: 1px solid var(--font-color);
    border-radius: 3px;
    background: var(--block-quote-bg);
    font-weight: 700;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    outline: none;
    transition: all 0.25s ease-in-out;
    -webkit-appearance: none;

    &:hover {
      border-color: var(--color-primary);
    }
    &:focus-visible {
      background: var(--block-quote-bg);
      border-color: var(--color-primary);
      box-shadow: 0 0 4px var(--color-primary), var(--box-shadow-short);
    }

    &:checked {
      background: var(--color-primary);
      border-color: var(--color-primary);

      + label:after {
        opacity: 1;
      }
    }
  }
}
</style>
