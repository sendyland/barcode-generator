const allowedSerialIds = ["sendykey", "randykey"];

function checkSerialId(req, res, next) {
  const { serial_id } = req.query;

  if (!serial_id || !allowedSerialIds.includes(serial_id)) {
    return res.status(403).send("Access Denied: Invalid serial_id");
  }

  next();
}

export default checkSerialId;
