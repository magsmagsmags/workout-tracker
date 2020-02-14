// created by mags

//////////////////////////////////////////////////////////
//// dependencies
//// require all items in models folder
//////////////////////////////////////////////////////////
var db = require("../models");
let mongoose = require("mongoose");


//////////////////////////////////////////////////////////
//// module.exports     function(app)
//////////////////////////////////////////////////////////


// add exercise:
//
// exercise.js..... 
// handleFormSubmit(event) >>> await API.addexercise(workoutData)
//
////> let workoutData = {}
///////>> workoutData.type          STRING ("cardio" or "resistance")
///////////>>> if "cardio"...
//////////////////>>>> workoutData.name          STRING
//////////////////>>>> workoutData.duration      NUMBER
//////////////////>>>> workoutData.distance      INTERVAL
//////////////////>>>> workoutData.duration      INTERVAL
///////////>>> if "resistance"...
//////////////////>>>> workoutData.name          STRING
//////////////////>>>> workoutData.duration      NUMBER
//////////////////>>>> workoutData.weight        INTERVAL
//////////////////>>>> workoutData.sets          INTERVAL
//////////////////>>>> workoutData.reps          INTERVAL
//////////////////>>>> workoutData.duration      INTERVAL






