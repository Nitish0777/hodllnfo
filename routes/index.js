import express from "express";
const router = express.Router();
import getData from "../controller/data_controller.js";
console.log("Router loaded");

router.get("/", async (req, res) => {
  res.render("index", {
    title: "HodlInfo",
  });
});

router.get("/api/tickers/:dataName");

export default router;
