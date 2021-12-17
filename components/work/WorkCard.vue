<template>
  <div
    :class="[
      'is--work',
      right == true ? 'right' : '',
      left == true ? 'left' : '',
    ]"
  >
    <div class="work-body">
      <div class="work-content">
        <div class="work-image">
          <StaticImage
            :src="info.image.src"
            :alt="info.image.alt"
            class="sample"
          />
        </div>
        <div class="work-info">
          <Header tag="h6" class="text-normal">{{ info.year }}</Header>
          <Header tag="h3" class="display-6">{{ info.title }}</Header>
          <p v-html="info.description"></p>
          <Button v-if="info.link" :href="info.link" target="_blank" link
            ><span>Visit</span>
            <fa-icon icon="external-link-alt" size="sm"></fa-icon
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    left: Boolean,
    info: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.is--work {
  .work-body {
    position: relative;
    @media (max-width: $tablet) {
      grid-column: main-content;
      margin-bottom: $defaultPadding;
    }
  }
  .work-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .work-info {
      font-size: 0.75rem;
      transition: $transition-slow-ease;
      padding: $defaultPadding 0 $defaultPadding * 2;
      z-index: 2;
      position: relative;
      text-align: left;
    }
    .work-image {
      background-color: $black;
      border-radius: $radius-large;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
        0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11),
        0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 64px rgba(0, 0, 0, 0.11);
      margin-left: ($defaultPadding/2) * -1;
      margin-right: ($defaultPadding/2) * -1;
      img {
        margin-bottom: 0;
      }
      @media (min-width: $tablet) {
        position: relative;
        height: 350px;
        overflow: hidden;
      }
    }
  }
  h6 {
    margin-top: 0;
    margin-bottom: 0;
    color: $middleGray;
    font-weight: 400;
  }
  h3 {
    margin-top: 0.25rem;
    font-weight: 700;
  }
}
</style>
