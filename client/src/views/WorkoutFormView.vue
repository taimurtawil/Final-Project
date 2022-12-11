<script  setup lang="ts">
import AddWorkout from "../components/AddWorkout.vue";
import session from "../stores/session";

</script>

<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Add a Workout!</h1>
                <div class="columns is-centered">
                    
                    <AddWorkout v-if="session.user"/>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .title{
        color: white;
    }
</style>
