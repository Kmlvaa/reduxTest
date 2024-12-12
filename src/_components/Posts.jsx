import React, { useEffect, useState } from 'react'
import { useAddPostMutation, useGetAllPostsQuery } from '../services/postsApi'
import { useDispatch, useSelector } from 'react-redux';
import { Button, message } from 'antd';

export default function Posts() {

  const [title, setTitle] = useState('');

  const { data } = useGetAllPostsQuery();

  const [addPost] = useAddPostMutation();

  const [error, setError] = useState(false);

  const status = useSelector((state) => state.message.status)
  const stateMessage = useSelector((state) => state.message.message)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { userId: 1, title: title, body: "body" }
    if (title == '') {
      setError(true)
      return
    }
    addPost(formData)
      .then().catch(() => { console.log('there is an error!') })

    setTitle('')
  }
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      message[status](stateMessage);
    }
  },[ status, stateMessage ])

  return (
    <div>
      <h1 style={{marginInline: 100, color: 'rosybrown'}}>Add post</h1>
      <form onSubmit={handleSubmit} style={{ margin: 30, border: 1, padding: 20 }}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ marginRight: 10 }}>Title</label>
          <input type='text' placeholder='enter title'
            //  style={`${error ? {border: 1, borderColor: 'red'} : {border: 0}}`}
            value={title} onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <br />
      <ol style={{ listStyleType: 'none', display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {data?.map((post) => {
          return (

            <li key={post.id} style={{ width: 300, border: 1, borderStyle: 'solid', borderColor: 'rosybrown', padding: 10, borderRadius: 10 }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  )
}
