import express from "express";
const router = express.Router();
import {
  createJobs,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "./jobs.controller.js";
import testUser from "../../middleware/testUser.js";

router.route("/").post(testUser, createJobs).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);

export default router;
