const Post = require("../../schemas/Post");

module.exports = async (req, res) => {
  try {
    //We order from the most to the least liked, as default sort is assigned as 1, when you use -1 you basically reverse the order of array
    let posts = await Post.find().sort({ likes: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};
