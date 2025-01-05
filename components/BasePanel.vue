<template>
  <div class="base-panel">
    <header
      :class="[
        'base-panel__header',
        {
          'is-open': openPanel,
          'has-border': hasBorder,
          'has-arrow': iconVariant === 'arrow',
          collapsable: collapsable,
        },
      ]"
      @click="openPanelBody"
    >
      <slot name="header" />

      <Icon v-if="collapsable" :name="panelIcon" />
    </header>
    <section :class="['base-panel__content', { 'is-active': openPanel, 'has-border': hasBorder }]">
      <div class="base-panel__content--inner">
        <slot name="default" />
        <footer v-if="$slots.footer" :class="['base-panel__footer', { 'has-border': hasBorder }]">
          <slot name="footer" />
        </footer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  open: { type: Boolean, default: false },
  collapsable: { type: Boolean, default: true },
  hasBorder: { type: Boolean, default: false },
  iconVariant: { type: String as PropType<PanelIcon>, default: 'arrow' },
});

const panelIcon = computed(() => {
  if (props.iconVariant === 'plus' && openPanel.value) return 'ri:subtract-fill';
  if (props.iconVariant === 'plus') return 'ri:add-fill';
  return `ri:arrow-down-s-line`;
});

const openPanel = ref<boolean>(false);
const openPanelBody = () => {
  if (!props.collapsable) return;
  openPanel.value = !openPanel.value;
};

onMounted(() => {
  openPanel.value = props.collapsable ? props.open : true;
});
</script>

<style lang="scss" scoped>
.base-panel {
  border-bottom: 1px solid var(--border-color);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--sizing-lg) var(--sizing-md);
    font-size: var(--size-step--1);
    font-weight: bold;
    line-height: 1;

    svg {
      transition: var(--transition-cubic);
      font-size: var(--size-step-0);
    }

    &.collapsable {
      cursor: pointer;
    }

    &.has-arrow {
      svg {
        transform: rotate(-90deg);
      }
    }

    &.is-open {
      &.has-arrow {
        svg {
          transform: rotate(0deg);
        }
      }
    }

    &.has-border {
      border: 1px solid var(--border-color);
      border-bottom: 0;
    }
  }

  &__content {
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-ease);
    display: grid;
    grid-template-rows: 0fr;

    &--inner {
      overflow: hidden;
    }

    &.is-active {
      opacity: 1;
      visibility: visible;
      grid-template-rows: 1fr;
    }

    &.has-border {
      border: 1px solid var(--border-color);
      border-bottom: 0;
      padding: 0;
    }
  }

  &__footer {
    padding: var(--sizing-md) 0;

    &.has-border {
      border-top: 1px solid var(--border-color);
      padding: var(--sizing-md);
    }
  }
}
</style>
