import { Router } from "express";
import { getMessages, getUsersForSidebar, sendMessage } from "../controller/messages.controller.js";
import protectedRoute from "../middleware/auth.middleware.js";

const router = Router();

router.get("/conversations", protectedRoute, getUsersForSidebar);
router.get("/:id", protectedRoute, getMessages);
router.post("/send/:id", protectedRoute, sendMessage);

export default router;