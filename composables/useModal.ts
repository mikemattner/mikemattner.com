import { ref, markRaw, nextTick } from 'vue';

export type ModalAction = {
  label: string;
  callback: (props?: unknown) => void;
};

const component = ref<Component | object>();
const show = ref<boolean>(false);
const callbackActions = ref<ModalAction[]>();
const showHeader = ref<boolean>(false);
const modalTitle = ref<string>();

export function useModal() {
  const openModal = (view: object, actions?: ModalAction[]) => {
    callbackActions.value = actions ? actions : undefined;
    component.value = markRaw(view);
    show.value = true;
  };

  const close = () => {
    show.value = false;
    callbackActions.value = undefined;
    setTimeout(() => {
      component.value = undefined;
    }, 500);
  };
  return {
    component,
    show,
    showHeader,
    openModal,
    close,
    modalTitle,
  };
}
