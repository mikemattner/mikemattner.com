/**
 * A composable function that provides functionality to open and close a modal.
 *
 * @returns {object} An object containing the modal state and functions to control the modal.
 * @property {Ref<object | undefined>} component - The component to be displayed in the modal.
 * @property {Ref<boolean>} show - A boolean indicating whether the modal is visible.
 * @property {Ref<boolean>} showHeader - A boolean indicating whether the modal header is visible.
 * @property {Ref<boolean>} showModal - A boolean indicating whether the modal content is visible.
 * @property {Function} openModal - A function to open the modal with a specified view and optional actions.
 * @property {Function} close - A function to close the modal.
 * @property {Ref<string | undefined>} modalTitle - The title of the modal.
 *
 * @example
 * import { useModal } from '~/composables/useModal';
 *
 * modal.openModal(MyComponent, { actions: [
 *  {
 *     label: 'Save',
 *     callback: (dataFromView) => {
 *       console.log(dataFromView);
 *       modal.close();
 *    },
 *  },
 * ]});
 */

import { ref, markRaw } from 'vue';

export type ModalAction = {
  label: string;
  callback: (props?: unknown) => void;
};

export type ModalOptions = {
  title?: string;
  showHeader?: boolean;
  showCloseButton?: boolean;
  actions?: ModalAction[];
};

// Display properties
const show = ref<boolean>(false);
const showModal = ref<boolean>(false);
const showHeader = ref<boolean>(false);
const showCloseButton = ref<boolean>(false);
const modalTitle = ref<string>();

// Component and callback actions
const component = ref<Component | object>();
const callbackActions = ref<ModalAction[]>();

export function useModal() {
  const openModal = (view: object, options?: ModalOptions) => {
    showHeader.value = options?.showHeader ? options.showHeader : false;
    modalTitle.value = options?.title ? options.title : undefined;
    showCloseButton.value = options?.showCloseButton ? options.showCloseButton : false;
    callbackActions.value = options?.actions ? options.actions : undefined;
    component.value = markRaw(view);
    show.value = true;
  };

  const close = () => {
    toggleModal();
    setTimeout(() => {
      show.value = false;
    }, 150);
    setTimeout(() => {
      component.value = undefined;
      callbackActions.value = undefined;
      showHeader.value = false;
      showCloseButton.value = false;
      modalTitle.value = undefined;
    }, 200);
  };

  const toggleModal = () => {
    showModal.value = !showModal.value;
  };

  return {
    component,
    show,
    showHeader,
    showModal,
    openModal,
    close,
    modalTitle,
    callbackActions,
    toggleModal,
    showCloseButton,
  };
}
