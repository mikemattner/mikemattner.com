<template>
  <main>
    <article class="projects-layout">
      <pre>{{ sortedProjects }}</pre>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects',
});

const {
  data: projects,
  pending,
  error,
  refresh,
} = await useAsyncData<Array<GithubRepos>>('mountains', () => $fetch('https://api.github.com/users/mikemattner/repos'));

const targetProjects = [
  {
    name: 'mikemattner.com',
    title: 'This Site!',
  },
  {
    name: 'numbers',
    title: 'Numbers',
  },
  {
    name: 'macos-system-setup',
    title: 'MacOS System Setup',
  },
  {
    name: 'hello',
    title: 'Hello Dashboard',
  },
  {
    name: 'wp-theme-2016',
    title: 'WordPress Theme 2016',
  },
];

const sortedProjects = computed(() => {
  return projects.value
    ?.filter((item) => {
      return targetProjects.some((f) => {
        return f.name === item.name;
      });
    })
    .map((proj) => {
      const title = targetProjects
        .filter((item) => item.name === proj.name)
        .map((item) => {
          return item.title;
        })
        .toString();
      const obj: ProjectItem = {
        name: title,
        description: proj.description,
        url: proj.html_url,
        topics: proj.topics,
        stars: proj.stargazers_count,
        watchers: proj.watchers_count,
        year: proj.pushed_at,
      };
      return obj;
    })
    .sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime());
});
</script>

<style lang="scss" scoped>
.projects-layout {
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
      padding-bottom: var(--sizing-xxxl);
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

  .profile-image {
    aspect-ratio: 2 / 1.5;
    border-radius: 7px 50px 7px 50px;
    overflow: hidden;

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
      font-variation-settings: 'wdth' 100, 'wght' 800;
      line-height: 1;
      border-radius: 7px;

      .year {
        font-family: var(--code-font-family);
        font-weight: 400;
      }

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
        // box-shadow: 2px 2px 0 0 var(--border-color);
        border-radius: 3px;
      }

      &:hover {
        &:before {
          border-color: var(--color-primary);
          // box-shadow: 0 0 0 0 var(--color-primary);
        }
      }
    }
  }
}
</style>
