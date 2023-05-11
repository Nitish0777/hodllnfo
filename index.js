import express from "express";
const app = express();
const port = 3000;
import fetch from "node-fetch";
import db from "./config/mongoose.js";
import Field from "./models/fields.js";
import router from "./routes/index.js";

app.use("/", router);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("assets"));

async function getTickers() {
  const myResponse = await fetch("https://api.wazirx.com/api/v2/tickers");
  const data = await myResponse.json();
  const entries = Object.entries(data).slice(0, 10);
  for (const [key, value] of entries) {
    // console.log(key, value);
    // console.log(value.base_unit);
    const existingKey = await Field.findOne({ key });
    // console.log("key::", key);
    if (existingKey) {
      // console.log("Key already exists");
      continue;
    }
    const storing = new Field({
      key: key,
      base_unit: value.base_unit,
      quote_unit: value.quote_unit,
      low: value.low,
      high: value.high,
      last: value.last,
      type: value.type,
      open: value.open,
      volume: value.volume,
      sell: value.sell,
      buy: value.buy,
      at: value.at,
      name: value.name,
    });
    try {
      await storing.save();
      console.log("Data saved");
    } catch (e) {
      console.log("Error in saving data in database", e);
    }
  }
}

getTickers();

app.listen(port, (err) => {
  if (err) {
    console.log("Error in running server", err);
  }
  console.log(`Crypto app listening at http://localhost:${port}`);
});
