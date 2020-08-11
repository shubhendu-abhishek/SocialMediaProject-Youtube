const { validationResult } = require("express-validator");
const User = require("../../schemas/User");

module.exports = async (req, res) => {
  try {
    let { userNameFromSearch } = req.body;

    let errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    let users = await User.find().select("-password");

    let findUserByUsername = users.filter(
      (user) =>
        user.userName.toString().toLowerCase().split(" ").join("") ===
        userNameFromSearch.toString().toLowerCase().split(" ").join("")
    );
    res.json(findUserByUsername);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Server error.");
  }
};
