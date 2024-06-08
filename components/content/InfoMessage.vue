<template>
  <div class="info-message" :class="classes">
    <div class="info-message__icon">
      <Icon :name="icon" />
    </div>
    <div class="info-message__content">
      <ContentSlot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'info' | 'warning' | 'success'>,
    default: 'info',
  },
});
const classes = computed(() => {
  return [`info-message--${props.type}`];
});
const icon = computed(() => {
  if (props.type === 'warning') return 'ri:error-warning-fill';
  if (props.type === 'success') return 'ri:checkbox-circle-fill';
  return 'ri:information-2-fill';
});
</script>

<style lang="scss" scoped>
.info-message {
  --message-color: var(--color-green);
  --message-color-bg: hsla(var(--color-green-hsl), 50%);

  &--info {
    --message-color: var(--color-blue);
    --message-color-bg: hsla(var(--color-blue-hsl), 5%);
  }

  &--success {
    --message-color: var(--color-green);
    --message-color-bg: hsla(var(--color-green-hsl), 10%);
  }

  &--warning {
    --message-color: var(--color-red);
    --message-color-bg: hsla(var(--color-red-hsl), 10%);
  }

  display: grid;
  grid-template: 'icon body' 'icon body' 1fr / auto 1fr;
  column-gap: var(--sizing-md);
  position: relative;
  padding: var(--sizing-lg) var(--sizing-md);
  border-left: 4px solid var(--message-color);
  font-size: var(--size-step-0);
  background-color: var(--message-color-bg);
  border-radius: var(--sizing-sm);
  line-height: 1.5;
  color: var(--headline-font-color);

  @media (min-width: 989px) {
    margin-left: calc(var(--sizing-xl) * -1);
    margin-right: calc(var(--sizing-xl) * -1);
    padding: var(--sizing-lg) var(--sizing-lg) var(--sizing-lg) var(--sizing-md);
    column-gap: var(--sizing-lg);
  }

  &__content {
    grid-area: body;
    align-self: start;
    justify-self: start;
  }

  &__icon {
    content: '“';
    color: var(--message-color);
    grid-area: icon;
    align-self: start;
    justify-self: start;
    line-height: 1;

    @media (min-width: 989px) {
      font-size: 1.25em;
    }
  }
}
</style>
