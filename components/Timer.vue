<template>
  <div>
      <span class="text-6xl">
          {{ displayTime }}
      </span>
      <button @click="toggle">{{ !isRunning ? "Start" : "Pause" }}</button>
      <button @click="reset">Reset</button>
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
            console.log('Timer started.')
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
        },
        reset() {
            console.log('Timer reset.')
            this.pauseTimer()
            
        },
        pauseTimer() {
            console.log('Timer paused.')
            if (this.isRunning) {
                console.log('paused')
                this.isRunning = !this.isRunning
                clearInterval(this.timerInterval)
            }
        }
    }
}
</script>
