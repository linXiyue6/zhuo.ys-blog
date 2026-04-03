import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Category from '../views/Category.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/article/:id', name: 'ArticleDetail', component: ArticleDetail },
  { path: '/category', name: 'Category', component: Category },
  { path: '/about', name: 'About', component: About },
  { path: '/learn', name: 'Learn', component: () => import('../views/Learn.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/demos/vue-basic', name: 'VueBasic', component: () => import('@/views/demos/VueBasic.vue')},
  { path: "/demos/vue-v-if", name: "条件渲染", component: () => import("@/views/demos/vue-v-if.vue")},
  { path: "/demos/zujian", name: "组件", component: () => import("@/views/demos/zujian.vue")},
  { path: "/demos/Carousel", name: "轮播图", component: () => import("@/views/demos/Carousel.vue")},
  { path: "/demos/AxiosUse", name: "Axios网络请求", component: () => import("@/views/demos/AxiosUse.vue")},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router