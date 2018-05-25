import Vue from 'vue'
import VueRouter from 'vue-router'

import Calculate from './components/Calculate'
import CalculateSimple from './components/CalculateSimple'

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
]

export default new VueRouter({
    mode: 'history',
    routes,
})
