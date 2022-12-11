<script setup lang ="ts">
import router from '@/router';
import  { addWorkout, workoutList } from '@/stores/workouts';
import { ref } from 'vue';


import { useRoute } from 'vue-router';

const route = useRoute();
const id = parseInt(route.params.id as string);


const name = ref('');
const weight = ref(0);
const reps = ref(0);
const date = ref('');

async function submit() {

    await addWorkout({
        id: null,
        name: name.value,
        weight: weight.value,
        reps: reps.value,
        date: date.value,
    });
    router.push('/workout');
}

</script>
<template>
    <form @submit.prevent="submit()" class="box">
            <div class="field">
                <label for="" class="label">Workout</label>
                <div class="select">
                    <select required v-model="name">
                        <option v-for="workout in workoutList" :key="workout" :value="workout">
                            {{ workout }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label class="label">Weight (lbs)</label>
                <div class="control numOptions">
                    <input
                        required
                        class="input"
                        type="number"
                        max="999"
                        v-model="weight"
                    />
                    <button
                        type="button"
                        class="button is-success leftBtn"
                        @click="weight = Math.max(0, weight! - 5)"
                    >
                        -
                    </button>
                    <button
                        type="button"
                        class="button is-success rightBtn"
                        @click="weight! += 5"
                    >
                        +
                    </button>
                    
                </div>
            </div>
            <div class="field">
                <label class="label">Reps</label>
                <div class="control numOptions">
                    <input required class="input" type="number" max="999" v-model="reps" />
                    <button
                        type="button"
                        class="button is-success leftBtn"
                        @click="reps = Math.max(0, reps! - 1)"
                    >
                        -
                    </button>
                    <button
                        type="button"
                        class="button is-success rightBtn"
                        @click="reps! += 1"
                    >
                        +
                    </button>
                    
                </div>
            </div>
            <div class="field">
                <label class="label">Date</label>
                <div class="control dateOptions">
                    <input required class="input" type="date" v-model="date" />
                </div>
            </div>
            <input type="submit" value="Submit" class="button is-link" />
                        

            
        </form>

</template>
<style>
.numOptions input {
  width: 10rem;
  text-align: center;
  border-radius: 0 !important;
}
/* +/- buttons */
.button {
  font-weight: bold;
  border-radius: 5px;
  border: none;
}
.leftBtn {
  border-radius: 5px 0 0 5px;
}
.rightBtn {
  border-radius: 0 5px 5px 0;
}
.dateOptions input {
  width: 10rem;
}
</style>
