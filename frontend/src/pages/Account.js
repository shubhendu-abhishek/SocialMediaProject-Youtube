import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserPosts } from "../actions/users.action";
import UserPostsWrapper from "./UserPosts/UserPostsWrapper";

const Account = ({
  getUserPosts,
  auth: { name, lastName, userName, avatar, email },
  users: { profilePosts },
}) => {
  useEffect(() => {
    getUserPosts();
  }, []);
  return (
    <div className="account-page-wrapper">
      <div className="data">
        <img src={avatar} alt="" />

        <div className="data-items">
          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              Name:
            </p>{" "}
            {name}
          </div>

          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              Last Name:
            </p>{" "}
            {lastName}
          </div>

          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              Username:
            </p>{" "}
            {userName}
          </div>

          <div className="font__p data-item">
            <p style={{ marginRight: ".4em" }} className="font__bold">
              E-mail:
            </p>
            {"  "}
            {email}
          </div>
        </div>
      </div>

      <div className="user-posts">
        <header className="user-posts-header-wrapper app_color_background">
          {profilePosts !== null || profilePosts !== [] ? (
            <p className="user-posts-header font__p font__bold">Your topics</p>
          ) : (
            <p className="user-posts-header font__p font__bold">
              You haven't made any posts yet
            </p>
          )}
        </header>
        <UserPostsWrapper posts={profilePosts} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

export default connect(mapStateToProps, { getUserPosts })(Account);
