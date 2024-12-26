import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect, beforeEach, vi, type MockedFunction } from 'vitest';
import BaseNavigationMenu from '@/components/BaseNavigationMenu.vue';
import { useNavigationState } from '@/composables/useNavigationState.client';
import { navigationList } from '@/data/navigationList';
import { nextTick, computed } from 'vue';

vi.mock('@/composables/useNavigationState.client', () => ({
  useNavigationState: vi.fn(),
}));

describe('BaseNavigationMenu.vue', () => {
  let navOpen;
  let toggleNav: MockedFunction<() => {}>;

  beforeEach(() => {
    navOpen = ref(false);
    toggleNav = vi.fn();
    (useNavigationState as MockedFunction<typeof useNavigationState>).mockReturnValue({ navOpen, toggleNav });
  });

  it('renders correctly', async () => {
    const wrapper = await mountSuspended(BaseNavigationMenu);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders navigation list items', async () => {
    const wrapper = await mountSuspended(BaseNavigationMenu);
    const items = wrapper.findAll('.navigation-list__item');
    const primaryNavigationList = computed<NavigationList[]>(() => {
      return navigationList.filter((item) => item.primary);
    });
    expect(items.length).toBe(primaryNavigationList.value.length);
  });

  // TODO: figure out how to properly trigger these click events

  it.skip('calls toggle function when a navigation item is clicked', async () => {
    const wrapper = await mountSuspended(BaseNavigationMenu);
    const firstItem = wrapper.find('.navigation-list__item div');
    await firstItem.trigger('click');
    await nextTick();
    expect(toggleNav).toHaveBeenCalled();
  });

  it.skip('changes navOpen state when toggle function is called', async () => {
    const wrapper = await mountSuspended(BaseNavigationMenu);
    const button = wrapper.findComponent({ name: 'BaseNavigationButton' });
    await button.trigger('click');
    await nextTick();
    expect(toggleNav).toHaveBeenCalled();
  });
});
