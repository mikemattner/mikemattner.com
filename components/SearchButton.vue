<template>
  <div class="search">
    <button class="search-button" @click="openSearch">
      <Icon name="ri:search-line" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal';
import BaseSearch from './BaseSearch.vue';

const { openModal, close } = useModal();
const openSearch = () => {
  openModal(BaseSearch, {
    modalTitle: 'Search',
    showHeader: true,
    showCloseButton: true,
  });
};
</script>

<style lang="scss" scoped>
.search {
  &-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    margin-left: auto;
    color: var(--headline-font-color);
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--size-step-0);

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
