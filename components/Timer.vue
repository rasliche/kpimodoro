<template>
  <div>
      <span class="text-6xl">
          {{ displayTime }}
      </span>
      <button @click="toggle">{{ !isRunning ? "Start" : "Pause" }}</button>
  </div>
</template>

<script>
const machine = {
    initialState: 'paused',
    paused: {

    },
    focus: {

    },
    shortBreak: {

    },
    longBreak: {
        
    }
}

export default {
    data() {
        return {
            focusTime: 25 * 60,
            shortBreakTime: 5 * 60,
            longBreakTime: 20 * 60,
            timeRemaining: 25 * 60,
            isRunning: false,
            mode: 'focus'
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
        toggle() {
            if (this.isRunning) {
                console.log('toggled')
                this.pauseTimer()
            } else (
                this.runTimer()
            )
        },
        runTimer() {
            if (!this.timerInterval) {
                this.timerInterval = setInterval(() => {
                        this.isRunning = true
                    if (this.timeRemaining > 0) {
                        this.timeRemaining--
                    } else {
                        clearInterval(this.timerInterval)
                        this.isRunning = false
                        this.timeRemaining = this.focusTime
                    }
                }, 1000)
            }
        },
        pauseTimer() {
            console.log('in the pause')
            if (this.running) {
                console.log('paused')
                this.running = !this.running
                clearInterval(this.timerInterval)
            }
        }
    }
}
</script>
