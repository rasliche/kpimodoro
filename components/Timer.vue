<template>
  <div>
      <span>
          {{ displayTime }}
      </span>
      <button @click="runTimer">Start</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            timeRemaining: 25 * 60
        }
    },
    computed: {
        displayTime() {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            return `${minutes}:${seconds > 9 ? seconds : '0'+ seconds}`
        }
    },
    methods: {
        runTimer() {
            this.timerInterval = setInterval(() => {
                this.timeRemaining--
            }, 1000)
        }
    }
}
</script>
