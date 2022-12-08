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
      <div class="control"></div>
      <div v-if="workouts.length">
        <h1>Your Workouts</h1>
        <WorkoutVue v-for="workout in workouts" :workout="workout" />
      </div> 
      <div v-else>
        <h1>You have no workouts</h1>
      </div>
      <div class="buttons is-flex is-flex-direction-row">
        <RouterLink :to="`/addworkout`">
          <button class="button is-primary">Add Workout</button>
        </RouterLink>
      </div>
      
      
    </main>
</template>

