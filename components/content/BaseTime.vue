<template>
  <div class="base-time">
    <time v-for="[, text] in renderDates" :key="text" class="base-time__time">
      {{ text }}
    </time>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    createdDate: string
    lastUpdatedDate?: string
  }>()

  const renderDates = computed(() => {
    const data: [show: boolean, text: string][] = [
      [!!props.createdDate, `Created date: ${props.createdDate}`],
      [!!props.lastUpdatedDate, `Last updated date: ${props.lastUpdatedDate}`]
    ]

    return data.filter(([show]) => show)
  })
</script>

<style lang="scss">
  .base-time {
    &__time {
      display: block;
      text-align: right;
    }
  }
</style>
