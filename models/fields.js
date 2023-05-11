import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
  key: {
    type: String,
  },
  base_unit: {
    type: String,
  },
  quote_unit: {
    type: String,
  },
  low: {
    type: String,
  },
  high: {
    type: String,
  },
  last: {
    type: String,
  },
  type: {
    type: String,
  },
  open: {
    type: String,
  },
  volume: {
    type: String,
  },
  sell: {
    type: String,
  },
  buy: {
    type: String,
  },
  at: {
    type: Number,
  },
  name: {
    type: String,
  },
});

const Field = mongoose.model("Field", fieldSchema);

export default Field;
