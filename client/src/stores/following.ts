
import session, { api } from "./session";



export function getFollowing(){
    if(session.user){
        api<string[]>(`users/following/${session.user?.username}`).then((data)=>{
            followers.splice(0, followers.length, ...(data as string[]));
        });
    }else{
        followers.splice(0, followers.length);
    }

}
// watch(()=>session.user, getFollowers);

export async function follow(friendUsername: string){
    if(session.user){
        api(`users/follow/${session.user.username}/${friendUsername}`, null, "PATCH").then(()=>{
            followers.push(friendUsername);
        });
    }
}

export async function unfollow(friendUsername: string){
    if(session.user){
        api(`users/unfollow/${session.user.username}/${friendUsername}`, null, "PATCH").then(()=>{
            followers.splice(followers.indexOf(friendUsername), 1);
        });
    }
}
