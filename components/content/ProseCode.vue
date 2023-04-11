<template>
  <div class="code-container">
    <header class="code-container-header">
      <span v-if="languageText" class="language-text">
        {{ languageText }}
      </span>
      <span v-if="filename" class="filename-text">
        {{ filename }}
      </span>
      <div v-if="isSupported" class="copy-container">
        <span class="copied-text" v-if="copied">Copied!</span>
        <BaseButton
          @click="copy(code)"
          title="Copy Code"
          class="copy-button"
          color="secondary"
          variant="text"
          size="xs"
        >
          <Icon name="ri:file-copy-line" />
        </BaseButton>
      </div>
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const { copy, copied, isSupported } = useClipboard();

const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number> | null;
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
);

const languageMap: Record<string, { text: string }> = {
  vue: {
    text: 'vue',
  },
  js: {
    text: 'javascript',
  },
  javascript: {
    text: 'javascript',
  },
  bash: {
    text: 'bash',
  },
  css: {
    text: 'css',
  },
};

const languageText = computed(() => (props.language ? languageMap[props.language]?.text : null));
</script>

<style lang="scss" scoped>
.code-container {
  position: relative;
  font-size: 1rem;
  background-color: var(--color-dark-bg-border);
  padding: 0;
  border-radius: var(--sizing-sm);
  overflow-x: auto;
  margin-block-start: 1.5rem;
  margin-block-end: 1.5rem;

  @media (min-width: 989px) {
    margin-left: calc(var(--sizing-xl) * -1);
    margin-right: calc(var(--sizing-xl) * -1);
  }

  &-header {
    padding: var(--sizing-md) var(--sizing-lg);
    border-bottom: 1px solid hsla(100, 100%, 100%, 12.5%);
    color: hsla(100, 100%, 100%, 50%);
    font-size: var(--size-step--1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.copy-container {
  display: flex;
  align-items: center;
  gap: var(--sizing-md);
  .copy-button {
    color: var(--color-light);
    font-size: var(--size-step-0);
  }
}
:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: var(--sizing-xl);
  line-height: 1.625;
  counter-reset: lines;
}

:slotted(pre code) {
  width: 100%;
  display: flex;
  flex-direction: column;
}

:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}

:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: left;
  color: rgba(115, 138, 148, 0.4);
  font-family: var(--sans-font-family);
  font-weight: 400;
  font-size: var(--size-step--1);
}

:slotted(pre code .highlight) {
  background-color: #363b46;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid red;
}
</style>
