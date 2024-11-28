import { mountSuspended } from '@nuxt/test-utils/runtime';
import BaseImage from '@/components/BaseImage.vue';
import { describe, it, expect } from 'vitest';

describe('BaseImage.vue', () => {
  it('renders correctly with required props', async () => {
    const wrapper = await mountSuspended(BaseImage, {
      props: { src: 'image.jpg' },
    });
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('image.jpg');
    expect(img.attributes('alt')).toBe('');
  });

  it('renders correctly with all props', async () => {
    const wrapper = await mountSuspended(BaseImage, {
      props: { src: 'image.jpg', alt: 'An image', width: '200', height: '100' },
    });
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('image.jpg');
    expect(img.attributes('alt')).toBe('An image');
    expect(img.attributes('width')).toBe('200');
    expect(img.attributes('height')).toBe('100');
  });

  it('renders figcaption when caption slot is provided', async () => {
    const wrapper = await mountSuspended(BaseImage, {
      props: { src: 'image.jpg' },
      slots: { caption: '<span>Caption text</span>' },
    });
    const figcaption = wrapper.find('figcaption');
    expect(figcaption.exists()).toBe(true);
    expect(figcaption.text()).toBe('Caption text');
  });

  it('does not render figcaption when caption slot is not provided', async () => {
    const wrapper = await mountSuspended(BaseImage, {
      props: { src: 'image.jpg' },
    });
    const figcaption = wrapper.find('figcaption');
    expect(figcaption.exists()).toBe(false);
  });
});
