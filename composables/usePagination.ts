import { computed, Ref, ref } from 'vue';

interface PaginationConfig {
  rowsPerPage?: Ref<number>;
  arrayToPaginate: Ref<Array<string>>;
  currentPage: Ref<number>;
}

export function usePagination(config: PaginationConfig) {
  const rowsPerPage = config.rowsPerPage || ref(100);

  const paginatedArray = computed(() =>
    config.arrayToPaginate.value.slice(
      (config.currentPage.value - 1) * rowsPerPage.value,
      config.currentPage.value * rowsPerPage.value
    )
  );

  const numberOfPages = computed(() => Math.ceil((config.arrayToPaginate.value.length || 0) / rowsPerPage.value));

  return {
    paginatedArray,
    numberOfPages,
  };
}
