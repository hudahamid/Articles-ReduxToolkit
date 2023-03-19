import React from "react";

export const Comments=({comment}) =>(
    <aside>
        <h2>{comment.title}</h2>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
    </aside>
)