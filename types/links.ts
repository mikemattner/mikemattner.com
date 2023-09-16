import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Link extends ParsedContent {
  title: string;
  date: string;
  description: string;
  tag: string[];
  link: string;
}
