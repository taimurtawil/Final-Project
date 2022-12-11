<script setup lang="ts">
import type { Workout } from '@/stores/types';
import { defineProps } from 'vue';


const props = defineProps<{
  workout: Workout;
}>();
//TODO ADD DELETE FUNCTIONALITY
</script>

<template>
    <Suspense>
       
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                        <strong>{{props.workout.name}}</strong>
                        <br>
                            {{props.workout.reps}} reps on {{props.workout.weight}} pounds
                        <br>
                        <small><a>Like</a> · <a>Reply</a> · {{props.workout.date}}</small>
                        </p>
                    </div>
                </div>
            </article>
        
    </Suspense> 

</template>
<style scoped>
    
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
