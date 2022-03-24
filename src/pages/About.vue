<template>
    <div class="about content shadow">
        <section class="blue">
            This site was created by for your benefit by a couple of<br />
            <span class="bold">awesome & talented bibliophiles.</span>
        </section>
        <section class="red">
            Send them praise, a question, or feature request
            <button type="submit" @click="openModal('message')">Send Message</button>
        </section>
        <section>
            <ol class="contributors clearfix test">
                <li v-for="(contributor, i) in contributors" :key="i">
                    <div class="profile">
                        <img :src="contributor.profile" />
                    </div>
                    <div class="name">
                        {{ contributor.name }}
                        <div class="job" v-html="contributor.job"></div>
                    </div>
                    <div class="desc" v-html="contributor.desc"></div>
                    <div class="link">
                        <button class="blue" @click="openLink(contributor.link.href)">
                            {{ contributor.link.label }}
                        </button>
                    </div>
                </li>
            </ol>
        </section>

        <modal :open="modal == 'message'" @close="modalClosed" title="Send the makers of this site a message">
            <form slot="contents" method="post" name="message" netlify>
                <label>
                    YOUR NAME
                    <input name="name" type="text" class="blue"/>
                </label>
                <label>
                    EMAIL
                    <input name="email" type="email"  class="blue"/>
                </label>
                <label>
                    MESSAGE
                    <textarea name="message" class="blue"></textarea>
                </label>
                <br />
                <button type="submit" name="submit" class="red">SEND MESSAGE</button>
            </form>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/settings.scss";
@import "../scss/partials/mixins";

.modal .content {
    // font-size: 1.5em;

    section {
        // font-size: 1.5em;
        line-height: 1.5;
    }

    label {
        // font-size: 1.5em;
        width: 49%;
        display: inline-block;
        font-family: $sans-serif;

        input, textarea {
            font-family: ArgentCF-light;
            display: block;
            width: 100%;
            text-align: left;
            padding: 1em;
            border-radius: 0;
        }
    }

    button {
        font-size: 1.2em;
        padding: 0.4em 1.2em 0.5em 1.2em;
        border-radius: 1.5em;
    }
}

ol {
    color: white;
    padding: 0;
    margin-bottom: 0;

    @include display-flex();
    flex-direction: row;
    justify-content: left;
    align-items: space-between;
    flex-wrap: wrap;

    li {
        // @include flex(1 300px);
        // min-width: 300px;
        width: calc((100% - 3em) / 4);
        background-color: $color-light-blue;
        // float: left;
        list-style: none;
        margin-bottom: 1em;
        margin-right: 1em;
        position: relative;
        padding-bottom: 1.65em;

        &:last-child {
            margin-right: 0;
        }

        @media screen and (max-width: #{$mobile-break * 3 / 2}) {
            width: calc((100% - 2em) / 3);
            margin-right: 1em;

            &:nth-child(3) {
                margin-right: 0;
            }
        }

        @media screen and (max-width: $mobile-break * 4 / 3) {
            width: calc(50% - 1em);
            margin-right: 0;

            &:nth-child(odd) {
                margin-right: 1em;
            }
        }

        @media screen and (max-width: #{$mobile-break / 2}) {
            width: 100%;
            margin-right: 0 !important;
        }


        > div {
            padding: 0.7rem 2rem;
            img {
                width: 100%;
                margin-bottom: -6px;
            }
        }

        .profile {
            padding: 0;
        }
        
        .name {
            font-family: ArgentCF;
            background-color: $color-dark-blue;
            font-size: 0.8em;
            .job {
                font-size: 0.7em;
                font-style: italic;
            }
        }
        .desc {
            font-family: $sans-serif;
            font-size: 0.5em;
        }

        .link {
            position: absolute;
            width: 100%;
            bottom: 0;
            font-size: 0.5em;
            text-align: center;
            font-family: $sans-serif;
            button {
                padding: 0.4em 1.2em 0.5em 1.2em;
                border: 1px solid white;
                border-radius: 2em;
            }
        }
    }
}


</style>

<style lang="scss">
.contributors .desc a {
    // Scoped CSS does not work with elements when `v-html` is used
    color: inherit;
}
</style>

<script>
import Modal from '@/components/Modal'
import contributors from '@/contributors'

export default {
    name: 'About',
    data() {
        return {
            contributors,
            modal: false,
        }
    },
    methods: {
        openModal(name) {
            this.modal = name
        },
        modalClosed() {
            this.modal = false
        },
        openLink(href) {
            window.open(href, '_blank')
        }
    },
    components: {
        Modal,
    },
}
</script>