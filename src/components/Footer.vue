<template>
    <footer>
        <button class="blue" @click="$router.push({ name: 'About' })">About</button>
        This site is by
        <a target="_blank" href="https://github.com/hananiah42">Hannah Wilson</a>,
        <a target="_blank" href="https://github.com/danielrw7">Danny Wilson</a>,
        <a target="_blank" href="https://github.com/TomAwezome">Tom Sanford</a>,
        and <a target="_blank" href="https://github.com/weaversam8">Sam Weaver</a>.
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        gotoAbout() {
            this.$router.push({
                name: ''
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/settings.scss";

footer {
    margin: 1em 0;
    font-size: 1.15em;
    font-family: ArgentCF;

    @media screen and (max-width: $mobile-break) {
        margin: 1em;
    }

    button {
        color: white;
        font-weight: normal;
        padding: 0.4em 1.2em 0.5em 1.2em;
        margin-right: 1em;
        border-radius: 1em;
    }

    a {
        font-style: italic;
        font-weight: bold;

        &:not(:hover) {
            text-decoration: none;
        }

        &:visited {
            color: inherit;
        }
    }
}
</style>
