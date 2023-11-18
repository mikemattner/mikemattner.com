<template>
  <main>
    <article class="about-layout">
      <div class="sidebar-area flow">
        <h1>/Uses</h1>
        <p class="intro">A less than comprehensive look at the tools I use. Because this is what people do now.</p>
        <hr />
      </div>
      <div class="about-content flow">
        <h2 class="h3-heading">Desk</h2>
        <ul>
          <li>Birch butcher block counter top stained with a dark walnut butcher block sealer</li>
          <li><a href="https://www.amazon.com/gp/product/B071KGDGNK/">VIVO Electric Stand Up Desk Frame</a></li>
        </ul>
        <h2 class="h3-heading">Mac Setup</h2>
        <ul>
          <li>
            <a href="https://www.apple.com/macbook-pro/">MacBook Pro 16"</a> M2 Pro/M3 Pro &mdash; loving that Space
            Black 😃
          </li>
          <li>2017 Space Gray Magic Keyboard (discontinued)</li>
          <li>2017 Space Gray Magic Mouse (discontinued)</li>
          <li>2x LG - 24" IPS LED 4K UHD (24UD58-B) monitors</li>
        </ul>
        <h2 class="h3-heading">Software</h2>
        <ul>
          <li>VS Code</li>
          <li>Sublime Text 4</li>
          <li>Sublime Merge</li>
          <li>iTerm 2</li>
          <li>Parallels w/Windows 11</li>
          <li>Figma</li>
          <li>Linearity Curve</li>
          <li>Pixelmator Pro</li>
          <li>Raycast</li>
          <li>Spotify</li>
          <li>Todoist (been using since they launched)</li>
        </ul>
      </div>
      <div class="timeline-content flow"></div>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: '/Uses',
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
      grid-column: 1 / span 18;
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

    hr {
      margin-block-start: 3rem;
    }
  }

  .intro {
    letter-spacing: 0.01em;
    font-weight: 300;
    font-size: var(--size-step-1);
    line-height: 1.3;
    max-width: 50ch;
  }

  .profile-image {
    aspect-ratio: 2 / 1.5;

    @media (min-width: 501px) {
      grid-column: 1 / span 4;
      aspect-ratio: 2 / 1.5;
    }

    @media (min-width: 768px) {
      grid-column: 1 / -1;
      aspect-ratio: 2 / 1.5;
      align-self: self-start;
    }

    @media (min-width: 961px) {
      grid-column: 1 / 19;
      aspect-ratio: 2 / 1.5;
      margin-bottom: var(--sizing-xxxl);
    }
  }

  .former-site-iterations {
    margin: var(--sizing-xxl) 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: var(--sizing-lg);
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .iteration-link {
      font-family: var(--code-font-family);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--sizing-sm);
      margin: 0;
      padding: var(--sizing-sm);
      text-decoration: none;
      border: 1px solid var(--border-color);
      aspect-ratio: 1;
      box-shadow: 5px 5px 0 0 var(--border-color);

      &:hover {
        background-color: var(--block-quote-bg);
        box-shadow: 0 0 0 0 var(--border-color);
      }
    }
  }

  .timeline-content {
    @media (min-width: 501px) {
      grid-column: 1 / span 4;
    }
    @media (min-width: 768px) {
      grid-column: 1 / -1;
    }
    @media (min-width: 961px) {
      grid-column: 21 / -1;
      grid-row: 2 / span 2;
    }
  }

  .timeline {
    list-style: none;
    margin-top: var(--sizing-xxl);

    li {
      position: relative;
      padding: 0.5em 0 2em;
      padding-left: 2em;
      border-left: 1px solid var(--border-color);

      &:before {
        width: 1em;
        height: 1em;
        display: block;
        top: 0.7em;
        position: absolute;
        left: -0.53em;
        content: '';
        border: 2px solid var(--border-color);
        background: var(--background-color);
        transition: var(--transition-cubic);
        box-shadow: 2px 2px 0 0 var(--border-color);
      }

      &:hover {
        &:before {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 0 var(--color-primary);
        }
      }
    }
  }
}
</style>
