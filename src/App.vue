<template>
    <main>
        <router-view>Loading...</router-view>
        <Footer />
    </main>
</template>

<script>
import Footer from './components/Footer'

export default {
    name: 'app',
    data() {
        return {
            numBooks: 10,
            numDays: 365,
            pagesPerBook: 250,
            wordsPerPage: 250,
            wordsPerMinute: 200,
        }
    },
    computed: {
        result() {
            const { numBooks, numDays, pagesPerBook, wordsPerPage, wordsPerMinute } = this
            return numBooks * pagesPerBook * wordsPerPage / wordsPerMinute / numDays
        }
    },
    components: {
        Footer
    }
}
</script>

<style lang="scss" src="@/scss/main.scss">
</style>
