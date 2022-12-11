<script setup lang="ts">
import type { Workout } from '@/stores/types';
import { getUserWorkouts } from '@/stores/workouts';



const props = defineProps<{
  user: string;
  workouts: Workout[];
}>();

// const workouts = await getUserWorkouts(props.user);
// console.log(workouts);
</script>

<template>
    
        <ul >
            <li v-for="workout in props.workouts" :workout="workout">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                        <p>
                            <strong>{{props.user}}</strong> <small>{{workout.name}}</small> <small>{{workout.date}}</small>
                            <br>
                            {{workout.reps}} reps on {{workout.weight}} pounds
                        </p>
                        </div>
                        <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                            </a>
                            <a class="level-item">
                            <span class="icon is-small"><i class="fas fa-heart"></i></span>
                            </a>
                        </div>
                        </nav>
                    </div>
                </article>
                
            </li>
        </ul>
    
</template>

<style>
.media{
    border: 1px solid black;
    background-color: #f5f5f5;
    border-radius: 5px;
    margin: 1rem;
}
.media-content {
    padding: 1rem;
}
</style>