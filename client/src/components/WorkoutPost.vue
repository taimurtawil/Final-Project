<script setup lang="ts">
import WorkoutViewVue from '@/views/WorkoutView.vue';
import type { Workout } from '@/stores/types';
import { setMapStoreSuffix } from 'pinia';
    // const props = defineProps({
    //     workout: Object as () => Workout,
    // });
    

</script>

<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="../assets/taimur.png" alt="taimurimg">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>{{/*props.workout.title*/}}</strong>
                    <br>
                    {{/*props.workout.description*/}}
                    <br>
                    <small><a>Like</a> · <a>Reply</a> · {{/*props.workout.date*/}}</small><br>
                    <img src={{/*props.workout.image*/}} alt="uploaded img"/>
                </p>
            </div>
        </div>
    </article>
</template>


<style scoped>
</style>