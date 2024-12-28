<template>
  <div class="toggle-switch" :class="{ checked: modelValue }" @click="toggle">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const toggle = () => {
  emit('update:modelValue', !props.modelValue);
  emit('change');
};
</script>

<style scoped>
.toggle-switch {
  background: var(--block-quote-bg);
  border-radius: 0.75em;
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset;
  cursor: pointer;
  flex: none;
  height: 1.5em;
  position: relative;
  transition: background-color 150ms;
  width: 3em;
}

.toggle-switch::before {
  background: var(--headline-font-color);
  background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
  border-radius: 0.625em;
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08);
  content: '';
  display: block;
  height: 1.25em;
  left: 0.125em;
  position: absolute;
  top: 0.125em;
  transition: left 150ms;
  width: 1.25em;
  will-change: left;
}

.checked {
  background-color: var(--color-green);
}

.checked::before {
  background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
  left: 1.625em;
}

.toggle-switch:hover {
  box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
}

.toggle-switch:hover::before {
  background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0375) 1em);
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}
</style>
