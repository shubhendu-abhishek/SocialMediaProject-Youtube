import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { clearPost } from "../actions/posts.actions/posts.actions/clearPost";
import { getPost } from "../actions/posts.actions/posts.actions/getPost";
import { removeLikeFromPost } from "../actions/posts.actions/likes.actions/removeLikeFromPost";
import { addLikeToTopicPage } from "../actions/posts.actions/likes.actions/addLikeToTopicPage";
import { createComment } from "../actions/posts.actions/comments.actions/createComment";
import Spinner from "../Spinner";
import CommentsWrapper from "./Comments/CommentsWrapper";
import TopicSection from "./TopicPosts/TopicSection";
import TopicPageForm from "./TopicPosts/TopicPageForm";

const TopicPage = ({
  clearPost,
  getPost,
  removeLikeFromPost,
  addLikeToTopicPage,
  createComment,
  match,
  auth,
  post,
}) => {
  useEffect(() => {
    clearPost();
    getPost(match.params.topic_id);
  }, []);

  return post === null || post === [] ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="main-post-wrapper">
      <TopicSection
        post={post}
        auth={auth}
        removeLikeFromPost={removeLikeFromPost}
        addLikeToTopicPage={addLikeToTopicPage}
      />

      <div className="post-page-header">
        <TopicPageForm auth={auth} post={post} createComment={createComment} />
      </div>

      <div className="comments-align-left">
        <CommentsWrapper comments={post.comments} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  clearPost,
  getPost,
  removeLikeFromPost,
  addLikeToTopicPage,
  createComment,
};

const mapStateToProps = (state) => ({
  post: state.posts.post,
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
