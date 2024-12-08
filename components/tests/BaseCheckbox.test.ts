import { mountSuspended } from '@nuxt/test-utils/runtime';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
import { describe, it, expect } from 'vitest';
import type { DOMWrapper } from '@vue/test-utils';

describe('BaseCheckbox.vue', () => {
  it('renders correctly with required props', async () => {
    const wrapper = await mountSuspended(BaseCheckbox, {
      props: { id: 'checkbox1', name: 'checkbox', value: 'value1' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('id')).toBe('checkbox1');
    expect(input.attributes('name')).toBe('checkbox');
    expect(input.attributes('value')).toBe('value1');
  });

  it('updates modelValue on change', async () => {
    const wrapper = await mountSuspended(BaseCheckbox, {
      props: { id: 'checkbox1', name: 'checkbox', modelValue: false },
    });
    const input = wrapper.find('input');
    await input.setValue(true);
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('renders slot content', async () => {
    const wrapper = await mountSuspended(BaseCheckbox, {
      props: { id: 'checkbox1', name: 'checkbox' },
      slots: { default: 'Checkbox Label' },
    });
    const label = wrapper.find('label');
    expect(label.text()).toBe('Checkbox Label');
  });
});
