<template>
  <a :href="href" @click="click">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: String
  },
  computed: {
    active() {
      if (!this.href) return false
      return (
        this.href.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      )
    }
  },
  methods: {
    click(event) {
      if (!this.href) return
      const link = event.currentTarget
      if (this.isAnchor(link)) {
        event.preventDefault()
        document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' })
        return
      }
      if (!/^(https?)?\/\//.test(this.href)) {
        event.preventDefault()
        this.$router.push(this.href)
      }
    },
    isAnchor(link) {
      if (!link.hash) return false

      if (link.pathname !== this.$route.path) return false

      const element = document.querySelector(link.hash)
      if (!element) return false

      return true
    }
  }
}
</script>
