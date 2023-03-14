<template>
  <component :is="element" :class="['button', classes]" v-bind="{ ...attributes }">
    <span class="button__content">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  tertiary: {
    type: Boolean,
    default: false,
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: true,
  },
  href: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})

const classes = computed(() => {
  return {
    'button--link': props.link,
    'button--tertiary': props.tertiary,
    'button--secondary': props.secondary,
    'button--secondary-ghost': props.ghost && props.secondary,
    'button--primary-ghost': props.ghost && props.primary,
    'button--small': props.small,
  }
})

const element = computed(() => {
  if (props.to) {
    return resolveComponent('nuxt-link')
  }
  if (props.href) {
    return 'a'
  }
  return 'button'
})

const attributes = computed(() => {
  if (props.href) {
    return {
      href: props.href,
    }
  }

  if (props.to) {
    return {
      to: props.to,
    }
  }

  return {}
})
</script>
