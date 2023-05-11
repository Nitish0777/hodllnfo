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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// fieldSchema.pre("save", function (next) {
//   this.createdAt = Math.floor(this.createdAt.getTime() / 1000);
//   next();
// });

const Field = mongoose.model("Field", fieldSchema);
export default Field;
