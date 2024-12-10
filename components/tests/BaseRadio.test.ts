import { mountSuspended } from '@nuxt/test-utils/runtime';
import BaseRadio from '@/components/BaseRadio.vue';
import { describe, it, expect } from 'vitest';

describe('BaseRadio.vue', () => {
  it('renders correctly with required props', async () => {
    const wrapper = await mountSuspended(BaseRadio, {
      props: { id: 'radio1', name: 'radio', value: 'value1' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('id')).toBe('radio1');
    expect(input.attributes('name')).toBe('radio');
    expect(input.attributes('value')).toBe('value1');
  });

  it('updates modelValue on change', async () => {
    const wrapper = await mountSuspended(BaseRadio, {
      props: { id: 'radio1', name: 'radio', value: 'value1', modelValue: '' },
    });
    const input = wrapper.find('input');
    await input.setValue(true);
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['value1']);
  });

  it('renders slot content', async () => {
    const wrapper = await mountSuspended(BaseRadio, {
      props: { id: 'radio1', name: 'radio' },
      slots: { default: 'Radio Label' },
    });
    const label = wrapper.find('label');
    expect(label.text()).toBe('Radio Label');
  });
});