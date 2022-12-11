
const data = require("../data/users.json");
const { connect } = require("./mongo");

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
 * @param {number} id
 * @returns {object} single workout from a user
 */
const getWorkout = async (username, id) => {
  const user = await getUser(username);
  return user.workouts.find((workout) => workout.id === id);
}

/**
 *
 * @param {string} username
 * @param {Workout} workout object
 */
const createWorkout = async (username, newWorkout) => {
  const db = await collection();
  const user = await getUser(username);
  const workouts = user.workouts;
  const newWorkoutId = workouts.length > 0 ? workouts.length : 0;
  newWorkout.id = newWorkoutId;
  await db.updateOne({ username: username, },
    { $push: { workouts: newWorkout } });
}

/**
 *
 * @param {string} username
 * @param {number} id
 */
const removeWorkout = async (username, id) => {
  const db = await collection();
  await db.updateOne(
    { username: username },
    { $pull: { workouts: { id: id } } }
  )
}



module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  removeWorkout,
};