<script setup lang="ts">
import Activity from "../components/Activity/Activity.vue";
import session from "../stores/session";
</script>

<template>
  <main>
    <div v-if="session.user == null">
      
    </div>
    <div class="wrapper" v-else>
      <Activity/>
    </div>
  </main>
</template>
