import express from "express";
import {
  MovieIndex,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
  movieDetail,
} from "../controllers/movies.controllers.js";
const router = express.Router();
router.get("/", MovieIndex);
router.get("/:id", movieDetail);
router.post("/", MovieCreate);
router.put("/:id", MovieUpdate);
router.delete("/:id", MovieDelete);
export default router;
