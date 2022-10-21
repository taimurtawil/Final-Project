<script setup lang="ts">
    import router from '@/router';
    import { reactive } from 'vue';
    import session, { register, login } from '../stores/session';

    const form = reactive({
        firstName: "",
        lastName: "",
        email: "",
        password1: "",
        password2: "",
    })
    function confirmRegister(fname: string, lname: string, email: string, pass1: string, pass2: string){
        console.log("Here");
        // if(pass1===pass2){
        register(fname, lname, email, pass1);
        login(email, pass1);
        // }
        // else{
        //     alert("Passwords don't Match")
        // }
    }
// function checkPassword(form) {
//                 password1 = form.password1.value;
//                 password2 = form.password2.value;
  
//                 // If password not entered
//                 if (password1 == '')
//                     alert ("Please enter Password");
                      
//                 // If confirm password not entered
//                 else if (password2 == '')
//                     alert ("Please enter confirm password");
                      
//                 // If Not same return False.    
//                 else if (password1 != password2) {
//                     alert ("\nPassword did not match: Please try again...")
//                     return false;
//                 }
  
//                 // If same return True.
//                 else{
//                     alert("Password Match: Welcome to GeeksforGeeks!")
//                     return true;
//                 }
//             }


</script>

<template>
  <main>
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form action="" class="box">
                            <div class="field">
                                <label for="firstName" class="label">First Name</label>
                                <div class="control has-icons-left">
                                    <input type="text" id = "firstName" placeholder="First Name" v-model="form.firstName" class="input" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="fa-solid fa-circle-user" />
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="lastName" class="label">Last Name</label>
                                <div class="control has-icons-left">
                                    <input type="text" id="lastName" placeholder="Last Name" v-model="form.lastName" class="input" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="fa-solid fa-circle-user" />
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="email" class="label">Email</label>
                                <div class="control has-icons-left">
                                    <input type="email" id="email" placeholder="Email" v-model="form.email" class="input" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon="fa-solid fa-envelope" />
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="password1" class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" id="password1" placeholder="*******" v-model="form.password1"  class="input" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon ="fa-solid fa-lock"/>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="password2" class="label">Confirm Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" id="password2" placeholder="*******"  v-model="form.password2" class="input" required>
                                    <span class="icon is-small is-left">
                                        <font-awesome-icon icon ="fa-solid fa-lock"/>
                                    </span>
                                </div>
                            </div>
                            <p style="font-size: 12px">Have an Account? Log in <router-link class="loginLink" to="/login"><a style="text-decoration:underline;" href="#">Here</a></router-link></p>
                            <div class="field">
                                <button class="button is-success" @click="confirmRegister(form.firstName, form.lastName, form.email, form.password1, form.password2)">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  </main>
</template>