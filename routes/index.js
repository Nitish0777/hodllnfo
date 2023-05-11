import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  //   const data = await Field.find({});
  // console.log(data);
  res.render("index", {
    title: "Crypto App",
  });
});

export default router;
