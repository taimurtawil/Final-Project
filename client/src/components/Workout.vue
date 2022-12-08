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
    <div>
        <RouterLink :to=" `/workout/${props.workout?.id}`">
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
        </RouterLink>
        <div class="buttons is-flex is-flex-direction-row">
            <button
                class="button is-danger"
                @click="deleteWorkout(props.workout?.id)"
            >
                Delete
            </button>
        </div>

    </div>

</template>