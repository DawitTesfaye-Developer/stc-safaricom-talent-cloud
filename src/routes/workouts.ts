import { Router } from "express";
import {getAllWorkouts, getOneWorkout ,createWorkout,updateWorkout, deleteWorkout} from "../controllers/workoutController.ts"



const router = Router();

router.get("/", getAllWorkouts);
router.get("/:id", getOneWorkout)
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;
