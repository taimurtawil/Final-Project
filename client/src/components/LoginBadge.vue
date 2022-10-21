<script setup lang="ts">
    import session, { login, logout, register } from '../stores/session';
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <a class="button is-success" @click="register('example@example.com', 'Taimur', 'Tawil', 'Welcome1!')">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" @click="login('example@example.com', 'Welcome1!')">
            Log in
        </a>
    </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        <a class="button is-danger" @click="logout()">
            Log out
        </a>
    </div>

</template>


<style scoped>
</style>