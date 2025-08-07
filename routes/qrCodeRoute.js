import express from "express";
import QRCode from "qrcode";
import checkSerialId from "../middleware/checkSerialId.js";

const router = express.Router();

router.get("/qrcode", checkSerialId, async (req, res) => {
  try {
    const { text, size } = req.query;
    const qrCodeOptions = {
      width: size ? parseInt(size) : 200,
    };
    const qrCodeDataURL = await QRCode.toDataURL(text, qrCodeOptions);
    res.setHeader('Content-Type', 'image/png');
    res.send(Buffer.from(qrCodeDataURL.split(',')[1], 'base64'));
  } catch (err) {
    res.status(500).send("Error generating QR Code");
  }
});

export default router;
