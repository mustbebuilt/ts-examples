import express, { Request, Response, Router } from "express";
import * as dataController from "../controllers/controllers";

const router: Router = express.Router();

// GET /
router.get("/", (req: Request, res: Response) => {
res.send("Hello, World2!");
});

// GET /api
router.get("/api", async (req: Request, res: Response) => {
try {
const data = await dataController.getAllData();
res.json(data);
} catch (err) {
console.error(err);
res.status(500).json({ error: "Internal Server Error" });
}
});

export default router;