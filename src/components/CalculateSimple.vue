<template>
    <div class="content">
        <section class="blue">
            <span class="thin">
                If you read just 10 pages per day,
            </span>
            <br>
            <span class="large">you would read more books every year than the average American</span>
        </section>
        <section class="red">
            Read <input name="pages" type="number" min="0" v-model="pagesPerDay" /> pages every day to read <i class="large bold" :title="result">{{ Math.ceil(result) }}</i> books per year.
            <button type="submit" @click="submit">Calculate</button>
        </section>
        <section>
            This site is dedicated to helping you shchedule and motivate yourself to reach your reading goals. Select a calculation to get started.
        </section>
    </div>
</template>

<script>
import { defaults, pagesPerDayToBooks } from '@/calculations'

export default {
    name: 'CalculateSimple',
    data() {
        return {
            pagesPerDay: defaults.pagesPerDay,
        }
    },
    computed: {
        result() {
            return pagesPerDayToBooks({
                pagesPerDay: this.pagesPerDay
            })
        }
    },
    methods: {
        submit() {
            this.$router.push({
                name: 'Calculate',
                query: {
                    numBooks: Math.ceil(this.result),
                    numDays: 365,
                }
            })
        }
    }
}
</script>
