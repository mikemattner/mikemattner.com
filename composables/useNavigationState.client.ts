import { ref, readonly } from 'vue';
const navOpen = ref<boolean>(false);

export const useNavigationState = () => {
  const body: HTMLElement = window.document.body;

  const toggleNav = () => {
    navOpen.value = !navOpen.value;
    body.classList.toggle('no--scroll');
  };

  return {
    navOpen: readonly(navOpen),
    toggleNav,
  };
};
