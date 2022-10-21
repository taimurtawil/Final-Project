import { reactive } from "vue";
import { useMainStore } from "./store";
import pinia from "./piniainstance";
import type { User } from "./types";

const main = useMainStore(pinia);

const session = reactive( {
    user: null as User | null,
});


export function login(email: string, password: string) {
    const currentUsers = main.getAllUsers;
    var i=0;
    while(i<currentUsers.length){
        if(email === currentUsers[i].email && password === currentUsers[i].password){
            session.user = currentUsers[i];
            return;
        }
    }
    return "User Not Found";
    
    
}
export function register(email:string, firstName: string, lastName: string, password: string ){
    const newUser: User = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    main.addUser(newUser)
    console.log(main.getAllUsers);
}
export function logout() {
    session.user = null;
}

// export class User {
//     public firstName?: string;
//     public lastName?: string;
//     public email?: string;
//     public password?: string;

//     newUser(firstName: string, lastName: string, email: string, password: string){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email
//         this.password = password
//     }
// }



export default session;