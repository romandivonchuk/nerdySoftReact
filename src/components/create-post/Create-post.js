import React, {useState, useContext, useEffect} from 'react'
import './create-post.css'
import {StoreContext} from "../../storeContext";
import { useNavigate } from "react-router-dom";
import {observer} from 'mobx-react';
const CreatePost = observer(() => {

  const store = useContext(StoreContext)
  let navigate= useNavigate() 
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const editPost = store.edit ? {...store.edit} : false

  const submit = () => {
    const flas = window.confirm('do you realy want?')
    if (editPost) {
      flas && store.editPost({...editPost, title, description}) 
    } else {
      flas && store.add({title, description})
    }
    flas && navigate('/')
  }

  const titleChange = (e) => {
    setTitle(e.target.value)
  }
  const descriptionChange = (e) => {
    setDescription(e.target.value)
  }

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title)
      setDescription(editPost.description)
    }
  },[]) 

  return (
    <div className="create-post">
      <h2>{editPost ? 'edit post' : 'create post'}</h2>
      <div>
        <input placeholder="title" type="text" className="input" value={title} onChange={titleChange}/>
      </div>
      <div>
        <textarea placeholder="description" className="input"  name="" id="" cols="30" rows="10" value={description} onChange={descriptionChange}></textarea>
      </div>
      <button onClick={submit}>{editPost ? 'edit' : 'create'}</button>
    </div>
  )
})

export default CreatePost
