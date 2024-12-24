<template>
  <div class="search">
    <BaseButton variant="text" color="secondary" class="search-button" @click="openSearch">
      <Icon name="ri:search-line" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal';
import BaseSearch from './BaseSearch.vue';

const { openModal } = useModal();
const openSearch = () => {
  openModal(BaseSearch, {
    showHeader: true,
    showCloseButton: true,
  });
};
</script>

<style lang="scss" scoped>
.search {
  &-button {
    color: var(--headline-font-color);

    &:hover:not(:disabled) {
      background-color: var(--border-color);
      color: var(--headline-font-color);
    }
  }
}
</style>
