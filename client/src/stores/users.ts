import router from '@/router';
import { reactive, watch } from 'vue';
import session, {api} from './session';
import type { User } from './types';



export async function loadUsers(): Promise<User[]>{
    const users = await api<User[]>("/users");
    return users;
}

// watch(()=>session.user, loadUsers); 



export async function register(username: string, password: string){
    api<User>(`/users`, { username, password }, "POST").then((user)=>{
        session.user = user;
        router.push("/");

    });
}
export async function searchUsers(username:string): Promise<User[]>{
    return await api<User[]>(`/users/find/${username}`, "GET");
}
// export async function deleteUser(username: string){
//     if(session.user){
//         await api(`/users/delete/${username}`, null, "DELETE").then(()=>{
//             const index = users.findIndex((user)=> user.username === username);
//             users.splice(index, 1);
//         });
//     }
// }
