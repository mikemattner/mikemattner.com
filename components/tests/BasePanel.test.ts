import { mountSuspended } from '@nuxt/test-utils/runtime';
import BasePanel from '@/components/BasePanel.vue';
import { describe, it, expect } from 'vitest';

describe('BasePanel.vue', () => {
  it('renders correctly with default props', async () => {
    const wrapper = await mountSuspended(BasePanel);
    expect(wrapper.classes()).toContain('base-panel');
  });

  it('renders header slot content', async () => {
    const wrapper = await mountSuspended(BasePanel, {
      slots: { header: '<div>Header Content</div>' },
    });
    const header = wrapper.find('.base-panel__header');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Header Content');
  });

  it('renders default slot content', async () => {
    const wrapper = await mountSuspended(BasePanel, {
      slots: { default: '<div>Panel Content</div>' },
    });
    const content = wrapper.find('.base-panel__content');
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe('Panel Content');
  });

  it('renders footer slot content', async () => {
    const wrapper = await mountSuspended(BasePanel, {
      slots: { footer: '<div>Footer Content</div>' },
    });
    const content = wrapper.find('.base-panel__footer');
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe('Footer Content');
  });

  it('toggles panel content visibility on header click', async () => {
    const wrapper = await mountSuspended(BasePanel);
    const header = wrapper.find('.base-panel__header');
    const content = wrapper.find('.base-panel__content');

    expect(content.classes()).not.toContain('is-active');
    await header.trigger('click');
    expect(content.classes()).toContain('is-active');
    await header.trigger('click');
    expect(content.classes()).not.toContain('is-active');
  });

  it('initializes with open prop', async () => {
    const wrapper = await mountSuspended(BasePanel, {
      props: { open: true },
    });
    const content = wrapper.find('.base-panel__content');
    expect(content.classes()).toContain('is-active');
  });
});
