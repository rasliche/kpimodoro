<template>
    <div class="w-full flex justify-between">
            <input type="text" v-model="text">
            <input type="number" v-model="time">
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        text: { default: 'TODO' },
        time: { default: 25 }
    },
}
</script>