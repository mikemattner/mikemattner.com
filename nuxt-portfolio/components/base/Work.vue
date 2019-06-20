<template>
  <div
    :class="[
      'columns is-vcentered is--work',
      right == true ? 'right' : '',
      left == true ? 'left' : ''
    ]"
  >
    <div class="column is-7 work-imagery">
      <div class="work-sample">
        <StaticImage
          :src="info.leftImage"
          :alt="info.leftImageAlt"
          class="sample left"
        />
        <StaticImage
          :src="info.rightImage"
          :alt="info.rightImageAlt"
          class="sample right"
        />
      </div>
    </div>
    <div
      :class="[
        'column is-5 work-description',
        pullRight == true ? 'right' : '',
        pullLeft == true ? 'left' : ''
      ]"
    >
      <Header tag="h6" v-html="info.meta"></Header>
      <Header tag="h2" decorator v-html="info.title"></Header>
      <p>
        {{ info.description }}
      </p>
      <p v-if="info.link">
        <a :href="info.link" class="button" rel="nofollow" target="_blank"
          >View Work</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    left: Boolean,
    pullLeft: Boolean,
    pullRight: Boolean,
    info: {}
  }
}
</script>

<style scoped lang="scss">
.is--work {
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 75vh;
  h6 {
    margin: 0;
    text-transform: uppercase;
    // color: $darkBlue-10;
    letter-spacing: 0.0675rem;
    font-weight: 400;
  }
  h2 {
    margin-top: 0.25rem;
  }
  &.left {
    .work-description {
      order: 2;
    }
    .work-imagery {
      order: 1;
    }
  }
  &.right {
    .work-description {
      order: 1;
      @media (max-width: $tablet) {
        order: 2;
      }
    }
    .work-imagery {
      order: 2;
      @media (max-width: $tablet) {
        order: 1;
      }
    }
  }
  .work-description {
    z-index: 12;
    @media (min-width: $tablet) {
      &.left {
        margin-left: -3rem;
      }
      &.right {
        margin-right: -3rem;
      }
    }
  }
  .work-imagery {
    .work-sample {
      position: relative;
      z-index: 10;
      .sample {
        border-radius: 2px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
        @media (min-width: $tablet) {
          &.left {
            margin-left: -2rem;
          }
          &.right {
            margin-left: 2rem;
            margin-top: -20rem;
          }
        }
        @media (max-width: $tablet) {
          &.left {
            margin-left: -2rem;
          }
          &.right {
            margin-left: 2rem;
            margin-top: -10rem;
          }
        }
      }
    }
  }
  .brand {
    width: 100px;
  }
}
</style>
