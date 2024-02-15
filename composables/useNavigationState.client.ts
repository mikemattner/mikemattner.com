import { readonly, onMounted } from 'vue';
export const useNavigationOpen = () => useState<boolean>('navOpen', () => false);

export const useNavigationState = () => {
  let body: HTMLElement;

  onMounted(() => {
    body = window.document.body;
  });

  const toggleNav = () => {
    useNavigationOpen().value = !useNavigationOpen().value;
    body.classList.toggle('no--scroll');
  };

  return {
    navOpen: readonly(useNavigationOpen()),
    toggleNav,
  };
};
