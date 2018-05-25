<template>
    <div class="calculate content">
        <p>How long do I need to read every day to meet my goal?</p>
        <div class="shadow">
            <div class="split">
                <section class="blue">
                    I want to read
                    <input name="books" v-model="numBooks" type="number" min="0" class="books" />
                    books
                    <br>
                    in
                    <input name="days" v-model="numDays" type="number" min="0" class="days" />
                    days.
                </section>
                <section class="red calculate-simple" id="num-books">
                    <div class="triangle"></div>
                    <div>
                        Read <i class="result large bold" :title="result">{{ Math.ceil(result) }}</i> <span class="plural">minutes</span> per day to complete your goal.
                    </div>
                </section>
                <div style="clear: both"></div>
            </div>
            <section>
                <span class="regular">Calculation Values</span>
                <div class="smaller">
                    <label><input name="pages" v-model="pagesPerBook" type="number" min="0" class="pages" /> Average pages per book</label>
                    <label><input name="words" v-model="wordsPerPage" type="number" min="0" class="words" /> Average words per page</label>
                    <label><input name="wpm" v-model="wordsPerMinute" type="number" min="0" class="wpm" /> Words per minute</label>
                    <!-- <button class="blue transparent">VIEW THE MATH</button> -->
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { defaults, minutesPerDay } from '@/calculations'

export default {
    name: 'Calculate',
    data() {
        return Object.assign({
            numBooks: defaults.numBooks,
            numDays: defaults.numDays,
            pagesPerBook: defaults.pagesPerBook,
            wordsPerPage: defaults.wordsPerPage,
            wordsPerMinute: defaults.wordsPerMinute,
        }, this.$route.query)
    },
    computed: {
        result() {
            return minutesPerDay(this)
        }
    },
}
</script>
