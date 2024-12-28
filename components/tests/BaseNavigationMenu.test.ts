import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect, beforeEach, vi, type MockedFunction } from 'vitest';
import BaseNavigationMenu from '@/components/BaseNavigationMenu.vue';
import { useNavigationState } from '@/composables/useNavigationState.client';
import { navigationList } from '@/data/navigationList';
import { nextTick, computed, ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { VueWrapper } from '@vue/test-utils';
import BaseNavigationButton from '../BaseNavigationButton.vue';

vi.mock('@/composables/useNavigationState.client');
vi.mock('@vueuse/core');

describe('BaseNavigationMenu.vue', () => {
  let navOpen;
  let toggleNav: MockedFunction<() => {}>;
  let wrapper: VueWrapper<InstanceType<typeof BaseNavigationMenu>>;

  beforeEach(async () => {
    navOpen = ref(false);
    toggleNav = vi.fn();
    (useNavigationState as MockedFunction<typeof useNavigationState>).mockReturnValue({
      navOpen,
      toggleNav,
    });
    (useMediaQuery as MockedFunction<typeof useMediaQuery>).mockReturnValue(ref(true));

    wrapper = await mountSuspended(BaseNavigationMenu, {
      global: {
        components: {
          BaseNavigationButton,
        },
      },
    });
  });

  it('renders correctly', async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders navigation list items', async () => {
    const items = wrapper.findAll('.navigation-list__item');
    const primaryNavigationList = computed<NavigationList[]>(() => {
      return navigationList.filter((item) => item.primary);
    });
    expect(items.length).toBe(primaryNavigationList.value.length);
  });

  it('calls toggle function when a navigation item is clicked', async () => {
    const firstItem = wrapper.find('.navigation-list__item span');
    await firstItem.trigger('click');
    await nextTick();
    expect(toggleNav).toHaveBeenCalled();
  });

  it('changes navOpen state when toggle function is called', async () => {
    const button = wrapper.find('.navbar__menu-button');
    await button.trigger('click');
    await nextTick();
    expect(toggleNav).toHaveBeenCalled();
  });
});
