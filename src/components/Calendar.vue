<template>
    <div class="content">
        <p>Reading schedule</p>
        <div class="shadow">
            <table>
                <tr v-for="(days, week) in weeks" :key="week">
                    <td v-for="(day, i) in days" :key="i">
                        {{ day }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Calendar',
    props: {
        offset: {
            type: Number,
            default: 0
        },
        numDays: {
            type: Number,
            default: 30
        }
    },
    data() {
        const weeks = []
        
        let week = []
        for (let i = 1; i <= this.numDays; i++) {
            if (i == 1) {
                while (week.length < this.offset) {
                    week.push("")
                }
            }
            week.push(i)
            if (week.length == 7) {
                weeks.push(week)
                week = []
            }
            console.log(i)
        }
        if (week.length > 0) {
            while (week.length < 7) {
                week.push("")
            }
            weeks.push(week)
        }

        return {
            weeks
        }
    },
    computed: {
        
    },
}
</script>
