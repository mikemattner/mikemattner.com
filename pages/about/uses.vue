<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1 class="page-header"><small>What I Work With</small> Uses</h1>
        <p class="intro">A less than comprehensive look at the tools I use.</p>
        <ul class="sub-menu">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/about/uses">Uses</NuxtLink></li>
          <li><NuxtLink to="/about/resume">Resume</NuxtLink></li>
        </ul>
        <hr />
      </div>
      <PrimaryImage src="/images/desktop.jpg" has-overlay class="desk-image">
        <template v-slot:caption>My desk in a mostly clean state.</template>
      </PrimaryImage>
      <div class="about-content">
        <h2 class="h4-heading section-header">Desk</h2>
        <div class="section-content columns flow">
          <h3 class="small-heading">Hardware</h3>
          <ul>
            <li>
              <a
                href="https://www.homedepot.com/p/Hampton-Bay-4-ft-L-x-25-in-D-Unfinished-Birch-Butcher-Block-Countertop-in-With-Standard-Edge-birch-4ft-x-25in/319222041"
              >
                Birch butcher block counter top stained with a dark walnut butcher block sealer
              </a>
            </li>
            <li><a href="https://www.amazon.com/gp/product/B071KGDGNK/">VIVO Electric Stand Up Desk Frame</a></li>
          </ul>

          <h3 class="small-heading">Accessories</h3>
          <ul>
            <li>
              <a
                href="https://ugmonk.com/collections/the-gather-collection/products/gather-zigzag-tray-walnut?variant=42414409121942"
              >
                Gather Wood Zigzag Tray, Walnut
              </a>
            </li>
            <li>
              <a href="https://www.upliftdesk.com/e7-led-desk-lamp-with-clamp-by-uplift-desk/">
                LED Desk Lamp E7 with Clamp, Black
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="about-content">
        <h2 class="h4-heading section-header">Setup</h2>
        <div class="section-content columns flow">
          <h3 class="small-heading">Laptop</h3>
          <ul>
            <li>
              <a href="https://www.apple.com/macbook-pro/">MacBook Pro 16"</a> M2 Pro/M3 Pro &mdash; loving that Space
              Black 😃
            </li>
          </ul>

          <h3 class="small-heading">Accessories</h3>
          <ul>
            <li>2017 Space Gray Magic Keyboard 2</li>
            <li>2017 Space Gray Magic Mouse 2</li>
            <li>
              <a
                href="https://www.keychron.com/products/keychron-k17-pro-alice-layout-qmk-via-wireless-custom-mechanical-keyboard?variant=40588287279193"
              >
                Keychron K17 Pro, RGB, Gateron Red (Hot Swappable)
              </a>
            </li>
            <li>
              <a
                href="https://www.keychron.com/products/keychron-k4-he-wireless-magnetic-switch-custom-keyboard?variant=42175218024537"
              >
                Keychron K4 HE Wireless Magnetic Switch Custom Keyboard, Special Edition Black
              </a>
            </li>
            <li>
              <a
                href="https://www.arrayperipherals.com/vector-macropad"
              >
                Array Peripherals, Vector Macropad, Black, Tactile Cherry Switches
              </a>
            </li>
            <li>
              <a href="https://www.logitech.com/en-us/products/mice/mx-master-3s-mac-bluetooth-mouse.910-006569.html">
                2023 MX Master 3s for Mac, Space Gray
              </a>
            </li>
            <li>
              <a href="https://www.lg.com/us/monitors/lg-24ud58-b-4k-uhd-led-monitor">
                2x LG - 24" IPS LED 4K UHD (24UD58-B) monitors
              </a>
            </li>
          </ul>

          <h3 class="small-heading">Fun Stuff</h3>
          <ul>
            <li><a href="https://www.apple.com/ipad-air/">iPad Air 5th Generation</a> <del>2014 iPad Air 2</del></li>
            <li><a href="https://www.apple.com/airpods-pro/">AirPods Pro 2</a></li>
          </ul>
        </div>
      </div>
      <div class="about-content">
        <h2 class="h4-heading section-header">Software</h2>
        <div class="section-content columns flow">
          <h3 class="small-heading">Development</h3>
          <ul>
            <li>VS Code</li>
            <li>Sublime Text 4</li>
            <li>Sublime Merge</li>
            <li>iTerm 2</li>
            <li>Parallels w/Windows 11</li>
          </ul>

          <h3 class="small-heading">Design</h3>
          <ul>
            <li>Figma</li>
            <li>Affinity Publisher 2 <del>Adobe InDesign</del></li>
            <li>Affinity Designer 2 <del>Linearity Curve</del> <del>Adobe Illustrator</del></li>
            <li>Affinity Photo 2 <del>Pixelmator Pro</del> <del>Adobe Photoshop</del></li>
          </ul>

          <h3 class="small-heading">Productivity</h3>
          <ul>
            <li>Todoist (I've been using this since it launched)</li>
            <li>Raycast</li>
            <li>Spotify</li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Uses',
});
</script>

<style lang="scss" scoped>
.about-layout {
  margin-block-start: 2rem;
  margin-block-end: 2rem;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: var(--sizing-xxl) var(--sizing-xxl);
  max-width: var(--max-width);
  margin-inline: auto;

  @media (min-width: 501px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(28, 1fr);
    gap: var(--sizing-xxl) 0;
    margin-block-start: 6rem;
    margin-block-end: 6rem;
  }

  .about-content {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 961px) {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: subgrid;
      align-items: baseline;
    }
  }

  .section-header {
    @media (min-width: 961px) {
      grid-column: 1 / span 6;
    }

    @media (max-width: 960px) {
      margin: var(--sizing-xxl) 0 var(--sizing-lg);
    }
  }

  .section-content {
    p {
      max-width: 65ch;
    }

    @media (min-width: 961px) {
      grid-column: 8 / -1;
    }
  }

  .sidebar-area {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 961px) {
      grid-column: 1 / span 28;
    }

    h1 {
      margin-block-start: 0;
    }

    hr {
      margin-block-start: 3rem;
    }
  }

  .intro {
    letter-spacing: 0.01em;
    font-weight: 300;
    font-size: var(--size-step-1);
    line-height: 1.4;
    max-width: 65ch;
    text-wrap: pretty;
  }

  .desk-image {
    aspect-ratio: 2 / 1.25;
    overflow: hidden;
    border-radius: var(--border-radius);

    @media (min-width: 501px) {
      grid-column: 1 / span 4;
      aspect-ratio: 2 / 1;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      aspect-ratio: 2 / 1;
      align-self: self-start;
    }

    @media (min-width: 961px) {
      grid-column: 1 / -1;
      aspect-ratio: 2 / 1;
      margin-bottom: var(--sizing-xxxl);
    }
  }
}
</style>
