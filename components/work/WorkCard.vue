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
    // background-color: $darkShadeBackground;
    // border-radius: $radius;
    // box-shadow: 0 2px 25px rgba($black, 0.25);
    position: relative;
    overflow: hidden;
    @media (max-width: $tablet) {
      grid-column: main-content;
      margin-bottom: $defaultPadding;
    }
    // @media (min-width: $tablet) {
    //   &::before {
    //     content: '';
    //     padding-bottom: 70%;
    //     display: block;
    //   }
    // }
  }
  .work-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: $tablet) {
      // flex-direction: row;
      // align-items: center;
    }
    // @media (min-width: $tablet) {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    //   width: 100%;
    // }
    // @media (min-width: $tablet) {
    //   &:after {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     z-index: 2;
    //     transition: $transition-slow-ease;
    //     background-color: rgba($black, 0.7);
    //   }
    // }

    .work-info {
      font-size: 0.75rem;
      transition: $transition-slow-ease;
      padding: $defaultPadding 0;
      @media (min-width: $tablet) {
        // width: 50%;
      }
      // @media (min-width: $tablet) {
      //   padding: $defaultPadding * 2 $defaultPadding $defaultPadding / 2;
      //   position: absolute;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   z-index: 3;
      //   // transform: translateY(10%);
      //   // opacity: 0;
      // }
    }
    .work-image {
      img {
        margin-bottom: 0;
      }
      @media (min-width: $tablet) {
        position: relative;
        height: 350px;
        // width: 50%;
        overflow: hidden;
        border-radius: $radius;
        img {
          @include cover-background(center);
          z-index: 1;
        }
      }
      // @media (min-width: $tablet) {
      //   overflow: hidden;
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   right: 0;
      //   bottom: 0;
      //   width: 100%;
      //   z-index: 1;
      //   transition: $transition-slow-ease;
      //   transform: scale(1);
      //   img {
      //     @include cover-background(center);
      //     z-index: 1;
      //   }
      // }
    }
    // @media (min-width: $tablet) {
    //   &:hover {
    //     .work-image {
    //       transform: scale(1.1);
    //       transition: $transition-slow;
    //     }
    //     .work-info {
    //       opacity: 1;
    //       transform: translateY(0);
    //     }
    //     &:after {
    //       background-color: rgba($black, 0.9);
    //     }
    //   }
    // }
  }
  h6 {
    font-family: $sans-serif-font;
    // font-weight: 700;
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
