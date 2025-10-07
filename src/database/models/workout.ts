import mongoose from "mongoose"

const workoutSchema = new mongoose.Schema({
    type: { type: String, required: true },
    duration: { type: Number, required: true},
    date: { type: Date, default: Date.now },
});

// Define workout model

const workout = mongoose.model("workout", workoutSchema);

export default workout;