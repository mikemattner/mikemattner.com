import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect } from 'vitest';
import BaseBadge from '../BaseBadge.vue';

type Severity = 'info' | 'success' | 'warning' | 'light';

describe('BaseBadge.vue', () => {
  it('renders input correctly', async () => {
    const wrapper = await mountSuspended(BaseBadge, {
      props: {
        type: 'info',
      },
    });
    expect(wrapper.find('.badge').exists()).toBe(true);
  });

  it('renders correctly with different types', () => {
    const types: Array<Severity> = ['info', 'success', 'warning', 'light'];
    types.forEach(async (type) => {
      const wrapper = await mountSuspended(BaseBadge, {
        props: { type: type },
      });
      expect(wrapper.classes()).toContain(`badge--${type}`);
    });
  });
});
