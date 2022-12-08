import { reactive, watch } from 'vue';
import session, { api } from './session';
import type { Workout } from './types';


const workouts = reactive([] as Workout[]);
export const workoutList = [
    "Bench Press",
    "Squats",
    "Deadlift",
    "Overhead Press",
    "Bent Over Row",
    "Pull Up",
    "Curls",
    "Lat Pull-Downs",
    "Push ups",
    "Sit-Ups",
    "barbell Row"

]

export default workouts;

export function getWorkouts(){
    if(session.user){
        api<Workout[]>(`/workouts/${session.user?.username}`).then((data)=>{
            workouts.splice(0, workouts.length, ...(data as Workout[]));
        });
    }else{
        workouts.splice(0, workouts.length)
    }
}
// watch(() => session.user, getWorkouts)

export async function getUserWorkouts(username: string): Promise<Workout[]>{
    return await api(`/workouts/${username}`) as Workout[];
}

export async function addWorkout(workout: Workout) {
    await api(`/workouts/${session.user?.username}`, workout)
    const i = workouts.findIndex((w) => w.id === workout.id);
    if (i >= 0) {
      workouts.splice(i, 1, workout);
    } else {
      workouts.push(workout);
    }
}

export async function deleteWorkout(id: number) {
    await api(`/workouts/${session.user?.username}/${id}`, null, "DELETE")
    const i = workouts.findIndex((w) => w.id === id);
    workouts.splice(i, 1);

  }
  
export function newWorkoutId() {
    // workouts[workouts.length - 1].id + 1;

    if (workouts.length === 0) {
      return 1;
    }
    return 1;
}