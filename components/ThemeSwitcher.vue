<template>
  <button @click="next()" class="theme-toggle" :class="{ 'is-dark': mode === 'dark' }" title="Toggle theme">
    <svg class="sun-and-moon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
      <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
      <g class="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
      <mask class="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useColorMode, useCycleList } from '@vueuse/core';

const mode = useColorMode({
  initialValue: 'dark',
  storageKey: 'mikemattner-com-theme',
});
const { next } = useCycleList(['dark', 'light'], { initialValue: mode });
</script>

<style lang="scss" scoped>
.theme-toggle {
  --size: 2.5rem;
  --icon-fill: var(--headline-font-color);
  --icon-fill-hover: var(--headline-font-color);
  transition: var(--transition);
  color: var(--font-color);

  background: transparent;
  border: 0;
  padding: 0;
  border-radius: 7px;
  background-color: var(--border-color);

  // @media (max-width: 715px) {
  //   --size: 3.5rem;
  // }

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: var(--sizing-sm);

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke-linecap: round;
  }

  // @media (hover: none) {
  //   --size: 30px;
  // }

  .sun-and-moon {
    transform-origin: center center;

    .moon,
    .sun,
    .sun-beams {
      transform-origin: center center;
      fill: var(--icon-fill);
    }

    .sun-beams {
      stroke: var(--icon-fill);
      stroke-width: 2px;
    }
  }

  &:hover,
  &:focus-visible {
    // @media (min-width: 716px) {
    //   transform: scale(1.2);
    // }
    background-color: var(--color-primary);

    .moon,
    .sun {
      fill: var(--icon-fill-hover);
    }
    .sun-beams {
      stroke: var(--icon-fill-hover);
    }
  }

  .sun {
    transition: var(--transition-cubic);
  }

  .sun-beams {
    transition: transform 1s cubic-bezier(0.62, 0.16, 0.13, 1.01), opacity 0.25s cubic-bezier(0.62, 0.16, 0.13, 1.01),
      color 0.25s cubic-bezier(0.62, 0.16, 0.13, 1.01);
  }

  .moon > circle {
    transform: translateX(0);
    transition: var(--transition-cubic);
  }

  &.is-dark {
    .sun {
      transform: scale(1.75);
    }

    .sun-beams {
      transform: rotateZ(-90deg);
      transition: transform 0.25s cubic-bezier(0.62, 0.16, 0.13, 1.01),
        opacity 0.25s cubic-bezier(0.62, 0.16, 0.13, 1.01), color 0.25s cubic-bezier(0.62, 0.16, 0.13, 1.01);
      opacity: 0;
    }

    .moon > circle {
      transform: translateX(-7px);
    }
  }
}
</style>
