<template>
  <Teleport to="body">
    <div :class="['modal-overlay', { active: modalState.open }]" @click="close">
      <div
        :class="classes"
        role="dialog"
        ref="modal"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        @click.stop
      >
        <div v-if="modalState.showHeader" class="modal-header">
          <h2 v-if="modalState.modalTitle" class="small-heading">{{ modalState.modalTitle }}</h2>
          <BaseButton v-if="modalState.showCloseButton" size="xs" variant="text" class="close-button" @click="close">
            <Icon name="ri:close-large-fill" />
          </BaseButton>
        </div>
        <component :is="modalState.component" @vue:mounted="toggleModalVisibility" class="modal-content" />
        <div v-if="modalState.callbackActions" class="modal-actions">
          <BaseButton
            v-for="action in modalState.callbackActions"
            size="sm"
            :variant="action.variant ? action.variant : 'outline'"
            color="primary"
            @click="action.callback"
          >
            {{ action.label }}
          </BaseButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal';

const { close, toggleModalVisibility, modalState } = useModal();

const classes = computed(() => {
  return [
    'modal-container',
    {
      active: modalState.showModal,
      'modal-width__sm': modalState.modalWidth === 'sm',
      'modal-width__md': modalState.modalWidth === 'md',
      'modal-width__lg': modalState.modalWidth === 'lg',
      'has-modal-header': modalState.showHeader && !modalState.callbackActions?.length,
      'has-modal-footer': modalState.callbackActions?.length && !modalState.showHeader,
      'has-modal-header-footer': modalState.showHeader && modalState.callbackActions?.length,
    },
  ];
});

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && modalState.open) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transition: opacity 0.375s ease;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.modal-container {
  background: var(--background-color);
  border-radius: var(--border-radius);
  position: relative;
  opacity: 0;
  transform: translate(0, 50px);
  transition: all 0.25s 0s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: var(--box-shadow-long);

  &.has-modal-header-footer {
    display: grid;
    grid-template-rows: auto minmax(1fr, 50vh) auto;
    grid-template-columns: 1fr;
  }

  &.has-modal-header {
    display: grid;
    grid-template-rows: auto minmax(1fr, 50vh);
    grid-template-columns: 1fr;
  }

  &.has-modal-footer {
    display: grid;
    grid-template-rows: minmax(1fr, 50vh) auto;
    grid-template-columns: 1fr;
  }

  &.modal-width__sm {
    width: clamp(300px, 50vw, 400px);
  }

  &.modal-width__md {
    width: clamp(400px, 50vw, 600px);
  }

  &.modal-width__lg {
    width: clamp(550px, 50vw, 800px);
  }

  &.active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 0.25s 0s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--sizing-lg);
  border-bottom: 1px solid var(--border-color);
}
.close-button {
  margin-left: auto;
}
.modal-content {
  padding: var(--sizing-lg);
}
.modal-actions {
  display: flex;
  align-items: center;
  gap: var(--sizing-md);
  padding: var(--sizing-lg);
}
</style>
