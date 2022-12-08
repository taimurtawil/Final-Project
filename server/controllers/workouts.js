const express = require("express");
const workouts = require("../models/workouts");
const app = express.Router();

app
    .get("/:username", (req, res, next) => {
        workouts.getWorkouts(req.params.username)
            .then((data) => {
                res.status(200).send(data);
            })
    })
    .get("/:username/:id", (req, res, next) => {
        workouts.getWorkout(req.params.username, req.params.id)
            .then((data) => {
                if(data) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send("Workout not found");
                }
            })
    })
    .post("/:username", (req, res, next) => {
        workouts.createWorkout(req.params.username, req.body)
            .then((data) => {
                res.status(201).send(data);
            })
    })
    .delete("/:username/:id", (req, res, next) => {
        workouts.removeWorkout(req.params.username, req.params.id)
            .then((data) => {
                res.status(200).send("Workout " + req.params.id + " deleted");
            })
    });

    module.exports = app;
    