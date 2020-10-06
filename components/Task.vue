<template>
    <div class="w-full flex justify-between">
        <p>{{ text }}</p>
        <p>{{ time }}</p>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        text: { default: 'TODO' },
        time: { default: 25 }
    },
    data() {
        return {
            editing: false
        }
    }
}
</script>