import { mountSuspended } from '@nuxt/test-utils/runtime';
import BaseNavigation from '@/components/BaseNavigation.vue';
import BaseLogo from '@/components/BaseLogo.vue';
import BaseNavigationMenu from '@/components/BaseNavigationMenu.vue';
import { describe, it, expect, beforeEach } from 'vitest';
import { VueWrapper } from '@vue/test-utils';

describe('BaseNavigation.vue', () => {
  let wrapper: VueWrapper<InstanceType<typeof BaseNavigation>>;

  beforeEach(async () => {
    wrapper = await mountSuspended(BaseNavigation, {
      stubs: {
        NuxtLink: true,
        BaseLogo: true,
        BaseNavigationMenu: true,
      },
    });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains a NuxtLink component', () => {
    const nuxtLink = wrapper.findComponent({ name: 'NuxtLink' });
    expect(nuxtLink.exists()).toBe(true);
  });

  it('contains a BaseLogo component', () => {
    const baseLogo = wrapper.findComponent(BaseLogo);
    expect(baseLogo.exists()).toBe(true);
  });

  it('contains a BaseNavigationMenu component', () => {
    const baseNavigationMenu = wrapper.findComponent(BaseNavigationMenu);
    expect(baseNavigationMenu.exists()).toBe(true);
  });
});
