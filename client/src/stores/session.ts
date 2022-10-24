import { reactive } from "vue";
import { useMainStore } from "./store";
import pinia from "./piniainstance";
import type { User, Workout } from "./types";
import router from "@/router";




const main = useMainStore(pinia);

const session = reactive( {
    user: null as User | null,
});


export function login(email: string, password: string) {
    const currentUsers = main.getAllUsers;
    let i=0;
    console.log(main.getAllUsers)
    while(i<currentUsers.length){
        if(email == currentUsers[i].email && password == currentUsers[i].password){
            console.log(currentUsers[i]);
            session.user = currentUsers[i];
            router.push({name: 'home'});
            return;
        }
    }
    alert('User not Found');
    console.log(main.getAllUsers)
    
}
export const register = (email:string, firstName: string, lastName: string, password: string )=>{
    
    const newUser: User = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        workouts: []
    };
    main.addUser(newUser);
    login(newUser.email, newUser.password);
    
}
export function logout() {
    session.user = null;
    router.push({name: 'login'})
}

export const addWorkout = (title:string, time: string, description: string, image?:File|null ) =>{
    const date =new Date().toLocaleDateString();
    const newWorkOut: Workout = {
        title: title,
        image: image,
        time: time,
        description: description,
        date: date

    };
    
    if(session.user){
        debugger;
        main.addWorkout(session.user, newWorkOut);
    }
    console.log(session.user)
}




export default session;