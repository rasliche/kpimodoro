<template>
  <div class="prose">
      <nuxt-content :document="roadmap" />
  </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
      const roadmap = await $content('roadmap').fetch()

      return { roadmap }
    }
  }
</script>
