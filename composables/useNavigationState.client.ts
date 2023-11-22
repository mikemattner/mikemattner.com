import { readonly } from 'vue';
export const useNavigationOpen = () => useState<boolean>('navOpen', () => false);

export const useNavigationState = () => {
  const body: HTMLElement = window.document.body;

  const toggleNav = () => {
    useNavigationOpen().value = !useNavigationOpen().value;
    body.classList.toggle('no--scroll');
  };

  return {
    navOpen: readonly(useNavigationOpen()),
    toggleNav,
  };
};
