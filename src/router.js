import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: 'https://www.google.cm',
            name: 'Sheos'
        },
        {
            path: 'https://vuetifyjs.com/en/components/icons',
            name: 'vue'
        }
    ]
})

