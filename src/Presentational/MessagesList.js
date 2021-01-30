import React from "react";

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