<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavVue from './components/Nav.vue';

</script>

<template>
  <body class="body">
    <header>
      <NavVue />
    </header>

    <div class = "container">
      <Suspense>
        <RouterView />
      </Suspense>
    </div>
  </body>
</template>
<style>

.body {
  margin: 0;
  font-family: 300 11px/1.4 'Helvetica Neue', 'sans-serif';
  color: #444;
  background: #022C43;
  overflow: hidden;
  display: block;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>

