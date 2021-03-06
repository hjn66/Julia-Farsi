const Log = require("./log");

module.exports = function(err, req, res, next) {
  email = "NOUSER";
  if (req.user) {
    email = req.user.email;
  } else if (req.body.email) {
    email = req.body.email;
  }

  Log(req, "Error: " + err.message, email);
  console.log(err);

  res.json({ success: false, msg: __(err.message) });
};
