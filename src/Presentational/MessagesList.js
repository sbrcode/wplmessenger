import React from 'react';
import { Remarkable } from 'remarkable';    // this library is a markdown parser.
                                            // https://github.com/jonschlinkert/remarkable

const md = new Remarkable({
  html: true                                // Default value is false => enables html tags transformation.
});

/**
 * Generate threads. Print message id, mode and content.
 *
 * @param  {List} `allMessages`
 */
export default function MessagesList({ allMessages }) {
  return (
    <ul>
      {allMessages.map(({ mode, content, id }) => (
        !content ? null :
          <li key={id}>
              <div>{id} :: {mode} <p dangerouslySetInnerHTML={{__html: md.render(content)}}></p></div>
          </li>
      ))}
    </ul>
  );
}