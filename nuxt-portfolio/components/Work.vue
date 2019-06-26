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
          :src="info.rightImage"
          :alt="info.rightImageAlt"
          class="sample right"
        />
      </div>
    </div>
    <div class="column is-5 work-description">
      <Header tag="h6">{{ info.meta }}</Header>
      <Header tag="h2" decorator>{{ info.title }}</Header>
      <p>
        {{ info.description }}
      </p>
      <p v-if="info.link">
        <ButtonLink :href="info.link" class="button">
          View Work
        </ButtonLink>
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
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.is--work {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 2px;
  overflow: hidden;
  background-color: $darkBlue-3;
  box-shadow: -4px 4px 50px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s, box-shadow 1s;
  @media (max-width: $tablet) {
    padding-top: 0;
    margin-left: 0;
    margin-right: 0;
  }
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  // @media (min-width: $tablet) {
  //   background-color: $darkBlue-3;
  //   box-shadow: 0 2px 20px rgba(0, 0, 0, 0.33);
  // }
  h6 {
    margin: 0;
    text-transform: uppercase;
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
  }
  .work-imagery {
    padding-top: 0;
    @media (min-width: $tablet) {
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
    }
    @media (max-width: $tablet) {
      padding-left: 0;
      padding-right: 0;
    }
    .work-sample {
      position: relative;
      z-index: 10;
      .sample {
        @media (min-width: $tablet) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
