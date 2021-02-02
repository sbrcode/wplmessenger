import React from 'react';
import { Remarkable } from 'remarkable';    // this library is a markdown parser.
                                            // https://github.com/jonschlinkert/remarkable

const md = new Remarkable({
  html: true                                // Default value is false => enables html tags transformation.
});

/**
 * Generate threads. Print message id, mode and content.
 * Appears only if content completed. Can checks filterText, as soon as 2 messages are printed
 *
 * @param  {List} `allMessages`
 * @param  {String} `filterText`
 * @param  {Method} `handleFilter`
 */
export default function MessagesList({ allMessages, filterText, handleFilter }) {
  return (
    <div>
      {allMessages.length < 2 ? null :
        <form>
          <input type="text" placeholder="Search..." value={filterText} onChange={handleFilter} />
        </form>
      }
      <ul>
        {allMessages.map(({ mode, content, id }) => (
          content.includes(filterText) ?
            !content ? null :
              <li key={id}>
                  <div>{id} :: {mode} <p dangerouslySetInnerHTML={{__html: md.render(content)}}></p></div>
              </li>
            : null
        ))}
      </ul>
    </div>
  );
}