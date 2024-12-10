import { mountSuspended } from '@nuxt/test-utils/runtime';
import PrimaryImage from '@/components/PrimaryImage.vue';
import { describe, it, expect } from 'vitest';

describe('PrimaryImage.vue', () => {
  it('renders correctly with required props', async () => {
    const wrapper = await mountSuspended(PrimaryImage, {
      props: { src: 'image.jpg' },
    });
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('image.jpg');
  });

  it('applies overlay class when hasOverlay is true', async () => {
    const wrapper = await mountSuspended(PrimaryImage, {
      props: { src: 'image.jpg', hasOverlay: true },
    });
    expect(wrapper.find('.primary-image__image').classes()).toContain('has-overlay');
  });

  it('applies hover class when hasHover is true', async () => {
    const wrapper = await mountSuspended(PrimaryImage, {
      props: { src: 'image.jpg', hasHover: true },
    });
    expect(wrapper.find('.primary-image__image').classes()).toContain('has-hover');
  });

  it('renders slot content in caption', async () => {
    const wrapper = await mountSuspended(PrimaryImage, {
      props: { src: 'image.jpg' },
      slots: { caption: '<figcaption>Caption Text</figcaption>' },
    });
    const caption = wrapper.find('figcaption');
    expect(caption.exists()).toBe(true);
    expect(caption.text()).toBe('Caption Text');
  });
});