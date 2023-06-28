import express from "express";
const router = express.Router();
import rateLimiter from "express-rate-limit";
import { login, register, updateUser } from "./auth.controller.js";
import authenticateUser from "../../middleware/auth.js";
import testUser from "../../middleware/testUser.js";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many requests from this IP address, please try again after 15 minutes.",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, testUser, updateUser);

export default router;
