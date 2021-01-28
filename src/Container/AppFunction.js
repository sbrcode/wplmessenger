import React, { useState } from "react";
import NewPost from "../Presentational/NewPost";
import PostsList from "../Presentational/PostsList";

export default function AppFunction() {
  const [newPost, setNewPost] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewPost((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allPosts, setAllPosts] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newPost.title) return;
    setAllPosts((prev) => [newPost, ...prev]);
    setNewPost({});
  };

  return (
    <div>
      <h2>Write your new message</h2>
        <NewPost
            newPost={newPost}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
        <PostsList allPosts={allPosts} id={Date.now()} title={newPost.title} />
    </div>
  );
}