import React from 'react'
import {useContext} from 'react'
import {StoreContext} from "../../storeContext";
import { useNavigate } from "react-router-dom";

import './post.css'

const Post = (props) => {
  const {title,description,id,date} = props.data
  const store = useContext(StoreContext)
  let nav = useNavigate()
  const deletePost = () => {
    const flag = window.confirm('do you realy want?')
    flag && store.delete(id)
  }

  const editPost = () => {
    const flag = window.confirm('do you realy want?')
    flag && store.editOn(id)
    flag && nav(`/edit/${id}`)
  }
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date.toString()}</p>
      {!props.detail && <button onClick={() => {deletePost(id)}}>delete</button>}
      {!props.detail && <button onClick={() => {editPost(id)}}>edit</button>}
      <button onClick={() => {nav(`/${id}`)}}>more</button>
      <hr />
    </div>
  )
}

export default Post
