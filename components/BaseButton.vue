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
    validator: (value: ButtonVariant) => {
      return ['solid', 'outline', 'text', 'link'].includes(value);
    },
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
    validator: (value: ButtonSize) => {
      return ['md', 'sm'].includes(value);
    },
  },
});

const classes = computed(() => {
  return {
    'button--md': props.size === 'md',
    'button--sm': props.size === 'sm',
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
:root {
  --button-focus-shadow: 0 0 0 0.1rem var(--color-middle-gray-t);
  --button-solid-text: var(--color-light);
  --button-solid-text-dark: var(--color-dark);
  --button-outline-text: var(--headline-font-color);

  --button-primary: var(--color-primary);
  --button-primary-outline: inset 0 0 0 1px var(--color-primary);
  --button-primary-hover: var(--color-primary-hover-t);
  --button-primary-solid-hover: var(--color-primary-hover);

  --button-secondary: var(--color-middle-gray);
  --button-secondary-outline: inset 0 0 0 1px var(--color-middle-gray);
  --button-secondary-hover: var(--color-middle-hover);
  --button-secondary-solid-hover: var(--color-middle-hover);

  --button-green: #8bc541;
  --button-green-outline: inset 0 0 0 1px var(--ax-green);
  --button-green-hover: rgba(139, 197, 65, 0.1);
  --button-green-solid-hover: #9cce5e;
}
.button {
  -webkit-appearance: none;
  appearance: none;
  border: 0;
  border-radius: var(--sizing-sm);
  cursor: pointer;
  display: inline-block;
  font-family: var(--sans-font-family);
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: var(--transition);

  &:focus {
    outline: 0;
    box-shadow: var(--button-focus-shadow);
  }

  &.disabled,
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }

  &.button--sm {
    font-size: var(--size-step--1);
    padding: var(--sizing-md) var(--sizing-lg);
  }

  &.button--md {
    font-size: var(--size-step-0);
    padding: var(--sizing-md) var(--sizing-xxl);
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

    &:focus {
      box-shadow: var(--button-focus-shadow), var(--button-outline-color);
    }

    &:hover:not(:disabled) {
      color: var(--button-outline-color-text-hover);
      background-color: var(--button-outline-background-color-hover);
    }
    --button-loader-color: var(--button-outline-color-text);
  }

  &.button--solid {
    background-color: var(--button-solid-background-color);
    color: var(--button-solid-color-text);

    &:hover:not(:disabled) {
      color: var(--button-outline-color-text-hover);
      background-color: var(--button-solid-background-color-hover);
    }
    --button-loader-color: var(--button-solid-color-text);
  }

  &.button--link {
    background-color: transparent;
    color: var(--button-outline-color-text);
    padding: 0;
    text-decoration: underline 0.2ex var(--color-primary);
    text-underline-offset: 0.3ex;
    text-decoration-skip-ink: auto;
    transition: var(--transition-fast);

    &:hover:not(:disabled) {
      color: var(--button-outline-color-text);
      background-color: transparent;
      text-underline-offset: 0.4ex;
    }

    --button-loader-color: var(--button-outline-color-text);
  }

  &.button--primary {
    --button-solid-background-color: var(--button-primary);
    --button-solid-background-color-hover: var(--button-primary-solid-hover);
    --button-solid-color-text: var(--button-solid-text);

    --button-outline-background-color: transparent;
    --button-outline-background-color-hover: var(--button-primary-hover);
    --button-outline-color-text: var(--button-outline-text);
    --button-outline-color-text-hover: var(--button-outline-text);
    --button-outline-color: var(--button-primary-outline);
  }

  &.button--secondary {
    --button-solid-background-color: var(--button-secondary);
    --button-solid-background-color-hover: var(--button-secondary-solid-hover);
    --button-solid-color-text: var(--button-solid-text);

    --button-outline-background-color: transparent;
    --button-outline-background-color-hover: var(--button-secondary-hover);
    --button-outline-color-text: var(--button-outline-text);
    --button-outline-color-text-hover: var(--button-solid-text);
    --button-outline-color: var(--button-secondary-outline);
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
