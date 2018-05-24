import Vue from 'vue'
import VueRouter from 'vue-router'

import Calculate from './components/Calculate'
import CalculateSimple from './components/CalculateSimple'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Calculate',
        component: Calculate
    },
    {
        path: '/simple',
        name: 'CalculateSimple',
        component: CalculateSimple
    },
]

export default new VueRouter({
    routes
})
