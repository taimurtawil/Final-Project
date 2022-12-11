<script setup lang="ts">
import type { User } from '@/stores/types';
import { loadUsers } from '@/stores/users';
import { reactive } from 'vue';
import session from '@/stores/session';
import { follow } from '@/stores/following';
import { getFollowing } from '@/stores/following';
const users = reactive([] as User[]);
loadUsers().then((data) => {
  users.push(...data);
});
const existingfriends = await getFollowing();

</script>

<template>
 
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Find A Friend</h1>
            <div class="container" v-if="users">
              <div v-for="user in users">
                <div v-if = "user.username === session.user?.username || existingfriends.includes(user.username)"></div>

                <div class="container" v-else>
                  <div class = "newfriend">
                    <h1 class="user">{{user.username }}</h1>
                    <div class="buttons is-flex is-flex-direction-row">
                      <button class="button is-primary" @click="follow(user.username)">Add Friend</button>
                    </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

</template>
<style>
.newfriend{
  display: flex;
  padding: 10px;
  margin: 10px;

}
.user{
  margin: 10px;
}
</style>
