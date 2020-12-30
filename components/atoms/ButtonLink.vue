<template>
  <a
    :href="href"
    :class="[
      'button',
      secondary == true ? 'button--secondary' : '',
      ghost == true ? 'button--secondary-ghost' : '',
      small == true ? 'button--small' : '',
    ]"
    rel="nofollow"
    :target="target"
  >
    <span class="button__content">
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    secondary: Boolean,
    ghost: Boolean,
    small: Boolean,
    href: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: '',
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
