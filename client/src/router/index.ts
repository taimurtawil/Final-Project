import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import session from '@/stores/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutView,
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      
    
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name!== 'login' && to.name!== 'register' && session.user == null) next({ name: 'login' })
  else next()
})

export default router
