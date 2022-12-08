<script setup lang="ts">
import type { Workout } from '@/stores/types';
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import { deleteWorkout } from '@/stores/workouts';


const props = defineProps<{
  workout: Workout;
}>();
</script>

<template>
    <Suspense>
        <div>
                <div class="workout">
                    <div class="workout__title">
                        <h3>{{props.workout?.name}}</h3>
                    </div>
                    <div class="workout__info">
                        <p>{{props.workout?.reps}} reps on {{props.workout?.weight}} pounds</p>
                    </div>
                    <div class="workout__date">
                        <p>{{props.workout?.date}}</p>
                    </div>

                </div>
            
            <div class="buttons is-flex is-flex-direction-row">
                <button
                    class="button is-danger"
                >
                    Delete
                </button>
            </div>

        </div>
    </Suspense> 

</template>