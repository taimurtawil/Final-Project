<script setup lang="ts">
import Activity from "../components/Activity/Activity.vue";
import session from "../stores/session";
</script>

<template>
  <main>
    <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
              <Activity/>
          </div>
        </div>
    </section>
  </main>
</template>
