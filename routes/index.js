import express from "express";
const router = express.Router();

console.log("Router loaded");

router.get("/", async (req, res) => {
  res.render("index", {
    title: "HodlInfo",
  });
});

export default router;
