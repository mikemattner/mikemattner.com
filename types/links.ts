import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Link extends ParsedContent {
  title: string;
  date: string;
  description: string;
  tag: string[];
  link: string;
}

export interface SortedLinkItem {
  year: string;
  links: Link[];
}

export interface SortedLinks {
  [key: string]: SortedLinkItem;
}
