<template>
  <div class="project-list-item">
    <header class="project-list-item__header">
      <time><Icon name="ri:apps-2-fill" /> {{ listYear(project.year) }}</time>
      <div class="project-list-item__actions">
        <BaseButton :href="`${project.url}/watchers`" target="_blank" size="xs" color="secondary" variant="text">
          <Icon name="ri:eye-fill" /> <span>{{ project.watchers }}</span>
        </BaseButton>
        <BaseButton :href="`${project.url}/stargazers`" target="_blank" size="xs" color="secondary" variant="text">
          <Icon name="ri:star-fill" /> <span>{{ project.stars }}</span>
        </BaseButton>
      </div>
    </header>
    <div class="project-list-item__info flow">
      <h3 class="small-heading">
        <a :href="project.url" target="_blank">{{ project.name }}</a>
      </h3>
      <p class="small-text" v-html="project.description"></p>
    </div>
    <div class="project-list-item__tags">
      <BaseButton
        v-for="(item, index) in project.topics"
        :key="item"
        :href="`https://github.com/topics/${item}`"
        target="_blank"
        size="xs"
        color="secondary"
        variant="solid"
      >
        {{ item }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listYear } from '../utils/formatDate';

const props = defineProps({
  project: { type: Object as PropType<ProjectItem>, required: true },
});
</script>

<style lang="scss" scoped>
.project-list-item {
  height: 100%;
  border-radius: 7px;
  background-color: var(--block-quote-bg);
  padding: var(--sizing-lg);
  display: flex;
  flex-direction: column;

  &__header {
    font-size: var(--size-step--2);
    font-family: var(--code-font-family);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-xxl);
    color: var(--blog-card-date-color);
    padding: 0;

    .button {
      font-size: var(--size-step--2);
      font-family: var(--code-font-family);
    }

    svg {
      // width: 1.25rem;
      // height: 1.25rem;
      flex-shrink: 0;
    }

    time {
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-sm);
  }

  &__info {
    padding: var(--sizing-xxl) 0;
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    margin-top: auto;

    .button {
      font-size: var(--size-step--2);
      font-family: var(--code-font-family);
    }
  }
}
</style>