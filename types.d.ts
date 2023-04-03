declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

type ButtonColor = 'primary' | 'secondary';

type ButtonVariant = 'solid' | 'outline' | 'text' | 'link';

type ButtonSize = 'md' | 'sm' | 'xs';
