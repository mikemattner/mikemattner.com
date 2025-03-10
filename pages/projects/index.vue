<template>
  <main>
    <article class="projects-layout">
      <div class="sidebar-area flow">
        <h1 class="page-header"><small>Small / Random</small> Projects</h1>
        <hr />
      </div>
      <div class="project-content flow">
        <div v-if="pending" class="loading">
          <BaseLoader />
          <p>Loading</p>
        </div>
        <template v-if="!pending && !error">
          <header class="project-heading">
            <h2 class="h4-heading">Github Projects</h2>
            <BaseButton
              href="https://github.com/mikemattner?tab=repositories"
              class="external-link"
              target="_blank"
              size="xs"
              color="primary"
              variant="solid"
            >
              <span>View All</span> <Icon name="ri:external-link-fill" />
            </BaseButton>
          </header>
          <p>
            A truncated list of repos of note at my GitHub profile. Some of these are actively maintained, while the
            rest have been left to languish.
          </p>
          <div class="github-grid">
            <ProjectListItem v-for="project in sortedProjects" :project="project" :key="project.name" />
          </div>
        </template>
      </div>
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
} = await useAsyncData<Array<GithubRepos>>(
  'mountains',
  () => $fetch('https://api.github.com/users/mikemattner/repos'),
  { lazy: true }
);

const targetProjects = [
  {
    name: 'mikemattner.com',
    title: 'This Website',
    description:
      'The repo that runs this website. Uses Nuxt 3, Nuxt Content, Decap CMS, and a sprinkling of TypeScript.',
    language: 'Vue',
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
      const description = targetProjects
        .filter((item) => item.name === proj.name)
        .map((item) => {
          return item.description;
        })
        .toString();
      const language = targetProjects
        .filter((item) => item.name === proj.name)
        .map((item) => {
          return item.language;
        })
        .toString();
      const obj: ProjectItem = {
        name: proj.name,
        description: description ? description : proj.description,
        url: proj.html_url,
        topics: proj.topics,
        stars: proj.stargazers_count,
        watchers: proj.watchers_count,
        year: proj.created_at,
        updated: proj.pushed_at,
        language: language ? language : proj.language,
      };
      return obj;
    })
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
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

  .project-content {
    grid-column: 1 / -1;

    p {
      max-width: 65ch;
    }
  }

  .project-heading {
    display: flex;
    align-items: center;
    gap: var(--sizing-lg);

    .external-link {
      display: flex;
      align-items: center;
      gap: var(--sizing-sm);
      font-size: var(--size-step--1);
    }

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 1 / -1;
    min-height: 400px;
    font-size: var(--size-step--2);
    text-transform: uppercase;
  }

  .github-grid {
    display: grid;
    gap: var(--sizing-xxl);
    grid-template-columns: 1fr;
    grid-column: 1 / -1;
    margin-block-start: var(--sizing-xxl);

    @media (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
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
}
</style>
