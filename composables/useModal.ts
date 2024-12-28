/**
 * A composable function that provides functionality to open and close a modal.
 *
 * @returns {object} An object containing the modal state and functions to control the modal.
 * @property {ModalState} modalState - The reactive state of the modal.
 * @property {Function} openModal - A function to open the modal with a specified view and optional options.
 * @property {Function} close - A function to close the modal.
 * @property {Function} toggleModalVisibility - A function to toggle the visibility of the modal content.
 *
 * @example
 * import { useModal } from '~/composables/useModal';
 * import MyComponent from '~/components/MyComponent.vue';
 * const modal = useModal();
 *
 * modal.openModal(MyComponent, {
 *  modalTitle: 'My Modal',
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
  modalIsLoading: boolean = false;
  component: Component | object | undefined = undefined;
  callbackActions: ModalAction[] | undefined = undefined;

  constructor(modalState?: ModalState) {
    if (modalState) {
      Object.assign(this, modalState);
    }
  }
}

const modalState = reactive<ModalState>({ ...new ModalState() });

export function useModal() {
  let body: HTMLElement;

  onMounted(() => {
    body = window.document.body;
  });

  const openModal = (view: object, options?: ModalOptions) => {
    const optionsState = new ModalState({
      open: true,
      showHeader: options?.modalTitle || options?.showCloseButton ? true : false,
      modalTitle: options?.modalTitle ? options.modalTitle : undefined,
      showCloseButton: options?.showCloseButton ? options.showCloseButton : false,
      modalWidth: options?.modalWidth ? options.modalWidth : 'md',
      callbackActions: options?.actions ? options.actions : undefined,
      component: markRaw(view),
      showModal: false,
      modalIsBusy: false,
      modalIsLoading: true,
    });

    Object.assign(modalState, optionsState);
    body.classList.toggle('no--scroll');
  };

  const close = () => {
    toggleModalVisibility();
    setTimeout(() => {
      modalState.open = false;
      resetModal();
    }, 150);
  };

  const toggleModalVisibility = () => {
    modalState.showModal = !modalState.showModal;
    modalState.modalIsLoading = !modalState.modalIsLoading;
  };

  const resetModal = () => {
    Object.assign(modalState, new ModalState());
    body.classList.toggle('no--scroll');
  };

  return {
    modalState,
    openModal,
    close,
    toggleModalVisibility,
  };
}
