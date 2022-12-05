import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { User, Workout } from "./types";


export const useMainStore = defineStore(
    {
    id: 'main',
    state: () => ({
        users: useStorage('users', [] as User[])
    }),
    getters: {
        getAllUsers():User[]{
            return this.users
        },
    },
    actions: {
        addUser(user: User) {
            this.users.push(user);
        },
        removeUser(index: number) {
            this.users.splice(index, 1)
        },
        addWorkout(user: User, workout: Workout){
            user.workouts.push(workout);

        }

    },
    

})