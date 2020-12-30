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
          <Header tag="h6" class="text-small">{{ info.year }}</Header>
          <Header tag="h3" class="display-6">{{ info.title }}</Header>
          <p v-html="info.description"></p>
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
    // overflow: hidden;
    @media (max-width: $tablet) {
      grid-column: main-content;
      margin-bottom: $defaultPadding;
    }
  }
  .work-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // &:after {
    //   content: '';
    //   display: block;
    //   position: absolute;
    //   top: ($defaultPadding/2) * -1;
    //   bottom: ($defaultPadding/2) * -1;
    //   left: ($defaultPadding/2) * -1;
    //   right: ($defaultPadding/2) * -1;
    //   border-radius: $radius-large;
    //   background-color: rgba($black, 0.5);
    //   transition: $transition-cubic;
    //   opacity: 0;
    //   transform: scale(1.2);
    //   pointer-events: none;
    //   filter: blur(1.5rem);
    //   box-shadow: 0 0 5px rgba(0, 0, 0, 0);
    // }
    // &:hover {
    //   &:after {
    //     opacity: 1;
    //     transform: scale(1);
    //     filter: blur(0);
    //     box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
    //   }
    // }

    .work-info {
      font-size: 0.75rem;
      transition: $transition-slow-ease;
      padding: $defaultPadding 0;
      z-index: 2;
      position: relative;
    }
    .work-image {
      background-color: $black;
      border-radius: $radius-large;
      img {
        margin-bottom: 0;
      }
      @media (min-width: $tablet) {
        position: relative;
        height: 350px;
        overflow: hidden;
        img {
          @include cover-background(center);
          z-index: 1;
        }
      }
    }
  }
  h6 {
    font-family: $sans-serif-font;
    margin-top: 0;
    margin-bottom: 0;
    color: $blueSteel;
  }
  h3 {
    margin-top: 0.25rem;
    font-family: $sans-serif-font;
    font-weight: 700;
  }
}
</style>
