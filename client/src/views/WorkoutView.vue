<script setup lang="ts">
import WorkoutVue from '@/components/Workout.vue';
import session from '@/stores/session';
import type { Workout } from '@/stores/types';
import { getWorkouts } from '@/stores/workouts';
import { reactive, Suspense } from 'vue';
import { RouterLink } from 'vue-router';
const workouts = reactive([] as Workout[]);
getWorkouts().then((data) => {
  workouts.push(...data);
});

</script>

<template>
    <main>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Your Workouts</h1>
            <div class="buttons is-flex is-flex-direction-row">
              <RouterLink :to="`/addworkout`">
                <button class="button is-primary">Add Workout</button>
              </RouterLink>
            </div>
            <div class ="post" v-if="workouts.length">
              
              <WorkoutVue v-for="workout in workouts" :workout="workout" />
            </div> 
            <div v-else>
              <h1>You have no workouts</h1>
            </div>
            
          </div>
        </div>
      </section>
        
        
      
    </main>
</template>
<style scoped>
  
  .container{
    min-height: 100%;
    
  }
  .post{
    width: 100%;
  }
    
  
</style>

