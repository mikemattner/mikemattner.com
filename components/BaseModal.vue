<template>
  <Teleport to="body">
    <div :class="['modal-overlay', { active: show }]" @click="close">
      <div
        :class="['modal-container', { active: showModal }]"
        role="dialog"
        ref="modal"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        @click.stop
      >
        <div v-if="showHeader" class="modal-header">
          <h2 v-if="modalTitle" class="small-heading">{{ modalTitle }}</h2>
          <BaseButton v-if="showCloseButton" size="xs" variant="text" class="close-button" @click="close">
            <Icon name="ri:close-large-fill" />
          </BaseButton>
        </div>
        <component :is="component" @vue:mounted="toggleModal" />
        <div v-if="callbackActions" class="modal-actions">
          <BaseButton
            v-for="action in callbackActions"
            size="sm"
            variant="outline"
            color="secondary"
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

const { close, show, component, showHeader, showModal, callbackActions, toggleModal, modalTitle, showCloseButton } =
  useModal();

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && show.value) {
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
  padding: var(--sizing-lg);
  position: relative;
  opacity: 0;
  transform: translate(0, 50px);
  transition: all 0.25s 0s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  width: clamp(550px, 50vw, 800px);

  &.active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 0.25s 0.125s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 var(--sizing-md);
}
.close-button {
  margin-left: auto;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--sizing-md);
}
</style>
