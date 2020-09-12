import axios from "axios";
import { ADD_LIKE, POST_ERROR } from "../../../constants/posts.constants";
import { getPosts } from "../posts.actions/getPosts";
import { getMostRecentPosts } from "../posts.actions/getMostRecentPosts";
import { getMostCommentedPosts } from "../posts.actions/getMostCommentedPosts";
import { getMostLikedPosts } from "../posts.actions/getMostLikedPosts";

export const addLikeToPost = (
  post_id,
  isOldest,
  isMostRecent,
  isMostCommented,
  isMostLiked
) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/posts/likes/${post_id}`
    );
    dispatch({ type: ADD_LIKE, payload: res.data });

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
    dispatch({
      type: POST_ERROR,
      payload: error,
    });
  }
};
