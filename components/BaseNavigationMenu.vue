<template>
  <BaseNavigationButton :nav-open="navOpen" @toggle="toggle" />

  <nav class="base-navigation__controls" :class="{ active: navOpen }">
    <ul class="navigation-list">
      <li class="navigation-list__item" v-for="item in navigationList" :key="item.title">
        <NuxtLink
          class="navigation-list__item-link"
          :class="{ 'active-path': pathIsWriting && item.title === 'Blog' }"
          variant="text"
          size="xs"
          color="secondary"
          active-class="active-path"
          :to="item.url"
        >
          <span @click="toggle()">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
    <div class="base-navigation__sub-controls">
      <RssButton />
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMediaQuery } from '@vueuse/core';
import { useNavigationState } from '@/composables/useNavigationState.client';

const isMobile = useMediaQuery('(max-width: 715px)');
const route = useRoute();
const pathIsWriting = computed<boolean>(() => route.matched[0].name === 'blog-slug');

const navigationList: NavigationList[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: '/Uses',
    url: '/uses',
  },
];

const { navOpen, toggleNav } = useNavigationState();

const toggle = () => {
  if (isMobile.value) {
    toggleNav();
  }
};
</script>

<style lang="scss" scoped>
.base-navigation {
  .navigation-list {
    display: flex;
    align-items: center;
    gap: var(--sizing-xxl);
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--size-step--1);
    font-family: var(--code-font-family);
    mix-blend-mode: difference;

    @media (max-width: 715px) {
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      font-size: var(--size-step-4);
      gap: var(--sizing-sm);
    }

    &__item {
      margin: 0;
      padding: 0;

      @media (max-width: 715px) {
        transform: translateX(20px);
        transition: var(--transition-cubic);
        opacity: 0;
      }

      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration-color: transparent;
        padding: 0.5rem 0.25rem;
        color: var(--color-light);

        &:hover {
          text-decoration-color: var(--color-light);
        }
      }
    }
  }

  .router-link-active,
  .active-path {
    text-decoration-color: var(--color-light);
  }

  &__sub-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    mix-blend-mode: difference;

    @media (max-width: 715px) {
      justify-content: flex-end;
      transform: translateX(20px);
      transition: var(--transition-cubic);
      opacity: 0;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-xxl);
    grid-template-columns: 2fr auto;
    flex-grow: 1;

    @media (max-width: 715px) {
      z-index: 999;
      position: fixed;
      top: 0;
      padding: 4.5rem 1.25rem 2.5rem;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      background-color: var(--background-color-t);
      backdrop-filter: blur(10px);
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
      transition: all 0.125s 0.5s ease-in-out, clip-path 0.75s;
      transform: translateX(50vh);
      clip-path: circle(25% at 150% -50%);
      opacity: 0;
      visibility: hidden;

      &.active {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        transition: var(--transition), clip-path 0.75s;
        clip-path: circle(100%);

        .navigation-list__item {
          opacity: 1;
          transform: translateX(0);

          &:nth-child(1) {
            transition: all 0.25s 0.375s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          &:nth-child(2) {
            transition: all 0.25s 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          &:nth-child(3) {
            transition: all 0.25s 0.625s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
        }

        .base-navigation__sub-controls {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.25s 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
    }
  }
}
</style>
