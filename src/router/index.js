import { createRouter, createWebHashHistory } from 'vue-router'
import Discover from '@/components/DiscoverWyy'
import Friends from '@/components/FriendsWyy'
import My from '@/components/MyWyy'

const routes = [
    { path: '/discover', component: Discover },
    { path: '/friends', component: Friends },
    { path: '/my', component: My },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router
