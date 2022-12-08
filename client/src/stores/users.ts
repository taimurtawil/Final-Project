import router from '@/router';
import { reactive, watch } from 'vue';
import session, {api} from './session';
import type { User } from './types';

const users = reactive([] as User[]);


function loadUsers(){
    if(session.user){
        api(`/users`).then((data)=>{
            users.splice(0, users.length, ...(data as User[]));
        });
    }else{
        users.splice(0, users.length);
    }
}

// watch(()=>session.user, loadUsers); 

export default users;

export async function register(username: string, password: string){
    api<User>(`/users`, { username, password }, "POST").then((user)=>{
        session.user = user;
        router.push("/");
        users.push(user);

    });
}

export async function deleteUser(username: string){
    if(session.user){
        await api(`/users/delete/${username}`, null, "DELETE").then(()=>{
            const index = users.findIndex((user)=> user.username === username);
            users.splice(index, 1);
        });
    }
}
