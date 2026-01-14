import express from "express";
import {
  createBid,
  getBidsForGig,
  hireBid,
  getReceivedBids
} from "../controllers/bid.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createBid);
router.get("/received", protect, getReceivedBids); // ✅ USE CONTROLLER
router.get("/:gigId", protect, getBidsForGig);
router.patch("/:bidId/hire", protect, hireBid);

export default router;
