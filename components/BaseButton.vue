<template>
  <component :is="element" :class="['button', classes]" v-bind="{ ...attributes }">
    <span :class="['button--content', { 'is--loading': isLoading }]"><slot /></span>
    <span v-if="isLoading" :class="['button--loader', { 'is--loading': isLoading }]"></span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
  },
  to: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isNarrow: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<ButtonColor>,
    default: 'primary',
    validator: (value: ButtonColor) => {
      return ['primary', 'secondary'].includes(value);
    },
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'solid',
    validator: (value: ButtonVariant) => {
      return ['solid', 'outline', 'text', 'link'].includes(value);
    },
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
    validator: (value: ButtonSize) => {
      return ['md', 'sm', 'xs'].includes(value);
    },
  },
});

const classes = computed(() => {
  return {
    'button--md': props.size === 'md',
    'button--sm': props.size === 'sm',
    'button--xs': props.size === 'xs',
    'button--narrow': props.isNarrow,
    'button--text': props.variant === 'text',
    'button--outline': props.variant === 'outline',
    'button--solid': props.variant === 'solid',
    'button--link': props.variant === 'link',
    'button--primary': props.color === 'primary',
    'button--secondary': props.color === 'secondary',
  };
});

const element = computed(() => {
  if (props.to) {
    return resolveComponent('nuxt-link');
  }
  if (props.href) {
    return 'a';
  }
  return 'button';
});

const attributes = computed(() => {
  return {
    href: props.href,
    to: props.to,
    disabled: props.disabled,
  };
});
</script>

<style lang="scss">
.button {
  -webkit-appearance: none;
  appearance: none;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-family: var(--sans-font-family);
  line-height: 1;
  text-align: center;
  transition: var(--transition);
  font-variation-settings: 'wdth' 95, 'wght' 800;
  letter-spacing: 0.025em;

  &:focus-visible {
    outline: 0;
    box-shadow: var(--button-focus-shadow);
  }

  &.disabled,
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  &.button--xs {
    font-size: var(--size-step--1);
    padding: var(--sizing-sm);
  }

  &.button--sm {
    font-size: var(--size-step--1);
    padding: var(--sizing-md) var(--sizing-lg);
  }

  &.button--md {
    font-size: var(--size-step-0);
    padding: var(--sizing-lg) var(--sizing-xxl);
  }

  &.button--narrow {
    &.button--sm {
      padding: var(--sizing-md);
    }

    &.button--md {
      padding: var(--sizing-md);
    }
  }

  &--content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--sizing-md);

    &.is--loading {
      opacity: 0;
    }
  }
  &--loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:after {
      content: '';
      width: 15px;
      height: 15px;
      border: 3px solid var(--button-loader-color);
      border-top: 3px solid transparent;
      border-radius: 100%;
      opacity: 0;
      animation: loadAnimate infinite linear 1s;
    }

    &.is--loading {
      opacity: 1;
      &:after {
        opacity: 1;
      }
    }
  }

  &.button--text {
    background-color: transparent;
    color: var(--button-outline-color-text);
    text-decoration: none;

    &:hover:not(:disabled) {
      color: var(--button-outline-color-text-hover);
      background-color: var(--button-outline-background-color-hover);
    }

    --button-loader-color: var(--button-outline-color-text);
  }

  &.button--outline {
    background-color: var(--button-outline-background-color);
    color: var(--button-outline-color-text);
    box-shadow: var(--button-outline-color);
    text-decoration: none;

    &:focus-visible {
      box-shadow: var(--button-focus-shadow), var(--button-outline-color);
    }

    &:hover:not(:disabled) {
      color: var(--button-outline-color-text-hover);
      background-color: var(--button-outline-background-color-hover);
      box-shadow: var(--button-outline-hover-color);
    }
    --button-loader-color: var(--button-outline-color-text);
  }

  &.button--solid {
    background-color: var(--button-solid-background-color);
    color: var(--button-solid-color-text);
    text-decoration: none;
    box-shadow: var(--button-solid-shadow);

    &:hover:not(:disabled) {
      color: var(--button-solid-color-text);
      background-color: var(--button-solid-background-color-hover);
      box-shadow: var(--button-solid-shadow-hover);
    }
    --button-loader-color: var(--button-solid-color-text);
  }

  &.button--link {
    background-color: transparent;
    padding: 0;
    color: var(--headline-font-color);
    text-decoration-color: var(--color-primary);
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    text-decoration-style: wavy;
    transition: var(--transition);

    &:hover {
      text-decoration-color: var(--color-highlight);
      color: var(--color-highlight);
    }

    --button-loader-color: var(--button-outline-color-text);
  }

  &.button--primary {
    --button-solid-background-color: var(--button-primary);
    --button-solid-background-color-hover: var(--button-primary-solid-hover);
    --button-solid-color-text: var(--button-solid-text);
    --button-solid-shadow: var(--button-primary-solid);
    --button-solid-shadow-hover: var(--button-primary-solid-hover);

    --button-outline-background-color: transparent;
    --button-outline-background-color-hover: var(--button-primary-hover);
    --button-outline-color-text: var(--button-outline-text);
    --button-outline-color-text-hover: var(--button-outline-text-hover);
    --button-outline-color: var(--button-primary-outline);
    --button-outline-hover-color: var(--button-primary-outline-hover);
  }

  &.button--secondary {
    --button-solid-background-color: var(--button-secondary);
    --button-solid-background-color-hover: var(--button-secondary-bg-hover);
    --button-solid-color-text: var(--button-solid-text);
    --button-solid-shadow: var(--button-secondary-solid);
    --button-solid-shadow-hover: var(--button-secondary-solid-hover);

    --button-outline-background-color: transparent;
    --button-outline-background-color-hover: var(--button-secondary-hover);
    --button-outline-color-text: var(--button-outline-text);
    --button-outline-color-text-hover: var(--button-outline-text);
    --button-outline-color: var(--button-secondary-outline);
    --button-outline-hover-color: var(--button-secondary-outline-hover);
  }

  @keyframes loadAnimate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
      opacity: 0.35;
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
