<script setup lang="ts">
    import { login } from '@/stores/session';
    import { reactive } from 'vue';
  
    const form = reactive({
        username: "",
        password: "",
    })
    async function submit() {
        await login(form.username, form.password);
        
    }
</script>

<template>
  <main>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-5-desktop is-4-widescreen">
                        <form class="box" @submit.prevent="submit()">
                            <div class="field">
                                <label for="" class="label">Username </label>
                                <div class="control has-icons-left">
                                    <input type="text" id = "username" class="input" v-model = "form.username" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="fa-solid fa-circle-user" />
                                    </span>
                                    
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" id = "password" class="input" v-model="form.password" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="fa-solid fa-lock" />
                                    </span>
                                    
                                </div>
                            </div>
                            <p style="font-size: 12px">Don't Have an Account? Register <router-link class="registerLink" to="/register"><a style="text-decoration:underline;" href="#">Here</a></router-link></p>
                            
                            <div class="field">
                                <input type="submit" value="Login" class="button is-warning is-normal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  </main>
</template>