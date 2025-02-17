<template>
  <div class="article-navigation">
    <div v-if="prev" class="prev-article">
      <h2 class="small-text font-weight-body">Previous {{ label }}</h2>
      <NuxtLink :to="prev._path" :title="prev.title" class="prev-button" variant="link" size="md" color="primary">
        {{ prev.title }}
      </NuxtLink>
    </div>
    <div v-if="next" class="next-article">
      <h2 class="small-text font-weight-body">Next {{ label }}</h2>
      <NuxtLink :to="next._path" :title="next.title" class="next-button" variant="link" size="md" color="primary">
        {{ next.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute();

type ContentType = 'blog' | 'links';

const props = defineProps({
  content: { type: String as PropType<ContentType>, default: 'writing' },
});

const query = computed<string>(() => {
  if (props.content === 'links') return '/links';
  return '/blog';
});

const label = computed<string>(() => {
  if (props.content === 'links') return 'Link';
  return 'Article';
});

const [prev, next] = await queryContent(query.value)
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround({ _path: path });
</script>

<style lang="scss" scoped>
.article-navigation {
  border-top: 1px solid var(--border-color);
  margin-block-start: 4rem;
  font-family: var(--sans-font-family);

  @media (min-width: 500px) {
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.prev-button,
.next-button {
  line-height: 1.2;
  margin-top: var(--sizing-md);
  font-weight: 900;
}

.prev-article {
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: self-start;
  padding: var(--sizing-xxxl) var(--sizing-md);

  @media (min-width: 500px) {
    height: 100%;
  }
}
.next-article {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--sizing-xxxl) var(--sizing-md);
  border-top: 1px solid var(--border-color);
  @media (min-width: 500px) {
    border-top: none;
    border-left: 1px solid var(--border-color);
    height: 100%;
    text-align: right;
    align-items: flex-end;
  }
}
</style>
