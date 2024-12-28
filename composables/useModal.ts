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
 * import MyComponent from '~/components/MyComponent.vue';
 * const modal = useModal();
 *
 * modal.openModal(MyComponent, {
 *  title: 'My Modal',
 *  showHeader: true,
 *  showCloseButton: true,
 *  modalWidth: 'md',
 *  actions: [
 *    {
 *     label: 'Save',
 *     callback: (dataFromView) => {
 *       console.log(dataFromView);
 *       modal.close();
 *     },
 *   },
 *  ]});
 */

import { onMounted, reactive, markRaw } from 'vue';

export type ModalAction = {
  label: string;
  variant?: ButtonVariant;
  callback: (props?: unknown) => void;
};

export class ModalOptions {
  modalTitle?: string | undefined = undefined;
  showCloseButton?: boolean = false;
  modalWidth?: 'sm' | 'md' | 'lg' | undefined = undefined;
  actions?: ModalAction[] | undefined = undefined;

  constructor(modalOptions?: ModalOptions) {
    if (modalOptions) {
      Object.assign(this, modalOptions);
    }
  }
}

export class ModalState {
  open: boolean = false;
  showModal: boolean = false;
  showHeader: boolean = false;
  showCloseButton: boolean = false;
  modalTitle: string | undefined = undefined;
  modalWidth: 'sm' | 'md' | 'lg' | undefined = undefined;
  modalIsBusy: boolean = false;
  component: Component | object | undefined = undefined;
  callbackActions: ModalAction[] | undefined = undefined;

  constructor(modalState?: ModalState) {
    if (modalState) {
      Object.assign(this, modalState);
    }
  }
}

const modalState = reactive<ModalState>(new ModalState());

export function useModal() {
  let body: HTMLElement;

  onMounted(() => {
    body = window.document.body;
  });

  const openModal = (view: object, options?: ModalOptions) => {
    // Display properties
    modalState.showHeader = options?.modalTitle || options?.showCloseButton ? true : false;
    modalState.modalTitle = options?.modalTitle ? options.modalTitle : undefined;
    modalState.showCloseButton = options?.showCloseButton ? options.showCloseButton : false;
    modalState.modalWidth = options?.modalWidth ? options.modalWidth : 'md';

    // Set the actions to be displayed if any
    modalState.callbackActions = options?.actions ? options.actions : undefined;

    // Set the component to be displayed in the modal
    modalState.component = markRaw(view);

    // Open the modal, lock body scroll
    modalState.open = true;
    body.classList.toggle('no--scroll');
  };

  const close = () => {
    toggleModalVisibility();
    setTimeout(() => {
      modalState.open = false;
    }, 150);
    setTimeout(() => {
      modalState.component = undefined;
      modalState.callbackActions = undefined;
      modalState.showHeader = false;
      modalState.showCloseButton = false;
      modalState.modalTitle = undefined;
      body.classList.toggle('no--scroll');
    }, 200);
  };

  const toggleModalVisibility = () => {
    modalState.showModal = !modalState.showModal;
  };

  return {
    modalState,
    openModal,
    close,
    toggleModalVisibility,
  };
}
