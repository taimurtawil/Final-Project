<script setup lang="ts">
import type { User } from '@/stores/types';
import { loadUsers, searchUsers } from '@/stores/users';
import { reactive, ref } from 'vue';
import session from '@/stores/session';
import { follow } from '@/stores/following';
import { getFollowing } from '@/stores/following';
import { }
const users = reactive([] as User[]);
loadUsers().then((data) => {
  users.push(...data);
});
const existingfriends = await getFollowing();
const isFetching = ref(false);
const page = ref(1);
const totalPages = ref(1);

const data = reactive([] as User[]);
const selected = ref<User>();
const username = ref('');

async function getAsyncData(_username: string) {
  if (username.value !== _username) {
    username.value = _username;
    // page.value = 1;
    // totalPages.value = 1;
  }

      // String cleared
  if (!_username.length) {
    // page.value = 1;
    // totalPages.value = 1;

    return;
  }

      // Reached last page
  // if (page.value > totalPages.value) {
  //   return;
  // }

  isFetching.value = true;
  try {
    const _data = await searchUsers(_username);
     data.push(..._data)

    // page.value += 1;
    // totalPages.value = _data.total_pages;
  } catch(error) {
    throw error;
  } finally {
    isFetching.value = false;
  }
}

function getMoreAsyncData() {
  getAsyncData(username.value);
}

</script>

<template>
 
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Find A Friend</h1>
            <section>
              <p class="content"><b>Selected:</b> {{ selected }}</p>
              <o-field label="Find a movie">
                <o-autocomplete
                  :data="data"
                  placeholder="e.g. Fight Club"
                  field="title"
                  :loading="isFetching"
                  check-infinite-scroll
                  :debounce-typing="500"
                  @typing="getAsyncData"
                  @select="(option: User) => (selected = option)"
                  @infinite-scroll="getMoreAsyncData"
                >
                  <template #default="props">
                    <div class="media">
                      <div class="media-content">
                        {{ props?.username }}
                        <br />
                      </div>
                    </div>
                  </template>
                  <!-- <template #footer v-if="page > totalPages">
                    <span class="ex-text-grey">
                      Thats it! No more movies found.
                    </span>
                  </template> -->
                </o-autocomplete>
              </o-field>
            </section>
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
