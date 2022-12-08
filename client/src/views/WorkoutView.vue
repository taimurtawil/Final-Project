<script setup lang="ts">
import workouts, { newWorkoutId} from '@/stores/workouts';
import session from '@/stores/session';
console.log(newWorkoutId())
</script>

<template>
  <main>
    <div v-if="session.user">
      <div v-if="workouts.length">
        <h1>Your Workouts</h1>
        <WorkoutVue v-for="workout in workouts" :workout="workout" />

      </div>
      <div v-else>
        <h1>You have no workouts</h1>
      </div>
      <div class="buttons is-flex is-flex-direction-row">
        <RouterLink :to="`/addworkout/${newWorkoutId()}`">
          <button class="button is-primary">Add Workout</button>
        </RouterLink>
      </div>
    </div>
    
  </main>
</template>

