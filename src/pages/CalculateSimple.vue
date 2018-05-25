<template>
    <div class="content shadow">
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
            This site is dedicated to helping you schedule and motivate yourself to reach your reading goals. Select a calculation to get started.

            <div class="steps">
                <ol>
                    <li><div>1.</div><div>Select a calculation from the menu</div></li>
                    <li><div>2.</div><div>Type in your goal and learn how many books you can read</div></li>
                    <li><div>3.</div><div>Become motivated to read all the books ever written* <span>*almost all</span></div></li>
                </ol>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/settings.scss";

button {
    display: block;
    margin-top: .4em !important;
    margin-left: 0 !important;
}

ol {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0;

    li {
        flex: 1;
        margin-right: 0.5em;

        &:last-child {
            margin-right: 0;
        }

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: nowrap;

        div {
            height: 100%;
            margin: auto;

            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        div:first-child {
            flex: 1;
            background-color: $color-dark-blue;
            text-align: center;
        }
        div:last-child {
            font-size: 0.75em;
            flex: 3;
            background-color: $color-light-blue;

            padding: 1.2rem 1.5rem;
            position: relative;
        }

        span {
            position: absolute;
            font-size: 0.6em;
            right: 5px;
            bottom: 5px;
        }
    }

    @media screen and (max-width: $mobile-break) {
        display: block;

        li {
            display: block;
            margin-right: 0;
            padding-bottom: 0.75em;
        }
    }
}
</style>


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
