<template>
  <div class="project-card">
    <div class="project-description">
      <div class="project-description__header">
        <div class="project-description__header-title">
          <div class="project-year">{{ listYear(info.year) }}</div>
          <Header tag="h3" class="display-5" decorator>{{ info.name }}</Header>
        </div>
        <div class="project-description__header-stats">
          <div class="chip">
            <FaIcon icon="eye" size="sm"></FaIcon> {{ info.watchers }}
          </div>
          <div class="chip">
            <FaIcon icon="star" size="sm"></FaIcon> {{ info.stars }}
          </div>
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
      <ul class="project-tech">
        <li v-for="(item, index) in info.topics" :key="index">{{ item }}</li>
      </ul>
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
      top: math.div($defaultPadding, 4);
      right: math.div($defaultPadding, 4);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: math.div($defaultPadding, 4);
      .chip {
        padding: 0 math.div($defaultPadding, 4);
        aspect-ratio: 2 / 1;
        border-radius: $radius;
        background: $bodyBackground;
      }
    }
  }
  .project-tech {
    font-size: $small;
    display: flex;
    align-items: flex-start;
    margin-bottom: 0;
    padding-left: 0;
    margin-top: math.div($defaultPadding, 6);
    line-height: 1.25;

    li {
      margin-right: math.div($defaultPadding, 4);
      margin-left: 0;
      padding: math.div($defaultPadding, 6);
      border-radius: $radius;
      background-color: $bodyBackground;
      line-height: 1;
      &:before {
        display: none;
      }
    }
  }
}
</style>
