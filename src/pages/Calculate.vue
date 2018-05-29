<template>
    <div class="calculate content">
        <p>How long do I need to read every day to meet my goal?</p>
        <div class="shadow">
            <div class="split">
                <section class="blue">
                    <div>
                        I want to read
                        <input name="books" v-model="numBooks" type="number" min="0" class="books" />
                        books in
                        <input name="days" v-model="numDays" type="number" min="0" class="days" />
                        days.
                    </div>
                </section>
                <section class="red calculate-simple" id="num-books">
                    <div class="triangle">
                        <div class="top"></div>
                        <div class="bottom"></div>
                    </div>
                    <div>
                        Read <i class="result large bold" :title="result">{{ Math.ceil(result) }}</i> <span class="plural">minutes</span> per day to complete your goal.
                        <br /><br />

                        <button @click="openModal('save')">
                            SAVE RESULTS AS IMAGE
                        </button>
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

                <button @click="openModal('math')">
                    VIEW THE MATH
                </button>
            </section>
        </div>

        <modal :open="modal == 'math'" @close="modalClosed" title="The Math: How long do I need to read every day to meet my goal?">
            <div slot="contents">
                <!-- <div class="innerModal"> -->
                    <!-- <p class="smaller"></p> -->
                    <!-- https://viereck.ch/latex-to-svg/ -->
                    <img src="../assets/equation.svg" alt="The equation" class="equation-image"/>
                    <ol>
                        <li><div><span>W = hours per day</span>This may determine on how many things happen that determine the value for Y.</div></li>
                        <li><div><span>X = minutes per day</span>This may determine on how many things happen that determine the value for Y. This may depend on how things happen.</div></li>
                        <li><div><span>Z = books every time</span>This may depend on how things happen.</div></li>
                        <li><div><span>A = times you read</span>This may determine on how many things happen that determine the value for Y.</div></li>
                        <li><div><span>B = hours per day</span>This may determine on how many things happen that determine the value for Y.</div></li>
                        <li><div><span>C = pages per book</span>This may determine on how many things happen that determine the value for Y.</div></li>
                    </ol>
                <!-- </div> -->
            </div>
        </modal>

        <modal :open="modal == 'save'" @close="modalClosed" title="Save and share your results!">
            <div slot="contents">
                <SaveResults
                    :numBooks="parseInt(numBooks)"
                    :numDays="parseInt(numDays)"
                    :pagesPerBook="pagesPerBook"
                    :wordsPerPage="wordsPerPage"
                    :wordsPerMinute="wordsPerMinute"
                    />
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/settings.scss";
@import "../scss/partials/mixins";

button {
    font-family: sans-serif;
    font-size: .8em;
    padding: .2em .8em;
}

.equation-image {
    width: 60%;

    @media screen and (max-width: $mobile-break) {
        width: 100%;
    }
}

ol {
    @include display-flex();
    justify-content: space-between;
    flex-wrap: wrap;
    color: white;
    padding: 0;
    margin-bottom: 0;

    li {
        @include flex(1);
        // margin-right: 0.5em;

        &:last-child {
            margin-right: 0;
        }

        @include display-flex();
        flex-direction: row;
        flex-basis: 50%;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: nowrap;

        font-size: 0.8em;

        div {
            height: 100%;
            margin: auto;

            @include display-flex();
            justify-content: center;
            flex-direction: column;
        }

        div:last-child {
            font-size: 0.75em;
            @include flex(3);
            background-color: $color-light-blue;

            padding: 1.2rem 1.5rem;
            position: relative;
        }

        span {
            font-weight: bold;
            font-size: 1.2em;
        }
    }

    @media screen and (max-width: $mobile-break) {
        display: block;

        li {
            display: block;
            margin-right: 0;
            // padding-bottom: 0.75em;
        }
    }
}

</style>

<style lang="scss">
// Note that this block is unscoped... it won't apply to the modal component if not
// .innerModal {
//     padding: 0.75rem 4rem;
// }
</style>

<script>
import { defaults, minutesPerDay } from '@/calculations'
import Modal from '@/components/Modal'
import SaveResults from '@/components/SaveResults'

export default {
    name: 'Calculate',
    data() {
        return Object.assign({
            numBooks: defaults.numBooks,
            numDays: defaults.numDays,
            pagesPerBook: defaults.pagesPerBook,
            wordsPerPage: defaults.wordsPerPage,
            wordsPerMinute: defaults.wordsPerMinute,

            modal: false,
        }, this.$route.query)
    },
    computed: {
        result() {
            return minutesPerDay(this)
        },
    },
    methods: {
        openModal(name) {
            this.modal = name
        },
        modalClosed() {
            this.modal = false
        },
        saveResults() {

        }
    },
    components: {
        Modal,
        SaveResults,
    },
}
</script>