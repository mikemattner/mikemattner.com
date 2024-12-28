import { flushPromises } from '@vue/test-utils';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect, beforeEach, afterEach, vi, type MockedFunction } from 'vitest';
import { VueWrapper } from '@vue/test-utils';
import { ModalState } from '@/composables/useModal';
import BaseModal from '@/components/BaseModal.vue';
import BaseLoader from '@/components/BaseLoader.vue';
import BaseButton from '@/components/BaseButton.vue';
import { useModal } from '@/composables/useModal';
import { markRaw, reactive } from 'vue';

vi.mock('~/composables/useModal');

describe('BaseModal.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof BaseModal>>;
  let modalState: ModalState;

  beforeEach(async () => {
    modalState = reactive<ModalState>({
      open: false,
      showModal: false,
      showHeader: false,
      modalTitle: '',
      showCloseButton: false,
      modalIsBusy: false,
      modalIsLoading: false,
      component: markRaw(() => {}),
      callbackActions: [],
      modalWidth: 'md',
    });

    (useModal as MockedFunction<typeof useModal>).mockReturnValue({
      close: vi.fn(() => {
        process.stdout.write('Modal closed');
      }),
      openModal: vi.fn(),
      toggleModalVisibility: () => {
        modalState.showModal = !modalState.showModal;
      },
      modalState,
    });

    wrapper = await mountSuspended(BaseModal, {
      global: {
        components: {
          BaseLoader,
          BaseButton,
        },
      },
      attachTo: document.body,
    });

    await flushPromises();
    await vi.dynamicImportSettled();
  });

  afterEach(() => {
    vi.clearAllMocks();
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the loader when modalIsLoading is true', async () => {
    modalState.open = true;
    modalState.modalIsLoading = true;
    modalState.showModal = false;
    await wrapper.vm.$forceUpdate();
    expect(wrapper.findComponent(BaseLoader).exists()).toBe(true);
  });

  it('does not render the loader when modalIsLoading is false', async () => {
    modalState.open = true;
    modalState.modalIsLoading = false;
    modalState.showModal = true;
    await wrapper.vm.$forceUpdate();
    expect(wrapper.findComponent(BaseLoader).exists()).toBe(false);
  });

  it('renders the modal header when showHeader is true', async () => {
    modalState.showHeader = true;
    modalState.showCloseButton = true;
    await wrapper.vm.$forceUpdate();
    expect(wrapper.find('.modal-header').exists()).toBe(true);
  });

  it('renders the modal title when modalTitle is set', async () => {
    modalState.modalTitle = 'Test Title';
    modalState.showHeader = true;
    await wrapper.vm.$forceUpdate();
    expect(wrapper.find('.small-heading').text()).toBe('Test Title');
  });

  it('renders the close button when showCloseButton is true', async () => {
    modalState.showCloseButton = true;
    modalState.showHeader = true;
    await wrapper.vm.$forceUpdate();
    expect(wrapper.find('.close-button').exists()).toBe(true);
  });

  it('renders the callback actions when callbackActions are provided', async () => {
    modalState.callbackActions = [{ label: 'Action 1', callback: vi.fn() }];
    await wrapper.vm.$forceUpdate();
    expect(wrapper.find('.modal-actions').exists()).toBe(true);
    expect(wrapper.findComponent(BaseButton).exists()).toBe(true);
  });

  it('closes the modal on overlay click', async () => {
    await wrapper.find('.modal-overlay').trigger('click');
    expect(useModal().close).toHaveBeenCalled();
  });

  it('does not close the modal on content click', async () => {
    await wrapper.find('.modal-container').trigger('click');
    expect(useModal().close).not.toHaveBeenCalled();
  });

  // TODO: figure out how to test keydown events
  it.skip('closes the modal on Escape key press', async () => {
    const spy = vi.spyOn(useModal(), 'close');
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    await document.dispatchEvent(event);
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
  });
});
