import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById, getUserPostsById } from "../actions/users.action";
import Spinner from "../Spinner";
import UserPostsWrapper from "./UserPosts/UserPostsWrapper";

const UserProfile = ({
  users,
  userProfile,
  posts: { post },
  match,
  getUserById,
  getUserPostsById,
}) => {
  useEffect(() => {
    getUserById(match.params.user_id);
    getUserPostsById(match.params.user_id);
  }, []);

  return users.profilePosts === [] ||
    userProfile === null ||
    post === users.profilePosts ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="account-page-wrapper">
      <div className="data">
        <img src={userProfile.avatar} alt="" />

        <div className="data-items">
          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              Name:
            </p>
            {userProfile.name}
          </div>

          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              Last Name:
            </p>{" "}
            {userProfile.last_name}
          </div>

          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              Username:
            </p>{" "}
            {userProfile.username}
          </div>

          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              E-mail:
            </p>{" "}
            {userProfile.email}
          </div>
        </div>
        <div className="user-posts">
          <header className="user-posts-header-wrapper app_color_background">
            {post !== null || post !== [] ? (
              <p className="user-posts-header font__p font__bold">
                His/Her posts
              </p>
            ) : (
              <p className="user-posts-header font__p font__bold">
                He/She hasn't added post
              </p>
            )}
          </header>
          <UserPostsWrapper posts={users.profilePosts} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  userProfile: state.users.userProfile,
  posts: state.posts,
});

export default connect(mapStateToProps, { getUserById, getUserPostsById })(
  UserProfile
);
