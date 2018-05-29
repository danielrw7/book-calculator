import Vue from 'vue'
import VueRouter from 'vue-router'

import Calculate from './pages/Calculate'
import CalculateSimple from './pages/CalculateSimple'
import Calendar from './pages/CalendarPage'
import ReadingSpeed from './pages/ReadingSpeed'
import About from './pages/About'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'CalculateSimple',
        component: CalculateSimple
    },
    {
        path: '/index.html',
        name: 'CalculateSimple',
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
]

export default new VueRouter({
    mode: 'history',
    routes,
})
