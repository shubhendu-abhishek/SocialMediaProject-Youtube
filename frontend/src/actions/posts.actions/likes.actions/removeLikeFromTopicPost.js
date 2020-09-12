import axios from "axios";
import { REMOVE_LIKE, POST_ERROR } from "../../../constants/posts.constants";
import { getPosts } from "../posts.actions/getPosts";
import { getMostRecentPosts } from "../posts.actions/getMostRecentPosts";
import { getMostCommentedPosts } from "../posts.actions/getMostCommentedPosts";
import { getMostLikedPosts } from "../posts.actions/getMostLikedPosts";

export const removeLikeFromTopicPost = (
  post_id,
  like_id,
  isOldest,
  isMostRecent,
  isMostCommented,
  isMostLiked
) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/posts/remove_like_from_post/${post_id}/${like_id}`
    );
    dispatch({
      type: REMOVE_LIKE,
      payload: res.data,
    });
    if (isOldest) {
      dispatch(getPosts());
    } else if (isMostRecent) {
      dispatch(getMostRecentPosts());
    } else if (isMostCommented) {
      dispatch(getMostCommentedPosts());
    } else if (isMostLiked) {
      dispatch(getMostLikedPosts());
    }
  } catch (error) {
    dispatch({ type: POST_ERROR });
  }
};
