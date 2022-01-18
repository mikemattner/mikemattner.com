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
            square
            overlay
          />
        </div>
        <div class="work-info">
          <div class="work-year">{{ info.year }}</div>
          <Header tag="h3" class="display-5" decorator>{{ info.title }}</Header>
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
      position: relative;
      text-align: left;
      padding: $defaultPadding math.div($defaultPadding, 1.5);
      z-index: 2;

      @media (max-width: $tablet) {
        margin: math.div($defaultPadding, 2) * -1;
        margin-bottom: 0;
        padding: $defaultPadding math.div($defaultPadding, 1.5);
        background-color: rgba($darkerShadeBackground, 0.95);
        border-radius: $radius-large;
        box-shadow: $boxShadowLarge;
      }
      @media (min-width: $tablet) {
        z-index: 1;
        border-radius: $radius-large;
        // background-image: $linearDarkGradient;
      }
    }

    .work-tech {
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
    .work-image {
      @media (min-width: $tablet) {
        z-index: 2;
      }
      ::v-deep .work-sample img {
        margin: 0 auto;
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
          grid-column: 6 / span 7;
          grid-row: 1;
        }
        .work-image {
          height: auto;
          grid-column: 1 / span 5;
          grid-row: 1;
          ::v-deep figure {
            margin: 0 auto;
          }
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
          grid-column: 1 / span 7;
          grid-row: 1;
        }
        .work-image {
          height: auto;
          grid-column: 8 / span 5;
          grid-row: 1;
          ::v-deep figure {
            margin: 0 auto;
          }
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
  }
}
</style>
