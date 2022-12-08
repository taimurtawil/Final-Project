// const { collection, getUser } = require("./users");
// const { ObjectId } = require("mongodb");


// const getWorkouts = async (username) => {
//     const user = await getUser(username);
//     return user.workouts;
// };

// const getWorkout = async (username, id) => {
//     const user = await getUser(username);
//     return user.workouts.find((workout) => workout.id === id);
// }

// const createWorkout = async (username, newWorkout) => {
//     const db = await collection();
//     await db.updateOne({ username: username }, { $push: { workouts: newWorkout } });
// }

// const removeWorkout = async (username, id) => {
//     const db = await collection();
//     await db.updateOne({ username: username }, { $pull: { workouts: { _id: newObjectId(id) } } });
// }

// module.exports = {
//     getWorkouts,
//     getWorkout,
//     createWorkout,
//     removeWorkout,
// };
const data = require("../data/users.json");
const { connect } = require("./mongo");
// import function collection() from users.js
const { collection, getUser } = require("./users");

/**
 *
 * @param {string} userame
 * @returns {object[]} all workouts for a user
 */
const getWorkouts = async (username) => {
  const user = await getUser(username);
  return user.workouts;
}

/**
 *
 * @param {string} username
 * @param {number} wid
 * @returns {object} single workout from a user
 */
const getWorkout = async (username, wid) => {
  const user = await getUser(username);
  return user.workouts.find((workout) => workout.wid === wid);
}

/**
 *
 * @param {string} username
 * @param {Workout} workout object
 */
const addWorkout = async (username, newWorkout) => {
  const db = await collection();
  const user = await getUser(username);
  const workout = user.workouts.find((workout) => workout.wid === newWorkout.wid);
  if (workout) {
    await db.updateOne(
      { username: username, workouts: { $elemMatch: { wid: newWorkout.wid } } },
      { $set: { "workouts.$": newWorkout } });
  } else {
    await db.updateOne({ username: username, },
      { $push: { workouts: newWorkout } });
  }
}

/**
 *
 * @param {string} username
 * @param {number} wid
 */
const removeWorkout = async (username, wid) => {
  const db = await collection();
  await db.updateOne(
    { username: username },
    { $pull: { workouts: { wid: wid } } }
  )
}


module.exports = {
  getWorkouts,
  getWorkout,
  addWorkout,
  removeWorkout,
};