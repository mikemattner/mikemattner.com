<template>
  <div :class="['modal-overlay', { active: modalState.open }]" @click="close">
    <BaseLoader v-if="modalState.modalIsLoading && !modalState.showModal" class="modal-loader" />
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
        <button v-if="modalState.showCloseButton" class="close-button" @click="close">
          <Icon name="ri:close-large-fill" />
        </button>
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
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
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

onBeforeUnmount(() => {
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
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;

    @media (min-width: 716px) {
      grid-template-rows: auto 1fr auto;
    }
  }

  &.has-modal-header {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;

    @media (min-width: 716px) {
      grid-template-rows: auto 1fr;
    }
  }

  &.has-modal-footer {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;

    @media (min-width: 716px) {
      grid-template-rows: minmax(1fr, 50vh) auto;
    }
  }

  @media (min-width: 716px) {
    &.modal-width__sm {
      width: clamp(300px, 50vw, 400px);
    }

    &.modal-width__md {
      width: clamp(400px, 50vw, 600px);
    }

    &.modal-width__lg {
      width: clamp(550px, 50vw, 800px);
    }
  }

  @media (max-width: 715px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(100vw, 0);
    transition: all 0.25s 0s var(--transition-timing);
  }

  &.active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 0.25s 0s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    @media (max-width: 715px) {
      transition: all 0.25s 0s var(--transition-timing);
    }
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--sizing-xl) var(--sizing-lg);
  border-bottom: 1px solid var(--border-color);
}
.close-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  color: var(--headline-font-color);
  transition: var(--transition);
  cursor: pointer;
  font-size: var(--size-step-1);
  line-height: 1;

  &:hover {
    color: var(--color-primary);
  }
}
.modal-content {
  padding: var(--sizing-xl) var(--sizing-lg);

  @media (min-width: 716px) {
    max-height: 400px;
  }
}
.modal-actions {
  display: flex;
  align-items: center;
  gap: var(--sizing-md);
  padding: var(--sizing-xl) var(--sizing-lg);
  border-top: 1px solid var(--border-color);
}
.modal-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
