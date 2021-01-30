import React from 'react';

/**
 * Generate threads. Print message id, mode and content.
 *
 * @param  {List} `allMessages`
 */
export default function MessagesList({ allMessages }) {
  return (
    <ul>
      {allMessages.map(({ mode, content, id }) => (
        <li key={id}>
          {/* {mode === 'private' ? null :  */}
            <p>{id} : {mode} : {content}</p>
          {/* } */}
        </li>
      ))}
    </ul>
  );
}