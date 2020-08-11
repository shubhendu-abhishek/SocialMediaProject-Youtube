const Post = require("../../schemas/Post");

module.exports = async (req, res) => {
  try {
    let post = await Post.findById(req.params.post_id);

    if (!post) return res.status(404).json("Post not found");

    if (post.likes.find((like) => like.user.toString() === req.user.id))
      return res.status(401).json("Post is already liked by you!");

    let newLike = {
      user: req.user.id,
    };

    post.likes.unshift(newLike);

    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};
