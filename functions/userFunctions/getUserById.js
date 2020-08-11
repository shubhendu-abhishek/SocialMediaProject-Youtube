const User = require("../../schemas/User");

module.exports = async (req, res) => {
  try {
    let userId = req.params.user_id;
    let user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};
