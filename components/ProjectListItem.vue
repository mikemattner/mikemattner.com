<template>
  <div class="project-list-item">
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
    <div class="project-list-item__meta">
      <time v-tooltip="`Updated ${formatDate(project.updated)}.`"
        ><Icon name="ri:calendar-fill" /> {{ listYear(project.year) }}</time
      >
      <div class="language-item"><Icon name="ri:code-box-fill" /> {{ project.language }}</div>
      <div class="project-list-item__actions">
        <BaseButton
          :href="`${project.url}/watchers`"
          v-tooltip="`${project.watchers} watchers`"
          target="_blank"
          size="xs"
          color="primary"
          variant="text"
        >
          <Icon name="ri:eye-fill" /> <span>{{ project.watchers }}</span>
        </BaseButton>
        <BaseButton
          :href="`${project.url}/stargazers`"
          v-tooltip="`${project.stars} stargazers`"
          target="_blank"
          size="xs"
          color="primary"
          variant="text"
        >
          <Icon name="ri:star-fill" /> <span>{{ project.stars }}</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { listYear, formatDate } from '../utils/formatDate';

const props = defineProps({
  project: { type: Object as PropType<ProjectItem>, required: true },
});
</script>

<style lang="scss" scoped>
.project-list-item {
  height: 100%;
  border-radius: var(--border-radius);
  background-color: var(--block-quote-bg);
  padding: var(--sizing-lg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // box-shadow: var(--box-shadow-long);

  &__meta {
    font-size: var(--size-step--2);
    font-family: var(--code-font-family);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-xxl);
    color: var(--blog-card-date-color);
    padding: 0 0 0;

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

    .language-item {
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
      margin-right: auto;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sizing-sm);
  }

  &__info {
    padding: var(--sizing-md) 0 0 0;
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: var(--sizing-sm);
    margin-top: auto;
    padding: var(--sizing-xl) 0 var(--sizing-lg);

    .button {
      font-size: var(--size-step--2);
      font-family: var(--code-font-family);
    }
  }
}
</style>
