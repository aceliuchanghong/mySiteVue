import {createRouter, createWebHashHistory} from 'vue-router'
import Discover from '@/components/DiscoverWyy'
import Friends from '@/components/FriendsWyy'
import My from '@/components/MyWyy'
import Recommend from '@/components/RecommendWyy'
import Playlist from '@/components/PlaylistWyy'
import Product from '@/components/ProductWyy'


const routes = [
    // 默认重定向到discover
    {path: '/', redirect: '/discover'},
    // 嵌套路由
    {
        path: '/discover',
        component: Discover,
        children: [{path: 'recommend', component: Recommend}, {path: 'playlist', component: Playlist}]
    },
    {path: '/friends', component: Friends},
    {path: '/my', component: My,
        // 动态路由
        children: [{path: ':id', component: Product, props: true},]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router
