<template>
    <div class="content">
        <Calendar :offset="2" :num-days="31" />
    </div>
</template>

<script>
import Calendar from '@/components/Calendar'

export default {
    name: 'CalendarPage',
    components: {
        Calendar,
    }
}
</script>
