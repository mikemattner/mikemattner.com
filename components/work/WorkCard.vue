<template>
  <div
    v-scroll-reveal
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
            class="work-sample"
          />
        </div>
        <div class="work-info">
          <div class="work-year">{{ info.year }}</div>
          <Header tag="h3" class="display-5">{{ info.title }}</Header>
          <p v-html="info.description"></p>
          <Button
            v-if="info.link"
            :href="info.link"
            target="_blank"
            icon="external-link-alt"
            icon-right
            primary
            ghost
            small
            >Visit</Button
          >
          <ul class="work-tech">
            <li v-for="(item, index) in info.tech" :key="index">{{ item }}</li>
          </ul>
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
      padding: $defaultPadding 0;
      z-index: 2;
      position: relative;
      text-align: left;
      padding: $defaultPadding math.div($defaultPadding, 1.5);
      background-color: rgba($darkerShadeBackground, 0.95);
      border-radius: $radius-large;

      @media (max-width: $tablet) {
        margin-top: -$defaultPadding * 1.5;
      }
    }

    .work-tech {
      font-size: $small;
      display: flex;
      align-items: flex-start;
      margin-bottom: 0;
      margin-top: math.div($defaultPadding, 4);
      line-height: 1.25;

      li {
        margin-right: math.div($defaultPadding, 1.5);
      }
    }
    .work-image {
      background-color: $black;
      border-radius: $radius-large;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
        0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11),
        0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 64px rgba(0, 0, 0, 0.11);
      margin-left: math.div($defaultPadding, 2) * -1;
      margin-right: math.div($defaultPadding, 2) * -1;
      ::v-deep .work-sample img {
        margin-bottom: 0;
        margin-top: 0;
      }
      @media (min-width: $tablet) {
        position: relative;
        height: 350px;
        overflow: hidden;
      }
    }
  }

  &.right {
    @media (min-width: $tablet) {
      .work-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
        align-items: center;
        .work-info {
          grid-column: 8 / span 5;
          grid-row: 1;
        }
        .work-image {
          height: auto;
          grid-column: 1 / span 8;
          grid-row: 1;
        }
      }
    }
  }
  &.left {
    @media (min-width: $tablet) {
      .work-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
        align-items: center;
        .work-info {
          grid-column: 1 / span 5;
          grid-row: 1;
        }
        .work-image {
          height: auto;
          grid-column: 5 / span 8;
          grid-row: 1;
          max-height: 350px;
        }
      }
    }
  }
  .work-year {
    margin-top: 0;
    margin-bottom: 0;
    color: $primary;
    font-weight: 400;
    font-size: $small;
  }
  h3 {
    margin-top: 0.25rem;
    font-weight: 700;
  }
}
</style>
