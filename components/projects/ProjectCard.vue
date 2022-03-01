<template>
  <div class="project-card">
    <div class="project-description">
      <div class="project-description__header">
        <div class="project-description__header-title">
          <div class="project-year">{{ listYear(info.year) }}</div>
          <Header tag="h3" class="display-5">{{ info.name }}</Header>
        </div>
        <div class="project-description__header-stats">
          <Button
            :href="`${info.url}/watchers`"
            target="_blank"
            icon="eye"
            icon-left
            icon-size="sm"
            tertiary
            ghost
            small
          >
            {{ info.watchers }}
          </Button>
          <Button
            :href="`${info.url}/stargazers`"
            target="_blank"
            icon="star"
            icon-left
            icon-size="sm"
            tertiary
            ghost
            small
          >
            {{ info.stars }}
          </Button>
        </div>
      </div>
      <p>{{ info.description }}</p>
    </div>
    <div class="project-info">
      <Button
        v-if="info.url"
        :href="info.url"
        target="_blank"
        icon="github-alt"
        icon-left
        brand-icon
        icon-size="md"
        primary
        ghost
        small
      >
        View on GitHub
      </Button>
      <div class="project-tech">
        <Button
          v-for="(item, index) in info.topics"
          :key="index"
          :href="`https://github.com/topics/${item}`"
          target="_blank"
          secondary-dark
          small
        >
          {{ item }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: null,
    },
  },
  methods: {
    listYear(date) {
      return new Date(date).getFullYear().toString()
    },
  },
}
</script>

<style scoped lang="scss">
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  font-size: 0.75rem;
  transition: $transition-slow-ease;
  text-align: left;
  padding: $defaultPadding math.div($defaultPadding, 1.5);
  background-color: rgba($darkerShadeBackground, 0.95);
  border-radius: $radius-large;
  box-shadow: $boxShadowLarge;
  z-index: 2;

  @media (max-width: $tablet) {
    margin-bottom: $defaultPadding;
  }

  .project-description__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .project-year {
      margin-top: 0;
      margin-bottom: 0;
      color: $primary;
      font-weight: 400;
      font-size: $small;
    }
    h3 {
      margin-top: 0.25rem;
    }
    &-stats {
      position: absolute;
      top: math.div($defaultPadding, 4) * -1;
      right: math.div($defaultPadding, 4);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: math.div($defaultPadding, 4);
    }
  }
  .project-tech {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0;
    padding-left: 0;
    margin-top: math.div($defaultPadding, 6);

    .button {
      margin: 0;
      margin-right: math.div($defaultPadding, 4);
    }
  }
}
</style>
