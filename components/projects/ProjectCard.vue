<template>
  <div class="project-card">
    <div class="project-description">
      <div class="project-year">{{ info.year }}</div>
      <Header tag="h3" class="display-5" decorator>{{ info.title }}</Header>
      <nuxt-content :document="info" />
    </div>
    <div class="project-info">
      <Button
        v-if="info.link"
        :href="info.link.to"
        target="_blank"
        icon="external-link-alt"
        icon-right
        primary
        ghost
        small
        >{{ info.link.title }}</Button
      >
      <ul class="project-tech">
        <li v-for="(item, index) in info.tech" :key="index">{{ item }}</li>
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
}
</script>

<style scoped lang="scss">
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
