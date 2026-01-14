import express from "express";
import { getGigs, createGig } from "../controllers/gig.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import Gig from "../models/Gig.js";

const router = express.Router();

/* 🔥 MUST COME FIRST */
router.get("/my", protect, async (req, res) => {
  try {
    const gigs = await Gig.find({ ownerId: req.user.id })
      .populate('ownerId', 'name email')
      .sort({ createdAt: -1 });
    res.json(gigs);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", getGigs);
router.post("/", protect, createGig);

export default router;
