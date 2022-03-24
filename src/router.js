import { createRouter, createWebHistory } from 'vue-router'

import Calculate from '@/pages/Calculate'
import CalculateSimple from '@/pages/CalculateSimple'
import Calendar from '@/pages/CalendarPage'
import ReadingSpeed from '@/pages/ReadingSpeed'
import About from '@/pages/About'

export default createRouter({
    history: createWebHistory('/book-calculator/'),
    routes: [
        {
            path: '/',
            name: 'CalculateSimple',
            component: CalculateSimple
        },
        {
            path: '/index.html',
            name: 'CalculateSimpleIndex',
            component: CalculateSimple
        },
        {
            path: '/calculate',
            name: 'Calculate',
            component: Calculate
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/reading-speed',
            name: 'ReadingSpeed',
            component: ReadingSpeed
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ],
})
