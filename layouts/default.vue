<template>
  <div class="app-layout">
    <BaseNavigation />
    <slot />
    <BaseFooter />
    <BaseModal v-if="modalState.open" />
  </div>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal';

const { modalState } = useModal();
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
