<template>
  <div class="w-1/6">
      <h1>Tasks</h1>
      <div class="space-y-4">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "TaskList",
}
</script>
