<script  setup lang="ts">
import AddWorkout from "../components/AddWorkout.vue";
import session from "../stores/session";

</script>

<template>
    <AddWorkout v-if="session.user"/>
</template>
