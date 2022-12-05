const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { connect } = require('./mongo');

const COLLECTION_NAME = 'users';

async function collection(){
    const client = await connect();
    return client.db('fitnessapp').collection(COLLECTION_NAME);
}

const list = [];

const getAll = async()=>{
    const results = await collection.find().toArray();
    return results;
}

const get = async(user_id)=>{
    const results = await collection.findOne({_id: new ObjectId(user_id)});
    return results;
}

const getByHandle = async(handle)=>{
    const results = await collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));
    return results;
}

const add = async(user)=>{
    if(!user.firstName){
         return Promise.reject( { code: 422, msg: "First Name is required" } )
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    const user2 = await collection.insertOne(user);
    user._id = user2.insertedId;
    return { ...user, password: undefined };
}

const update = async(user)=>{
    const results = await collection.updateOne({_id: new ObjectId(user._id)}, {$set: user});
    return {...results.value, password: undefined};

}
const deleteUser = async(user_id)=>{
    const results = await collection.deleteOne({_id: new ObjectId(user_id)});
    return results.value;
}

const login = async(handle, password)=>{
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Invalid Credentials (Handle)" } )
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        return Promise.reject( { code: 401, msg: "Invalid Credentials (Password)" } )
    }
    const data =  { ...user, password: undefined };

    return { user: data};
}

const seed = async()=>{
    for ( const x of list){
        await add(x);
    }
}

module.exports = { getAll, get, getByHandle, add, update, delete: deleteUser, login, seed };

// module.exports.Delete = async function Delete(user_id) {
//     const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

//     return results.value;
// }

// module.exports.Login = async function Login(handle, password){
//     console.log({ handle, password})
//     const user = await collection.findOne({ handle });
//     if(!user){
//         return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
//     }

//     const result = await bcrypt.compare(password, user.password)
        
//     if( ! result ){
//         throw { code: 401, msg: "Wrong Password" } ;
//     }
    
//     const data = { ...user, password: undefined };
    
//     return { user: data };

    
// }

// module.exports.Seed = async ()=>{
//     for (const x of list) {
//         await module.exports.Add(x)
//     }
// }
// module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

// module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

// module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

// module.exports.Add = async function Add(user) {
//     if(!user.firstName){
//          return Promise.reject( { code: 422, msg: "First Name is required" } )
//     }
//     const salt = bcrypt.genSaltSync(10)
//     const hash = await bcrypt.hash(user.password, salt)
    
//         console.log({
//             user, salt: salt, hash
//         })
        
//         user.password = hash;

//         const user2 = await collection.insertOne(user);
//         user._id = user2.insertedId;

//         return { ...user, password: undefined };
// }


// module.exports.Update = async function Update(user_id, user) {

//     const results = await collection.findOneAndUpdate(
//         {_id: new ObjectId(user_id) }, 
//         { $set: user },
//         { returnDocument: 'after'}
//     );
//     console.log({ user_id, results });
        
//     return { ...results.value, password: undefined };
// }
