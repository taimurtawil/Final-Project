import { computed, reactive } from "vue";
import myFetch from "@/services/myFetch";

import type { User} from "./types";
import router from "@/router";
import { getWorkouts } from "./workouts";


const session = reactive( {
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});

export default session;

export async function api<T>(url:string , data:any = null, method?: string) {
    session.loading++;
    
    try{
        const result = await myFetch<T>(url, data, method);
        return result;
    }catch(error){
       console.log(error);
    } finally{
        session.loading--;
    }
    return {} as T;
}


export async function login(username: string, password: string) {
    console.log(username, password);
    await api<User>('/users/login', { username, password }, "POST").then((user)=>{
        if(user.username === username){
            session.user = user;
            router.push("/");
            
        }else{
            session.user = null;
        }
    });
}
export function logout() {
    session.user = null;
    router.push("/login");
}

export const isLoading = computed(()=> !!session.loading);
export interface Message {
    text: string;
    type: "danger"|"warnings"|"success" | "info";
}
