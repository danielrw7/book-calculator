<template>
    <div class="layout">
        <Menu />
        <main class="right">
            <router-view>Loading...</router-view>
            <Footer />
        </main>
    </div>
</template>

<script>
import Menu from './components/Menu'
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
        Menu,
        Footer,
    }
}
</script>

<style lang="scss" src="@/scss/main.scss">
</style>

<style lang="scss" scoped>
@import "./scss/settings.scss";

.layout {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;

    height: 100%;

    menu {
        order: 0;
        flex: 1 200px;
        // min-width: 300px;
        min-height: 100%;
    }
    main {
        order: 1;
        flex: 10;
        margin: auto;

        padding: 0 percentage(1 / 10);
    }

    @media screen and (max-width: $mobile-break) {
        flex-direction: column;

        menu, main {
            flex: 1;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
        }

        menu {
            min-height: unset;
        }

        main {
            .content {
                margin-top: 0;
            }
        }
    }
}
</style>
