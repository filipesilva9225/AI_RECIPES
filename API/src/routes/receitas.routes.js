import express from "express";
import { perguntarReceita } from "../controllers/receitas.controller";

const router = express.Router();

router.post("/pergutar", perguntarReceita);

export default router;
