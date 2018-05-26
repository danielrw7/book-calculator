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
@import "./scss/partials/mixins";

.layout {
    @include display-flex();
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;

    height: 100%;

    menu {
        order: 0;
        @include flex(1 200px);
        // min-width: 300px;
        min-height: 100%;
    }
    main {
        order: 1;
        @include flex(10);
        margin: auto;

        padding: 0 percentage(1 / 10);
    }

    @media screen and (max-width: $mobile-break) {
        display: block;

        menu, main {
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
