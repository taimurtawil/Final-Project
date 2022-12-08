import { reactive, watch } from 'vue';
import session, { api } from './session';
import type { Workout } from './types';


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


export async function getWorkouts(): Promise<Workout[]>{
    return await api(`/workouts/${session.user?.username}`) as Workout[];
}
// watch(() => session.user, getWorkouts)

export async function getUserWorkouts(username: string): Promise<Workout[]>{
    return await api(`/workouts/${username}`) as Workout[];
}

export async function addWorkout(workout: Workout) {
    await api(`/workouts/${session.user?.username}`, workout)
}

export async function deleteWorkout(id: number) {
    await api(`/workouts/${session.user?.username}/${id}`, null, "DELETE")

  }
  