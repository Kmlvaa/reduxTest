import React from 'react'
import { useGetAllPostsQuery } from '../services/postsApi'

export default function Posts() {

  const { data } = useGetAllPostsQuery();

  return (
    <div>
      <button style={{ backgroundColor: 'rosybrown', color: 'white', padding: 10, border: 0, margin: 50, cursor: 'pointer' }}>Add post</button>
      <br />
      <ol style={{ listStyleType: 'none', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {data?.map((post) => {
          return (
            <li key={post.id} style={{ width: 300, border: 1, borderStyle: 'solid', borderColor: 'rosybrown', padding: 10, borderRadius: 10 }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        }).slice(0, 9)}
      </ol>
    </div>
  )
}
