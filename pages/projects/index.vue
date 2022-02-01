<template>
  <div class="personal-projects-page">
    <PageHero dark>
      <Header
        tag="h1"
        class="text-huge"
        decorator
        v-html="personalProjects.title"
      ></Header>
      <p v-html="personalProjects.subtitle"></p>
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
import { experience, skills } from '~/data/resume.yaml'

export default {
  name: 'About',
  scrollToTop: true,
  transition: 'fade',
  async asyncData({ $content, app, error }) {
    let personalProjects
    let projects
    try {
      personalProjects = await $content('personalprojects').fetch()
      projects = await fetch('https://api.github.com/users/mikemattner/repos', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }).then((res) => res.json())
    } catch (e) {
      try {
        personalProjects = await $content('about').fetch()
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
      personalProjects,
      projects,
    }
  },
  data() {
    return {
      experience,
      skills,
      images: [
        {
          src: 'personal/mike-painting.jpg',
          alt: 'What a lovely painting! Not mine.',
        },
        {
          src: 'personal/mike-profile.jpg',
          alt: 'Generic profile image.',
        },
        {
          src: 'personal/mike-cooking.jpg',
          alt: 'Tailgating in Ann Arbor.',
        },
      ],
    }
  },
  head() {
    return {
      titleTemplate: `About – %s`,
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
        grid-column: 2 / span 10;
      }
    }
  }
}
</style>
