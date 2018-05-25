<template>
    <div class="content shadow">
        <p>Press start, read the following passage, and then press stop to find out how fast you read!</p>
        Word count: {{wordCount}}<br>
        Timer: <timer :running="running" @stop="onStop"></timer>
        <div class="results" v-if="timerValue">
            WPM: {{ wpm }}
        </div>

        <br>
        <button @click="stop">
            <span v-if="running">Stop</span>
            <span v-else>Start</span>
        </button>
        <br>
        {{words}}
    </div>
</template>

<style lang="scss" scoped>
button {
    color: inherit;
}
</style>


<script>
import { defaults } from '@/calculations'
import Timer from '@/components/Timer'

export default {
    name: 'ReadingSpeed',
    data() {
        return {
            running: false,
            timerValue: '',
            words: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
        }
    },
    methods: {
        stop() {
            this.running = !this.running
        },
        onStop(value) {
            this.timerValue = value
            defaults.wordsPerMinute = this.wpm
        }
    },
    computed: {
        wordCount() {
            return this.words.split(/\s+/g).length
        },
        wpm() {
            return Math.round(this.wordCount / (this.timerValue / 60))
        }
    },
    components: {
        Timer,
    }
}
</script>
