import { Router } from "express";
import { signup, login, logout, getMe } from "../controller/auth.controller.js";
import protectedRoute from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", protectedRoute, getMe);

export default router;
