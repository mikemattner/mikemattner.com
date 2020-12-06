<template>
  <div
    :class="[
      'columns is-vcentered is--work',
      right == true ? 'right' : '',
      left == true ? 'left' : '',
    ]"
  >
    <div class="column is-6-desktop is-half-tablet work-imagery">
      <div class="work-sample">
        <StaticImage
          :src="info.image.src"
          :alt="info.image.alt"
          class="sample right"
        />
      </div>
      <!-- <StaticImage
        :src="`img/brand/${info.logo}`"
        :alt="info.title"
        class="brand-logo"
      /> -->
    </div>
    <div class="column is-6-desktop is-half-tablet work-description">
      <Header tag="h6" class="text-small">{{ info.brand }}</Header>
      <Header tag="h3" class="display-6" decorator>{{ info.title }}</Header>
      <p v-html="info.description"></p>
      <ul class="list--tags">
        <li v-for="(tag, index) in info.tags" :key="index">
          {{ tag }}
        </li>
      </ul>
      <p v-if="info.link">
        <ButtonLink :href="info.link" class="button"> View Work </ButtonLink>
      </p>
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
  margin-top: 5rem;
  margin-bottom: 5rem;
  transition: transform 0.5s, box-shadow 1s;
  @media (max-width: $tablet) {
    padding-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: $radius-small;
    overflow: hidden;
    background-color: $darkShadeBackground;
    box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.15),
      -2px 2px 20px rgba(0, 0, 0, 0.15), -4px 4px 50px rgba(0, 0, 0, 0.5);
  }
  @media (min-width: $tablet) {
    .work-imagery {
      position: relative;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: $darkShadeBackground;
        opacity: 0.75;
        z-index: 10;
        transition: all 0.5s ease-in-out;
      }
    }
    &:hover {
      .work-imagery {
        &:after {
          opacity: 0;
        }
      }
    }
    // &.right {
    //   &:hover {
    //     .work-description {
    //       transform: translateX(2rem);
    //     }
    //     .work-imagery {
    //       transform: translateX(-2rem);
    //     }
    //   }
    // }
    // &.left {
    //   &:hover {
    //     .work-description {
    //       transform: translateX(-2rem);
    //     }
    //     .work-imagery {
    //       transform: translateX(2rem);
    //     }
    //   }
    // }
  }
  h6 {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.0675rem;
    font-weight: 400;
    color: rgba($white, 0.35);
  }
  h3 {
    margin-top: 0.25rem;
    // font-size: 2rem;
  }
  &.left {
    .work-description {
      order: 2;
      @media (min-width: $widescreen) {
        margin-left: -4rem;
      }
    }
    .work-imagery {
      order: 1;
      @media (min-width: $widescreen) {
        margin-left: 2rem;
      }
    }
  }
  &.right {
    .work-description {
      order: 1;
      @media (max-width: $tablet) {
        order: 2;
      }
      @media (min-width: $widescreen) {
        margin-left: 2rem;
      }
    }
    .work-imagery {
      order: 2;
      @media (max-width: $tablet) {
        order: 1;
      }
      @media (min-width: $widescreen) {
        margin-left: -4rem;
        background-color: $darkShadeBackground;
      }
    }
  }
  .work-description {
    z-index: 12;
    transition: all 0.5s ease-in-out;
    @media (max-width: $tablet) {
      // padding: 0;
    }
    @media (min-width: $tablet) {
      background-color: $darkShadeBackground;
      padding: 3rem 3rem;
      border-radius: $radius-small;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.15),
        -2px 2px 20px rgba(0, 0, 0, 0.15), -4px 4px 50px rgba(0, 0, 0, 0.5);
    }
  }
  .work-imagery {
    padding-top: 0;
    transition: all 0.5s ease-in-out;
    // background-color: $darkShadeBackground;
    @media (min-width: $tablet) {
      // padding-bottom: 0;
      // padding-left: 0;
      // padding-right: 0;
      padding: 0;
      border-radius: $radius-small;
      box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.15),
        -2px 2px 20px rgba(0, 0, 0, 0.15), -4px 4px 50px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: $tablet) {
      padding-left: 0;
      padding-right: 0;
    }
    .brand-logo {
      display: none;
      @media (min-width: $tablet) {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        z-index: 100;
        transform: translate3d(-50%, -50%, 0);
      }
    }
    .work-sample {
      position: relative;
      z-index: 10;
      overflow: hidden;
      img {
        // transition: $transition;
        // &:hover {
        //   transform: scale(1.05);
        // }
      }
      .sample {
        @media (min-width: $tablet) {
          margin-bottom: 0;
        }
      }
    }
  }
  .list--tags {
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 0.5rem 0.5rem 0.5rem 0;
      padding: 0.25rem 0.5rem;
      border-radius: 20px;
      font-size: 0.675rem;
      text-transform: uppercase;
      background-color: $bodyBackground;
      color: rgba($white, 0.35);
    }
  }
}
</style>
