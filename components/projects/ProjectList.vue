<template>
  <section class="project-list two-col">
    <ProjectCard
      v-for="(item, index) in projectList"
      :key="`project-${index}`"
      :info="item"
    />
  </section>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      projectList: [],
      targetProjects: [
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
      ],
    }
  },
  mounted() {
    this.sortProjects()
  },
  methods: {
    sortProjects() {
      this.projectList = this.projects
        .filter((item) => {
          return this.targetProjects.some((f) => {
            return f.name === item.name
          })
        })
        .map((proj) => {
          const title = this.targetProjects
            .filter((item) => item.name === proj.name)
            .map((item) => {
              return item.title
            })
            .toString()
          const obj = {
            name: title,
            description: proj.description,
            url: proj.html_url,
            topics: proj.topics,
            stars: proj.stargazers_count,
            watchers: proj.watchers_count,
            year: new Date(proj.pushed_at),
          }
          return obj
        })
        .sort((a, b) => b.year - a.year)
    },
  },
}
</script>

<style lang="scss" scoped>
.project-list {
  padding: 0;
}
</style>
