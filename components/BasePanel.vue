<template>
  <div class="base-panel">
    <div :class="['base-panel__header', { 'is-open': openPanel }]" @click="openPanelBody">
      <slot name="header" />

      <Icon name="ri:arrow-down-s-line" />
    </div>
    <div :class="['base-panel__content', { 'is-active': openPanel }]">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  open: { type: Boolean, default: false },
});

const openPanel = ref<boolean>(false);
const openPanelBody = () => {
  openPanel.value = !openPanel.value;
};

onMounted(() => {
  openPanel.value = props.open;
});
</script>

<style lang="scss" scoped>
.base-panel {
  border-bottom: 1px solid var(--border-color);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--sizing-lg) 0;
    font-size: var(--size-step--1);
    font-weight: bold;
    cursor: pointer;
    line-height: 1;

    svg {
      transition: var(--transition-cubic);
      font-size: var(--size-step-0);
      transform: rotate(180deg);
    }

    &.is-open {
      svg {
        transform: rotate(0deg);
      }
    }
  }

  &__content {
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-ease);
    max-height: 0;

    &.is-active {
      opacity: 1;
      visibility: visible;
      max-height: 150vh;
    }
  }
}
</style>
