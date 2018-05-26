<template>
    <menu :class="{ 'collapsed': collapsed }">
        <div class="sections">
            <section @click="toggleCollapsed">
                <span class="icon full-top"></span>
                <span class="toggle-menu">
                    <span>Menu</span>
                    <span class="icon hamburger"></span>
                </span>
            </section>
            <section @click="openPage('CalculateSimple')" :class="classActive('CalculateSimple')">
                How long do I need to read every day to meet my goal?
            </section>
            <section class="icon-right">
                <span>
                    How long to finish one book?
                </span>
                <span class="icon single"></span>
            </section>
            <section class="icon-right">
                <span>
                    How long to read a Goodreads shelf?
                </span>
                <span class="icon three"></span>
            </section>
            <section class="icon-right center" @click="openPage('Calculate')" :class="classActive('Calculate')">
                <span class="text-small">
                    If I read this much per day, how many books will I read over time?
                </span>
                <span class="icon calendar"></span>
            </section>
            <section class="icon-right" @click="openPage('CalculateSimple')" :class="classActive('CalculateSimple')">
                <span class="text-small">
                    How long do I need to read every day to reach my reading goal?
                </span>
                <span class="icon four"></span>
            </section>
            <section class="icon-bottom">
                <span>
                    All Calculations
                </span>
                <span class="icon full-bottom"></span>
            </section>
        </div>
    </menu>
</template>

<style lang="scss" scoped>
@import "../scss/settings.scss";
@import "../scss/partials/mixins";

menu {
    margin: 0;
    padding: 0;

    /*float: left;*/
    font-size: 1.5rem;
    font-family: ArgentCF-light;
    color: white;
    text-align: center;
    // position: fixed;
    // top: 0;
    // left: 0;
    // height: 100%;
    // width: $left-width;
    background-color: $color-dark-blue;
    border: 9px solid $color-light-blue;
    /*border-right-width: 9px;*/
    /*padding: 10em 3em;*/
    .sections {
        width: 100%;
        section {
            width: 100%;
            height: percentage(1 / 7);
        }
        
        section:first-of-type {
            border-top-width: 0px;
            padding-bottom: 0;
        }
    }

    section {
        display: block;
        border: 0px solid $color-light-blue;
        border-top-width: 9px;
        border-bottom-width: 9px;
        padding: 1.5rem 2rem;
        text-align: left;

        cursor: pointer;

        transition: background-color 0.5s;
        &:hover, &:focus {
            background-color: lighten($color-dark-blue, 6%);
        }
        &:active, &.active {
            transition: background-color 0s;
            background-color: darken($color-dark-blue, 4%);
        }

        background-size: auto 75%;

        &.icon-right, &.icon-bottom {
            @include display-flex();
            align-items: flex-end;
            padding-right: 0;
            padding-bottom: 0;

            span:first-child {
                @include flex(1);
                margin: auto;
                padding-bottom: 1.5rem;
                padding-right: 0.8rem;

                &.text-small {
                    font-size: 0.75em;
                }
            }

            .icon {
                @include flex(0 auto);
            }

            &.center {
                align-items: flex-center;
                padding-right: 1rem;
                padding-bottom: 1.5rem;

                span:first-child {
                    padding-bottom: 0;
                }
            }
        }

        &.icon-bottom {
            flex-direction: column;
            align-items: flex-start;

            padding-left: 0;

            span:first-child {
                margin: 0;
                padding-left: 2rem;
            }
        }
    }

    .toggle-menu {
        display: none;
    }

    @media screen and (max-width: $mobile-break) {
        width: 100%;

        section:first-child {
            background-color: $color-dark-blue;
        }

        .toggle-menu {
            display: inline-block;
            float: right;
            outline: none;
            margin: 0;
            margin-top: -1.5rem;
            border-radius: 0;
            border-width: 0;
            font-size: 2rem;

            $padding: 2.4rem;
            padding-top: $padding / 2;
            padding-bottom: $padding / 2;

            .icon {
                float: right;
                margin-left: 1rem;
                margin-top: 0.4rem;
            }
        }

        min-height: 0%;
        &.collapsed {

            section {
                display: none;
            }

            section:first-child {
                display: block;
                border-bottom-width: 0px;
            }
        }
    }

}


</style>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            collapsed: true
        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.resize)
            this.resize()
        })
    },
    methods: {
        openPage(name) {
            this.toggleCollapsed()
            this.$router.push({
                name
            })
        },
        toggleCollapsed() {
            this.collapsed = window.innerWidth > 1200 || !this.collapsed
        },
        resize() {
            const collapsed = this.collapsed || window.innerWidth > 1200
            if (collapsed != this.collapsed) {
                this.collapsed = collapsed
            }
        },
        classActive(name) {
            return {
                'active': this.$route.name == name
            }
        }
    },
}
</script>