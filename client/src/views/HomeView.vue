<script setup lang="ts">
import FriendsPost from "@/components/FriendsPost.vue";
import {  getFollowersPosts } from "@/stores/following";



const usersWorkouts  = await getFollowersPosts()

</script>

<template>
 
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Feed</h1>
            <div class="buttons is-flex is-flex-direction-row">
              <RouterLink :to="`/addfriend`">
                <button class="button is-primary">Add Friend</button>
              </RouterLink>
            </div>
            <div class="container" v-if="usersWorkouts">
              <div v-for="[key, value] in usersWorkouts">
                <FriendsPost :user="key" :workouts="value" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

</template>
