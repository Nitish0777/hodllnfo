import Field from "../models/fields.js";

const getData = async (req, res) => {
  console.log("Inside getData");
  const dataName = req.params.dataName;
  try {
    console.log("dataName", dataName);
    const cryptoData = [
      "btcinr",
      "ethinr",
      "xrpinr",
      "trxinr",
      "zilinr",
      "wrxinr",
      "maticinr",
      "dogeinr",
      "ltcinr",
      "batinr",
    ];
    for (let i = 0; i < cryptoData.length; i++) {
      if (dataName === cryptoData[i]) {
        const data = await Field.findOne({ key: cryptoData[i] });
        if (data) {
          console.log("data from controller", data);
          res.render("index", {
            data: data,
          });
        } else {
          res.status(404).json({ message: "Crypto data not found" });
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default getData;
