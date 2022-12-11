const data = require("../data/users.json");
const { connect } = require("./mongo");

const bcrypt = require('bcrypt');

const DATABASE_NAME = "workout-app";
const COLLECTION_NAME = "users";


const collection = async () => {
  const client = await connect();
  return client.db(DATABASE_NAME).collection(COLLECTION_NAME);
};

/**
 *
 * @returns { User[] } all users
 */
const getUsers = async () => {
  const db = await collection();
  const data = await db.find().toArray();
  return data;
};

/**
 *
 * @param {string} username
 * @returns {User} user matching username
 */
const getUser = async (username) => {
  const db = await collection();
  const data = await db.findOne({ username });
  return data;
};

/**
 *
 * @param {User} user object
 * @returns {User} all users
 */
const createUser = async (user) => {
  const db = await collection();
  const salt = bcrypt.genSaltSync(10)
  const hash = await bcrypt.hash(user.password, salt)
  user.password = hash
  await db.insertOne({
    username: user.username,
    password: user.password,
    workouts: [],
    following: [],
  });
  return getUser(user.username);
};

/**
 *
 * @param {string} username
 */
const removeUser = async (username) => {
  const db = await collection();
  await db.deleteOne({ username });
};

/**
 *
 * @param {string} username
 * @returns {string[]} list of other users that user is following
 */
const getFollowing = async (username) => {
  const user = await getUser(username);
  return user.following;
};

/**
 *
 * @param {string} username
 * @param {string} fusername
 */
const follow = async (username, fusername) => {
  const db = await collection();
  const user = await getUser(username);
  if (!user.following.includes(fusername)) {
    await db.updateOne({ username: username }, { $push: { following: fusername } });
  }
};

/**
 *
 * @param {string} username
 * @param {string} fusername
 */
const unfollow = async (username, fusername) => {
  const db = await collection();
  const user = await getUser(username);
  if (user.following.includes(fusername)) {
    await db.updateOne({ username: username }, { $pull: { following: fusername } });
  }
};

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns {User} user matching username and password
 */
const login = async (username, password) => {
    const user = await getUser(username);
    if(!user){
        return Promise.reject( { code: 401, msg: "Sorry there is no user with that handle" });
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        return Promise.reject( { code: 401, msg: "Sorry the password is incorrect" });
    }
    return { username: user.username, password: user.password };
};

const seed = async () => {
  const db = await collection();
  await db.deleteMany();
  await db.insertMany(data);
}

module.exports = {
  collection,
  getUsers,
  getUser,
  createUser,
  removeUser,
  getFollowing,
  follow,
  unfollow,
  login,
  seed
};

