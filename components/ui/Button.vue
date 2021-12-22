<template>
  <component
    :is="element"
    :class="['button', classes]"
    v-bind="{ ...attributes }"
  >
    <span class="button__content">
      <slot />
    </span>
    <fa-icon v-if="icon" :icon="icon" size="sm"></fa-icon>
  </component>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    ghost: Boolean,
    small: Boolean,
    link: Boolean,
    iconRight: Boolean,
    iconLeft: Boolean,
    icon: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/',
    },
  },
  computed: {
    classes() {
      return {
        'button--link': this.link,
        'button--tertiary': this.tertiary,
        'button--secondary': this.secondary,
        'button--secondary-ghost': this.ghost && this.secondary,
        'button--primary-ghost': this.ghost && this.primary,
        'button--small': this.small,
        'button--icon-right': this.iconRight,
        'button--icon-left': this.iconLeft,
      }
    },
    element() {
      if (this.to) {
        return 'nuxt-link'
      }
      if (this.href) {
        return 'a'
      }
      return 'button'
    },
    attributes() {
      if (this.href) {
        return {
          href: this.href,
        }
      }

      if (this.to) {
        return {
          to: this.to,
        }
      }

      return {}
    },
  },
  mounted() {
    this.createElement()
    this.$el.addEventListener('mouseleave', this.positionBubble.bind(this))
    this.$el.addEventListener('mouseenter', this.positionBubble.bind(this))
    this.$el.addEventListener('focusin', this.centerBubble.bind(this))
    this.$el.addEventListener('focusout', this.centerBubble.bind(this))
  },
  beforeDestroy() {
    this.$el.removeEventListener('mouseleave', this.positionBubble)
    this.$el.removeEventListener('mouseenter', this.positionBubble)
    this.$el.removeEventListener('focusin', this.centerBubble)
    this.$el.removeEventListener('focusout', this.centerBubble)
  },
  methods: {
    createElement() {
      const bubble = document.createElement('span')
      bubble.className = 'button__bubble'
      this.$el.appendChild(bubble)
    },
    positionBubble({ offsetX, offsetY }) {
      const xRadius = Math.max(offsetX, this.$el.offsetWidth - offsetX)
      const yRadius = Math.max(offsetY, this.$el.offsetHeight - offsetY)
      const radius = Math.sqrt(xRadius * xRadius + yRadius * yRadius)
      Object.assign(this.$el.querySelector('.button__bubble').style, {
        left: `${offsetX}px`,
        top: `${offsetY}px`,
        padding: `${radius}px`,
      })
    },
    centerBubble() {
      this.positionBubble({
        offsetX: this.$el.offsetWidth / 2,
        offsetY: this.$el.offsetHeight / 2,
      })
    },
  },
}
</script>
