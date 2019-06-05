<template>
  <div class="columns is-vcentered is--work">
    <div class="column is-5 work-description">
      <h6>2016 / Development / AEM</h6>
      <h2 class="decorator">Experiential Design</h2>
      <p>
        Working with a world class UX team, I implemented the design and
        experience of the interactive touch control piece that featured video,
        complex animations, and user lead interactions. All as a custom piece in
        AEM.
      </p>
      <p>
        <a
          href="https://www.whirlpool.com/laundry/cabrio-top-load-washer-set.html"
          class="button"
          rel="nofollow"
          target="_blank"
          >View Work</a
        >
      </p>
    </div>
    <div class="column is-7">
      <div class="work-sample">
        <StaticImage
          :src="`img/whirlpool/secondary.jpg`"
          :alt="'Whirlpool Top Load'"
          width="609"
          height="457"
          class="sample left"
        />
        <StaticImage
          :src="`img/whirlpool/primary.jpg`"
          :alt="'Whirlpool Top Load'"
          width="609"
          height="457"
          class="sample right"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.is--work {
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  .work-description {
    z-index: 12;
    @media (min-width: $tablet) {
      &.right {
        margin-left: -3rem;
      }
      &.left {
        margin-right: -3rem;
      }
    }
    @media (max-width: $tablet) {
      order: 2;
    }
  }
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
          margin-left: 4rem;
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
  .brand {
    width: 100px;
  }
}
</style>
