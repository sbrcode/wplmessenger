import React from "react";

export default function NewPost({ newPost, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New Post"
        value={newPost.title || ""}
        onChange={handleChange}
      />
      {!newPost.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="Details..."
            value={newPost.description || ""}
            onChange={handleChange}
          />
          <button type="submit">New Post</button>
        </>
      )}
    </form>
  );
}