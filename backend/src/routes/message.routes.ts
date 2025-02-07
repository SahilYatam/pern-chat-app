import { Router } from "express";
import { sendMessage } from "../controller/messages.controller.js";

const router = Router();

router.post("/send-message", sendMessage);

export default router;