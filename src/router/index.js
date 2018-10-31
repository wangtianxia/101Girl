import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import videoPage from '../components/video.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:'/videoPage/:tempNum',
            name:'videoPage',
            component:videoPage
        }
    ]
})
