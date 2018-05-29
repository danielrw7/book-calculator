<template>
    <div v-if="open">
        <div class="overlay" @click="close"></div>
        <div class="modal">
            <slot name="title">
                <div class="title" :title="title">
                    {{ title }}
                </div>
            </slot>
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

    .title {
        height: $close-width + 5px;
        font-size: 2em;
        width: calc(100% - 49px);
        padding-right: calc(#{$close-width + 25px} - 1rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: absolute;
        z-index: 1;
        background-color: inherit;
    }

    .close {
        position: absolute;
        z-index: 1;
        top: 1rem;
        right: $close-width;

        color: white;
        width: $close-width;
        height: $close-width;
        padding: 0;
        margin: 0;
        border-radius: $close-width;
        background-color: $color-red;
        background-image: url("../assets/icons/x.svg");
        background-size: 50%;
        background-position: center center;
        background-repeat: no-repeat;
        border-width: 0px;
    }

    .content {
        height: 100%;
        // padding-right: 25px;
        padding-top: $close-width + 5px;

        overflow-y: scroll;
        overflow-x: auto;
        height: 100%;
        font-size: 2rem;
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
        },
        title: {
            type: String,
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