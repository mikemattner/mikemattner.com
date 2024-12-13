declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

type ButtonColor = 'primary' | 'secondary';

type ButtonVariant = 'solid' | 'outline' | 'text' | 'link';

type ButtonSize = 'md' | 'sm' | 'xs';

type PanelIcon = 'arrow' | 'plus';

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

interface SearchResults {
  id: string;
  score: number;
  terms: Array<string>;
  queryTerms: Array<string>;
  match: {
    [key: string]: Array<string>;
  };
  title: string;
  content: string;
  titles: Array<string>;
}

interface SearchList {
  id: string;
  title: string;
  content?: string;
  url: string;
}
