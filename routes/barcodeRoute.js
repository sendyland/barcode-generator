import express from "express";
import bwipjs from "bwip-js";
import checkSerialId from "../middleware/checkSerialId.js";

const router = express.Router();

router.get("/barcode", checkSerialId, (req, res) => {
  try {
    const { text, scale } = req.query;
    bwipjs.toBuffer(
      {
        bcid: "code128", // Barcode type
        text: text, // Text to encode
        scale: scale ? parseInt(scale) : 3,
        height: 17, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Center-align the text
      },
      (err, png) => {
        if (err) {
          res.status(500).send("Error generating Barcode");
        } else {
          res.writeHead(200, { "Content-Type": "image/png" });
          res.end(png);
        }
      }
    );
  } catch (err) {
    res.status(500).send("Error generating Barcode");
  }
});

export default router;
