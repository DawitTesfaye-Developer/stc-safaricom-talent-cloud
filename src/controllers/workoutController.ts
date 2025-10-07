import { Request, Response } from "express";
import workout from "../database/models/workout";

// Get all workouts
export const getAllWorkouts = async (req: Request, res: Response) => {
    try {
        // Fetch all workouts from the database
        const workouts = await workout.find();
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch workouts" });
    }
};

// Get one specific workout 
export const getOneWorkout = async(req: Request, res: Response) => {
   try {
      const {id} = req.params;
      const workouts = await workout.findById(id);

      if(!workouts) {
        res.status(404).json({error: "Workout not found"});
        return;
      }
        res.json(workouts);  

   } catch (error) {
      res.status(500).json({error: "Failed to fetch the workout"});
   }
}

// Create a new workout
export const createWorkout = async(req: Request, res: Response) => {
    try {
            const {type, duration, caloriesBurne} = req.body;
            const workouts = new workout({type, duration, caloriesBurne});
            await workouts.save();
            res.status(201).json(workouts);

    } catch (error) {
       res.status(500).json({error: "Failed to create workout"});
    }
    res.send("Creating a new workout");
}

// Get a single workout by ID
export const updateWorkout = async(req: Request, res: Response) => {
    try {
       const {id} = req.params;
       const {type, duration, caloriesBurne} = req.body;
       const workouts = await workout.findByIdAndUpdate(
        id, 
        {type, duration, caloriesBurne}, 
        {new: true}
      );
      res.json(workouts);
    } catch (error) {
        res.status(500).json({error: "Failed to update workout" }); 
    }
    res.send("Updating a workout");
};

// update a workout by ID
export const deleteWorkout = async(req: Request, res: Response) => {
    try {
         const {id} = req.params;
         await workout.findByIdAndDelete(id, {new: true})
         res.status(204).send();

    } catch (error) {
        res.status(500).json({error: "Failed to Delete workout"});
    }
};