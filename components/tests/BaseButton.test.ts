import { mountSuspended } from '@nuxt/test-utils/runtime';
import BaseButton from '@/components/BaseButton.vue';
import { describe, it, expect } from 'vitest';

describe('BaseButton.vue', () => {
  it('renders correctly with default props', async () => {
    const wrapper = await mountSuspended(BaseButton);
    expect(wrapper.classes()).toContain('button');
  });

  it('renders correctly with isLoading prop', async () => {
    const wrapper = await mountSuspended(BaseButton, {
      props: { isLoading: true },
    });
    expect(wrapper.find('.button--loader').exists()).toBe(true);
    expect(wrapper.find('.button--content').classes()).toContain('is--loading');
  });

  it('renders correctly with different sizes', () => {
    const sizes: Array<ButtonSize> = ['md', 'sm', 'xs'];
    sizes.forEach(async (size) => {
      const wrapper = await mountSuspended(BaseButton, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(`button--${size}`);
    });
  });

  it('renders correctly with different variants', () => {
    const variants: Array<ButtonVariant> = ['solid', 'outline', 'text', 'link'];
    variants.forEach(async (variant) => {
      const wrapper = await mountSuspended(BaseButton, {
        props: { variant },
      });
      expect(wrapper.classes()).toContain(`button--${variant}`);
    });
  });

  it('renders correctly with different colors', () => {
    const colors: Array<ButtonColor> = ['primary', 'secondary'];
    colors.forEach(async (color) => {
      const wrapper = await mountSuspended(BaseButton, {
        props: { color },
      });
      expect(wrapper.classes()).toContain(`button--${color}`);
    });
  });

  it('renders correctly with href prop', async () => {
    const wrapper = await mountSuspended(BaseButton, {
      props: { href: 'https://example.com' },
    });
    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('href')).toBe('https://example.com');
  });

  it('renders correctly with to prop', async () => {
    const wrapper = await mountSuspended(BaseButton, {
      props: { to: '/' },
      global: {
        components: {
          'nuxt-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    });
    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('href')).toBe('/');
  });

  it('renders correctly with icon', async () => {
    const wrapper = await mountSuspended(BaseButton, {
      props: { hasIcon: true },
    });
    expect(wrapper.classes()).toContain('button--has-icon');
  });
});
