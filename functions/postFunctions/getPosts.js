const Post = require("../../schemas/Post");

module.exports = async (req, res) => {
  try {
    let posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};
