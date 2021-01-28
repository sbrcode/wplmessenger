import React from "react";

export default function NewPost({ newPost, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="..."
        value={newPost.title || ""}
        onChange={handleChange}
      />
      {!newPost.title
        ? null
        : (<button type="submit">Post</button>)
      }
    </form>
  );
}