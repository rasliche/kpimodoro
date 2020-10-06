<template>
  <div class="w-1/6">
      <h1>Tasks</h1>
      <div class="space-y-4">
        <slot></slot>
      </div>
      <div>
        <input type="text" name="task" id="task">
        <button @click="addTask">Add</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "TaskList",
}
</script>
