import React from "react";

export default function PostsList({ allPosts, id, title }) {
    return (
        <div>
            <ul>
            {allPosts.map(({ title, id }) => (
                <li key={id}>
                    <p>{id} - {title}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}
