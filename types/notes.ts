import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Note extends ParsedContent {
  title: string;
  date: string;
  tag: string[];
}

export interface SortedNoteItem {
  year: string;
  notes: Note[];
}

export interface SortedNotes {
  [key: string]: SortedNoteItem;
}
