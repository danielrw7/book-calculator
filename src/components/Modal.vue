<template>
    <div v-if="open">
            <div class="overlay" @click="close"></div>
        <div class="modal">
            <button class="close" @click="close"></button>
            <div class="content">
                <slot name="contents"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/settings.scss";
@import "../scss/partials/mixins";

.overlay {
    background-color: rgba($color-dark-blue, .7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

.modal {
    position: fixed;
    z-index: 2;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
    // overflow: hidden;

    @media screen and (max-width: $mobile-break) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    background-color: white;
    padding: 1rem;

    $close-width: 40px;

    .close {

        position: absolute;
        top: 1rem;
        right: 40px;

        color: white;
        width: $close-width;
        height: $close-width;
        padding: 0;
        margin: 0;
        border-radius: 40px;
        background-color: $color-red;
        background-image: url("../assets/icons/x.svg");
        background-size: 50%;
        background-position: center center;
        background-repeat: no-repeat;
        border-width: 0px;
    }

    .content {
        height: 100%;
        padding-top: $close-width;
        padding-right: $close-width + 25px;

        overflow: auto;
        height: 100%;
    }
}
</style>

<script>
export default {
    name: 'Modal',
    props: {
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            collapsed: true
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>