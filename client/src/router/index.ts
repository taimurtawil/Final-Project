import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorkoutView from '../views/WorkoutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

import WorkoutFormView from '../views/WorkoutFormView.vue';
import WeightTrackerView from '../views/WeightTrackerView.vue';
import AddFriendView from '../views/AddFriendView.vue';


import session from '../stores/session'

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
      
    
    },
    {
      path: '/addworkout',
      name: 'WorkoutForm',
      component: WorkoutFormView,
    },
    {
      path: '/weighttracker',
      name: 'weighttracker',
      component: WeightTrackerView,
    },
    {
      path: '/addfriend',
      name: 'addfriend',
      component: AddFriendView,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name!== 'login' && to.name!== 'register' && session.user == null) next({ name: 'login' })
  else if(to.name == 'login' && session.user !== null) next({name: 'home'})
  else next()
})

export default router
