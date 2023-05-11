import express from "express";
const router = express.Router();
import getData from "../controller/data_controller.js";

router.get("/", async (req, res) => {
  res.render("index", {
    title: "HodlInfo",
  });
});

console.log("Router loaded");
router.get("/api/tickers/:dataName", getData);

export default router;
