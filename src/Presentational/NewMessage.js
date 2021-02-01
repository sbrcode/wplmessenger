import React from 'react';

/**
 * Build new message with an ID, choice of mode and write content.
 *
 * @param  {Object} `message`
 * @param  {Method} `handleChange`
 * @param  {Method} `handleSubmit`
 */
export default function NewMessage({ message, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mode
        <select name="mode" value={message.mode} onChange={handleChange}>
          <option value="public">public</option>
          <option value="private">private</option>
        </select>
      </label>
      <br />
      <label>
        Message
          <textarea name="content" type="text" value={message.content} onChange={handleChange} />
      </label>
        <input type="submit" value="Post" />
    </form>
  );
}