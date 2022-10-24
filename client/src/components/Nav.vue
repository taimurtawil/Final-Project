<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import LoginBadge from './LoginBadge.vue';

    let isActive = ref(false);

</script>

<template>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">

        <div class="container">
        <div class="navbar-brand">
          <router-link class ="navbar-item" to="/">
            <svg width="48" height="62" viewBox="0 0 48 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21463 11.483C3.36616 6.32136 7.19214 0.887329 12.6748 0.887329H35.798C41.0037 0.887329 44.7953 5.82142 43.455 10.8516L40.8823 20.507C45.2773 24.8089 48 30.7786 48 37.3773C48 50.486 37.2548 61.1127 24 61.1127C10.7452 61.1127 0 50.486 0 37.3773C0 30.2926 3.13859 23.9329 8.11568 19.5839L5.21463 11.483ZM37.0103 22.7279L37.3202 21.5646C33.714 18.5988 29.0741 16.8115 24 16.8115C19.4665 16.8115 15.2797 18.2382 11.8669 20.6575L12.3631 22.0431L9.37905 23.1118L9.27758 22.8284C5.5008 26.5557 3.16964 31.705 3.16964 37.3773C3.16964 48.7024 12.4625 57.9431 24 57.9431C35.5375 57.9431 44.8304 48.7024 44.8304 37.3773C44.8304 31.9455 42.6926 26.9932 39.1948 23.3099L37.0103 22.7279ZM40.3922 10.0356L38.205 18.2439C34.2278 15.351 29.3157 13.6419 24 13.6419C19.1078 13.6419 14.5575 15.0895 10.7631 17.5753L8.1987 10.4144C7.08962 7.31739 9.3852 4.05697 12.6748 4.05697H35.798C38.9214 4.05697 41.1964 7.01743 40.3922 10.0356ZM17.2225 39.8911C18.7819 39.8911 20.0461 38.6409 20.0461 37.0987C20.0461 35.5565 18.7819 34.3063 17.2225 34.3063C15.6631 34.3063 14.399 35.5565 14.399 37.0987C14.399 38.6409 15.6631 39.8911 17.2225 39.8911ZM27.9537 37.0987C27.9537 38.6409 26.6896 39.8911 25.1302 39.8911C23.5708 39.8911 22.3066 38.6409 22.3066 37.0987C22.3066 35.5565 23.5708 34.3063 25.1302 34.3063C26.6896 34.3063 27.9537 35.5565 27.9537 37.0987ZM33.036 39.8911C34.5954 39.8911 35.8596 38.6409 35.8596 37.0987C35.8596 35.5565 34.5954 34.3063 33.036 34.3063C31.4766 34.3063 30.2125 35.5565 30.2125 37.0987C30.2125 38.6409 31.4766 39.8911 33.036 39.8911Z" fill="#FF844B"/>
            </svg>
          </router-link>
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
      
            <router-link class="navbar-item" to="/workout">
              My Workouts
            </router-link>

            <router-link class="navbar-item" to="/feed">
              My Friends
            </router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/about">
                  About
                </router-link>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">

              <login-badge></login-badge>
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {
        
        border-bottom: #00AA00 5px solid;
    }
</style>