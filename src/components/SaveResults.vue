<template>
    <div class="results">
        <div ref="output" style="display: none;">
            <div class="top border-bottom">
            </div>
            <div class="middle border-bottom">
                <div>
                    I want to read
                    <span class="value">{{ numBooks }}</span> books in
                    <span class="value">{{ numDays }}</span> days.
                </div>
                <div>
                    Read <span class="value">{{ Math.ceil(value) }}</span> minutes per day to complete your goal.
                </div>
            </div>
            <div class="bottom">
                <div>{{ pagesPerBook }} Average pages per book</div>
                <div>{{ wordsPerPage }} Average words per page</div>
                <div>{{ wordsPerMinute }} Words per minute</div>
                <div class="source">Make another calculation at</div>
                <div class="url">readingcalculator.com</div>
            </div>
        </div>
        <a :href="imgSrc" :download="filename">Download</a><br>
        <img ref="img" :src="imgSrc" width="750" height="750" />
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/settings.scss";
@import "../scss/partials/mixins";

img {
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

</style>

<script>
import fontURLThin from '@/assets/fonts/argentcf-thin.otf'
import fontURLBoldItalic from '@/assets/fonts/argentcf-bolditalic.otf'
import imageSrc from '@/assets/icons/Books_Full_Top.svg'

import htmlToCanvas from '@/htmlToCanvas'
import { defaults, minutesPerDay } from '@/calculations'
import { colorLightBlue, colorDarkBlue } from "@/scss/settings.scss";

export default {
    name: 'SaveResults',
    data() {
        return {
            imgSrc: '',
        }
    },
    props: {
        numBooks: {
            type: Number,
            default: defaults.numBooks,
        },
        numDays: {
            type: Number,
            default: defaults.numDays,
        },
        pagesPerBook: {
            type: Number,
            default: defaults.pagesPerBook,
        },
        wordsPerPage: {
            type: Number,
            default: defaults.wordsPerPage,
        },
        wordsPerMinute: {
            type: Number,
            default: defaults.wordsPerMinute,
        },
    },
    mounted() {
        this.generate()
    },
    methods: {
        generate() {
            const width = 750,
                  height = 750,
                  border = 20,
                  paddingTop = 50;

            htmlToCanvas(`
                <div class="main" xmlns="http://www.w3.org/1999/xhtml">
                    ${this.$refs.output.innerHTML}
                </div>
            `, `
                <style>
                    @font-face {
                        font-family: ArgentCF;
                        src: url("${fontURLThin}") format("opentype");
                    }
                    @font-face {
                        font-family: ArgentCF;
                        font-weight: bold;
                        font-style: italic;
                        src: url("${fontURLBoldItalic}") format("opentype");
                    }
                    .main {
                        background-color: ${colorDarkBlue};
                        border: ${border}px solid ${colorLightBlue};
                        color: white;
                        width: ${width - border * 2}px;
                        height: ${height - border * 2}px;
                        font-family: ArgentCF;
                    }
                    .value {
                        font-size: 40px;
                        font-weight: bold;
                        font-style: italic;
                        padding-right: 3px;
                    }
                    .url {
                        font-size: 30px;
                    }
                    .border-bottom {
                        border-bottom: ${border}px solid ${colorLightBlue};
                    }
                    .top, .middle, .bottom {
                        height: ${(height - border * 4 - paddingTop * 3) / 3}px;
                        text-align: center;
                        padding-top: ${paddingTop}px;
                        overflow: hidden;
                    }
                    .middle div {
                        line-height: 1.5;
                        font-size: 25px;
                    }
                    .bottom {
                        font-size: 18px;
                    }
                    .source {
                        padding-top: 20px;
                    }
                </style>
            `, width, height).then(canvas => {
                let ctx = canvas.getContext('2d')

                const image = new Image()
                image.onload = () => {
                    const imageWidth = (width - border * 2) * 2 / 3
                    const imageHeight = imageWidth / 3
                    image.width = imageWidth
    
                    const topOffsetX = (width - imageWidth) / 2
                    const topOffsetY = (height - border * 4 - paddingTop * 3) / 3 - imageHeight + border + paddingTop - 2
                    ctx.drawImage(image, topOffsetX, topOffsetY, imageWidth, imageHeight)
    
                    const bottomOffsetY = height - border - imageHeight
    
                    const bottomLeftOffsetX = -294
                    ctx.drawImage(image, bottomLeftOffsetX, bottomOffsetY, imageWidth, imageHeight)
    
                    const bottomRightOffsetX = width - border - 133
                    ctx.drawImage(image, bottomRightOffsetX, bottomOffsetY, imageWidth, imageHeight)
    
                    ctx = canvas.getContext('2d')
                    ctx.fillStyle = colorLightBlue
                    ctx.fillRect(0, 0, 20, height)
                    ctx.fillRect(width - 20, 0, 20, height)
                    this.imgSrc = canvas.toDataURL('image/png')
                }

                image.src = imageSrc
            })
        }
    },
    computed: {
        value() {
            return minutesPerDay(this)
        },
        filename() {
            return `${this.numBooks}-books-in-${this.numDays}-days.png`
        }
    }
}
</script>