import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect } from 'vitest';
import BaseInput from '../BaseInput.vue';
import BaseButton from '../BaseButton.vue';

describe('BaseInput.vue', () => {
  it('renders input correctly', async () => {
    const wrapper = await mountSuspended(BaseInput, {
      props: {
        id: 'test-input',
        name: 'test',
        modelValue: '',
      },
    });
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('handles user input correctly', async () => {
    const wrapper = await mountSuspended(BaseInput, {
      props: {
        id: 'test-input',
        name: 'test',
        modelValue: '',
      },
    });
    const input = wrapper.find('input');
    await input.setValue('test value');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['test value']);
  });

  it('clear button works correctly', async () => {
    const wrapper = await mountSuspended(BaseInput, {
      props: {
        id: 'test-input',
        name: 'test',
        modelValue: 'test value',
        clearable: true,
      },
      global: {
        components: {
          BaseButton,
        },
        stubs: {
          Icon: true,
        },
      },
    });
    const clearButton = wrapper.find('.clear');
    await clearButton.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['']);
  });

  it('emits focus and blur events correctly', async () => {
    const wrapper = await mountSuspended(BaseInput, {
      props: {
        id: 'test-input',
        name: 'test',
        modelValue: '',
      },
    });
    const input = wrapper.find('input');
    await input.trigger('focus');
    expect(wrapper.emitted().focus).toBeTruthy();
    await input.trigger('blur');
    expect(wrapper.emitted().blur).toBeTruthy();
  });
});
