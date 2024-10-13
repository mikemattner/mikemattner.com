declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

type ButtonColor = 'primary' | 'secondary';

type ButtonVariant = 'solid' | 'outline' | 'text' | 'link';

type ButtonSize = 'md' | 'sm' | 'xs';

interface NavigationList {
  title: string;
  url: string;
}

interface ProjectItem {
  name: string;
  description: string;
  url: string;
  topics: Array<string>;
  stars: string;
  watchers: string;
  year: string;
  updated: string;
  language: string;
}

interface GithubRepos {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: string;
  watchers_count: string;
  pushed_at: string;
  topics: Array<string>;
  created_at: string;
  language: string;
  updated_at: string;
}
