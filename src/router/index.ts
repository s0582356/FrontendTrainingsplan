import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExerciseOption from '@/components/ExerciseOption.vue'
import ExerciseFortgeschrittenOption from '@/components/ExerciseFortgeschrittenOption.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: "/exercise-option-api",
      name: 'exercise-option',
      component: ExerciseOption,
    },
    {
      path: "/exercise-fortgeschritten-option-api",
      name: 'exercise-fortgeschritten',
      component: ExerciseFortgeschrittenOption,

    },
    {
      path: "/exercise-option-api",
      name: 'exercise-option',
      component: () => import('../views/ExerciseOptionView.vue'),
    },
  ],
})

export default router
