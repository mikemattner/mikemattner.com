<template>
  <BaseNavigationButton class="base-navigation__button" :nav-open="navOpen" @toggle="toggle" />

  <nav class="base-navigation__controls" :class="{ active: navOpen }">
    <ul class="navigation-list">
      <li class="navigation-list__item" v-for="item in primaryNavigationList" :key="item.title">
        <NuxtLink
          class="navigation-list__item-link"
          :class="{ 'active-path': showActiveSubPath(item) }"
          active-class="active-path"
          :to="item.url"
        >
          <span @click="toggle()">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <ThemeSwitcher class="base-navigation__theme-switch" />
  <SearchButton class="base-navigation__search" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useMediaQuery } from '@vueuse/core';
import { useNavigationState } from '@/composables/useNavigationState.client';
import { navigationList } from '@/data/navigationList';

const isMobile = useMediaQuery('(max-width: 715px)');
const route = useRoute();
const pathIsWriting = computed<boolean>(() => {
  return route.matched[0].name === 'blog-slug' || route.matched[0].name === 'blog-tag-slug';
});
const pathIsAbout = computed<boolean>(() => route.matched[0].path.includes('about'));
const pathIsProjects = computed<boolean>(() => route.matched[0].path.includes('projects'));
const pathIsNotes = computed<boolean>(() => {
  return route.matched[0].name === 'notes-slug' || route.matched[0].name === 'notes-tag-slug';
});

const primaryNavigationList = computed<NavigationList[]>(() => {
  return navigationList.filter((item) => item.primary);
});

const showActiveSubPath = (item: NavigationList): boolean => {
  if (item.title === 'Blog') return pathIsWriting.value;
  if (item.title === 'About') return pathIsAbout.value;
  if (item.title === 'Projects') return pathIsProjects.value;
  if (item.title === 'Notes') return pathIsNotes.value;
  return false;
};

const { navOpen, toggleNav } = useNavigationState();

const toggle = () => {
  if (isMobile.value) {
    toggleNav();
  }
};

const showSearch = ref(false);

onMounted(() => {
  if (!isMobile.value) {
    showSearch.value = true;
  }
});

watch(isMobile, () => {
  if (isMobile.value) {
    showSearch.value = false;
  } else {
    showSearch.value = true;
  }
});
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
    font-size: var(--size-step-0);

    @media (max-width: 715px) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: var(--size-step-3);
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
        color: var(--headline-font-color);

        &:hover {
          text-decoration-color: var(--headline-font-color);
        }
      }
    }
  }

  .router-link-active,
  .active-path {
    text-decoration-color: var(--headline-font-color);
  }

  &__search {
    margin-left: var(--sizing-xxl);

    @media (max-width: 715px) {
      order: 2;
      margin-left: 0;
      z-index: 1000;
    }
  }

  &__theme-switch {
    margin-left: var(--sizing-xxl);

    @media (max-width: 715px) {
      order: 1;
      margin-left: auto;
      z-index: 1000;
    }
  }

  &__button {
    @media (max-width: 715px) {
      order: 3;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
      background-color: var(--background-color);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.125s 0.25s ease-in-out, clip-path 0.75s;
      transform: translateX(50vh);
      clip-path: circle(25% at 150% -50%);
      opacity: 0;
      visibility: hidden;

      &.active {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        transition: all 0.125s ease-in-out, clip-path 0.75s;
        clip-path: circle(100%);

        .navigation-list__item {
          opacity: 1;
          transform: translateX(0);

          &:nth-child(1) {
            transition: all 0.125s 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          &:nth-child(2) {
            transition: all 0.125s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          &:nth-child(3) {
            transition: all 0.125s 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          &:nth-child(4) {
            transition: all 0.125s 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          &:nth-child(5) {
            transition: all 0.125s 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
        }
      }
    }
  }
}
</style>
