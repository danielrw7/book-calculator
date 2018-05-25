<template>
    <footer>
        <button class="blue">About</button> This site is by <i><b>Hannah Wilson</b></i>, <i><b>Danny Wilson</b></i>, and <i><b>Tom Sanford</b></i>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "../scss/settings.scss";

footer {
    margin: 1em 0;
    font-family: ArgentCF;

    @media screen and (max-width: $mobile-break) {
        margin: 1em;
    }
}
</style>
