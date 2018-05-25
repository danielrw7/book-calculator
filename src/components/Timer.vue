<template>
    <span class="timer">
        <slot name="display">{{ value }}</slot>
    </span>
</template>

<script>

export default {
    name: 'Calendar',
    props: {
        startValue: {
            type: Number,
            default: 0
        },
        direction: {
            type: Number,
            default: 1
        },
        running: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        running() {
            if (this.running) {
                this.start()
            } else {
                this.$emit('stop', this.value)
            }
        }
    },
    data() {
        return {
            startDate: new Date(),
            stopDate: new Date(),
        }
    },
    mounted() {
        if (this.running) {
            this.start()
        }
    },
    methods: {
        start() {
            this.startDate = new Date()
            this.tick()
        },
        tick() {
            if (this.running) {
                this.stopDate = new Date()
                this.$forceUpdate()
                requestAnimationFrame(this.tick)
            }
        }
    },
    computed: {
        value() {
            return (this.stopDate.getTime() - this.startDate.getTime()) / 1000 * this.direction + this.startValue
        },
    },
}
</script>
