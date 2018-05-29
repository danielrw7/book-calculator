<template>
    <div class="about content shadow">
        <section class="blue">
            This site was created by for your benefit by a couple of<br />
            <span class="bold">awesome & talented bibliophiles.</span>
        </section>
        <section class="red">
            Send them praise, a question, or feature request Send Message
            <button type="submit" @click="openModal('message')">Send Message</button>
        </section>
        <section>
            <ol class="contributors clearfix">
                <li v-for="(person, i) in contributors" :key="i">
                    <div class="profile">
                        <img :src="person.profile" />
                    </div>
                    <div class="name">
                        {{ person.name }}
                        <div class="job">
                            {{ person.job }}
                        </div>
                    </div>
                    <div class="desc">
                        {{ person.desc }}
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
        font-family: sans-serif;

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

    li {
        width: calc((100% - 3em) / 4);
        background-color: $color-light-blue;
        float: left;
        list-style: none;
        margin-bottom: 1em;
        margin-right: 1em;

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

        @media screen and (max-width: $mobile-break) {
            width: calc(50% - 1em);
            margin-right: 0;

            &:nth-child(odd) {
                margin-right: 1em;
            }
        }

        @media screen and (max-width: #{$mobile-break / 2}) {
            width: 100%;
            margin-right: 0;
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
            font-size: 0.5em;
        }
    }
}

</style>

<script>
import { defaults, minutesPerDay } from '@/calculations'
import Modal from '@/components/Modal'
import SaveResults from '@/components/SaveResults'

export default {
    name: 'About',
    data() {
        return {
            contributors: [
                {
                    name: 'Hannah Wilson',
                    job: 'Concept & Design',
                    profile: 'https://ca.slack-edge.com/T03QE1CDH-U03QG0LEA-f3341696217f-512',
                    desc: `It has not yet been scientifically determined if Hananiah
                           Wilson is composed of atoms or pixels at a fundamental
                           level. Whatever the case, she feels a strong affinity for the `
                },
                {
                    name: 'Danny Wilson',
                    job: 'Coder Dude',
                    profile: 'https://ca.slack-edge.com/T03QE1CDH-U03QE1CE3-dd2de4189f9a-512',
                    desc: `It has not yet been scientifically determined if Hananiah
                           Wilson is composed of atoms or pixels at a fundamental
                           level. Whatever the case, she feels a strong affinity for the `
                },
                {
                    name: 'Tom Sanford',
                    job: 'Coder Dude',
                    profile: 'https://ca.slack-edge.com/T03QE1CDH-U0568JZF8-b6055b43ba67-512',
                    desc: `It has not yet been scientifically determined if Hananiah
                           Wilson is composed of atoms or pixels at a fundamental
                           level. Whatever the case, she feels a strong affinity for the `
                },
                {
                    name: 'Sam Weaver',
                    job: 'Coder Dude',
                    profile: 'https://ca.slack-edge.com/T03QE1CDH-U03QFV8JC-21b26c95af0f-512',
                    desc: `It has not yet been scientifically determined if Hananiah
                           Wilson is composed of atoms or pixels at a fundamental
                           level. Whatever the case, she feels a strong affinity for the `
                },
            ],
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
    },
    components: {
        Modal,
    },
}
</script>