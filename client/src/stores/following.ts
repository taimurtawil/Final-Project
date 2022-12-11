
import { reactive } from "vue";
import session, { api } from "./session";
import { getUserWorkouts } from "./workouts";



export async function getFollowing(){
    return await api<string[]>(`/users/following/${session.user?.username}`);

}
// watch(()=>session.user, getFollowers);

export async function follow(friendUsername: string){
    await api(`/users/follow/${session.user?.username}/${friendUsername}`, null, "PATCH");
}

export async function unfollow(friendUsername: string){
    await api(`/users/unfollow/${session.user?.username}/${friendUsername}`, null, "PATCH");
}
export async function getFollowersPosts(){
    const following = await getFollowing();
    const usersWorkouts = reactive( new Map() )
    for (const element of following) {
        const workouts = await getUserWorkouts(element);
        usersWorkouts.set(element, workouts);
    }
    return usersWorkouts;

}
    
