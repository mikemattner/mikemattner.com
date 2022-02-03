<template>
  <div class="personal-projects-page">
    <PageHero dark>
      <Header
        tag="h1"
        class="text-huge"
        decorator
        v-html="personalProjectsPage.title"
      ></Header>
      <p v-html="personalProjectsPage.subtitle"></p>
    </PageHero>
    <section class="section layout">
      <div class="personal-projects">
        <ProjectList :projects="projects" />
      </div>
    </section>
    <WaveRight flip />
  </div>
</template>

<script>
export default {
  name: 'Projects',
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, app, error }) {
    let personalProjectsPage
    let projects
    try {
      personalProjectsPage = await $content('personalProjects').fetch()
      projects = await fetch('https://api.github.com/users/mikemattner/repos', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }).then((res) => res.json())
    } catch (e) {
      try {
        personalProjectsPage = await $content('personalProjects').fetch()
        projects = await fetch(
          'https://api.github.com/users/mikemattner/repos',
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        ).then((res) => res.json())
      } catch (e) {
        return error({ statusCode: 404, message: 'Content not found' })
      }
    }
    return {
      personalProjectsPage,
      projects,
    }
  },
  head() {
    return {
      titleTemplate: `Personal Projects – %s`,
    }
  },
}
</script>

<style lang="scss">
.personal-projects-page {
  .hero {
    padding-bottom: $defaultPadding * 2;

    h1 {
      margin-bottom: 0rem;
      grid-column: main-content / span 6;
      @media (min-width: $desktop) {
        grid-column: main-content / span 7;
      }
    }
    p {
      grid-column: main-content / span 6;
    }
  }
  .section {
    padding: 0 0 $defaultPadding 0;
    background-color: $darkShadeBackground;

    .personal-projects {
      grid-column: main-content / span 6;
      @media (min-width: $tablet) {
        grid-column: 2 / span 8;
      }
      @media (min-width: $desktop) {
        grid-column: 2 / span 8;
      }
    }
  }
}
</style>
