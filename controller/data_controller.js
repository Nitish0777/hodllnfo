import Field from "../models/fields.js";

const getData = async (req, res) => {
  console.log("Inside getData");
  const dataName = req.params.dataName;
  try {
    const data = await Field.find({ name: dataName });
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Crypto data not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default getData;
