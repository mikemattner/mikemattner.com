import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect } from 'vitest';
import BaseToggle from '../BaseToggle.vue';

type Severity = 'primary' | 'success' | 'warning';

describe('BaseBadge.vue', () => {
  it('renders input correctly', async () => {
    const wrapper = await mountSuspended(BaseToggle, {
      props: {
        type: 'primary',
        modelValue: false,
      },
    });
    expect(wrapper.find('.toggle-switch').exists()).toBe(true);
  });

  it('renders correctly with different types', () => {
    const types: Array<Severity> = ['primary', 'success', 'warning'];
    types.forEach(async (type) => {
      const wrapper = await mountSuspended(BaseToggle, {
        props: { type: type, modelValue: false },
      });
      expect(wrapper.classes()).toContain(`toggle-switch--${type}`);
    });
  });

  it('updates modelValue on change', async () => {
    const wrapper = await mountSuspended(BaseToggle, {
      props: { type: 'primary', modelValue: false },
    });
    const input = wrapper.find('input');
    await input.setValue(true);
    expect(wrapper.emitted()['change']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('renders slot content', async () => {
    const wrapper = await mountSuspended(BaseToggle, {
      props: { type: 'primary', modelValue: false },
      slots: { default: 'Toggle Content' },
    });
    const label = wrapper.find('label');
    expect(label.text()).toBe('Toggle Content');
  });
});
