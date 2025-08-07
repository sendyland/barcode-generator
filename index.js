import express from "express";
import qrCodeRoute from "./routes/qrCodeRoute.js";
import barcodeRoute from "./routes/barcodeRoute.js";

const app = express();
const port = 5001;

// Route untuk halaman utama / 
app.get("/", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.use(qrCodeRoute);
app.use(barcodeRoute);

app.listen(port, () => {
  console.log(`Barcode generator app running at Port ${port}`);
});
