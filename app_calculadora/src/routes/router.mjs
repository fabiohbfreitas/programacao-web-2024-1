import express from "express";
import * as CalculatorController from "../controller/calculator-controller.mjs";

export const router = express.Router();

router.get("/", CalculatorController.index);
router.post("/resultado", CalculatorController.post);
