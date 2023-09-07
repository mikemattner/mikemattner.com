import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Post extends ParsedContent {
  title: string;
  date: string;
  description: string;
  tag: string[];
}

export interface SortedPostItem {
  year: string;
  posts: Post[];
}

export interface SortedPosts {
  [key: string]: SortedPostItem;
}
