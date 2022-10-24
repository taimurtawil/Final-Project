<script setup lang="ts">

import session, { addWorkout } from '@/stores/session';
import type { Workout } from '@/stores/types';
import { reactive, ref, watch } from 'vue';
import WorkoutPost from '../components/WorkoutPost.vue';

const form = {
  title: "",
  time: "",
  description: "",

};

const file = ref<File | null>();
const workouts= ref<Workout[]>([]);



function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
  }
}
function openModal() {
    document.getElementById("workout-modal").classList.add('is-active');
}
function closeModal() {
  document.getElementById("workout-modal").classList.remove('is-active')
}
const addWorkoutTemp = (title:string, time: string, description: string, image?:File|null ) =>{
    const date =new Date().toLocaleDateString();
    const newWorkOut: Workout = {
        title: title,
        image: image,
        time: time,
        description: description,
        date: date
    };
    workouts.value.push(newWorkOut);
}

// document.addEventListener('DOMContentLoaded', () => {
//   // Functions to open and close a modal
//   function openModal($el: HTMLElement|null) {
//     if($el)$el.classList.add('is-active');
//   }

//   function closeModal($el: Element) {
//     $el.classList.remove('is-active');
//   }

//   function closeAllModals() {
//     (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//       closeModal($modal);
//     });
//   }

//   // Add a click event on buttons to open a specific modal
//   (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger: any) => {
//     const modal = $trigger.dataset.target ;
//     const $target = document.getElementById(modal);

//     $trigger.addEventListener('click', () => openModal($target));
//   });

//   // Add a click event on various child elements to close the parent modal
//   (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close: any) => {
//     const $target = $close.closest('.modal');

//     $close.addEventListener('click', () => closeModal($target));
//   });

//   // Add a keyboard event to close all modals
//   document.addEventListener('keydown', (event) => {
//     const e = event || window.event;

//     if (e.keyCode === 27) { // Escape key
//       closeAllModals();
//     }
//   });
// });
</script>

<template>
  <main>
    <button class="js-modal-trigger" data-target="workout-modal" @click="openModal()">
      Add a Workout
    </button>
    <div class="modal" id = "workout-modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add a Workout</p>
          <button class="delete" aria-label="close" @click="closeModal()"></button>
        </header>
        <section class="modal-card-body">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Workout</label>
              <div class="control has-icons-left">
                <input type="text" id = "workouttitle" class="input" v-model = "form.title" required placeholder="What workout did you do?">
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="fa-solid fa-dumbbell" />
                </span>             
              </div>
            </div>
            

            <label for="" class="label">How long did the workout take?</label>
            <div class="field has-addons" >
              
              <div class="control has-icons-left">
                <input type="number" id = "time" class="input" v-model.number="form.time" required style="height: 2em" >
                <span class="icon is-large is-left">
                  <font-awesome-icon icon="fa-solid fa-clock" />
                </span>
              </div>
              <p class="control">
                <a class="button is-static">
                  minutes
                </a>
              </p>   
            </div>

            <label for="" class="label">Upload a Picture of you in Action!</label>
            <div id="file-js-example" class="field file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="img" @change="onFileChanged($event)" accept="image/*" control>
                <span class="file-cta">
                  <span class="file-icon">
                    <font-awesome-icon icon="fa-solid fa-upload" />
                  </span>
                  <span class="file-label">
                      Choose a file…
                  </span>
                </span>
                <span class="file-name">
                  
                </span>
              </label>
            </div>
            <div class="field">
                <label for="" class="label">Description
                </label>
                <textarea class="textarea" v-model="form.description" placeholder="Describe your workout" style="width: 100%"></textarea>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="/*addWorkout(form.title, form.time, form.description, file);*/ addWorkoutTemp(form.title, form.time, form.description, file); closeModal();">Submit</button>
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div>
    </div>
    <MyComponent
      v-for="workout in workouts"
      :workout="workout"
      
    />
    
    
  </main>
</template>

