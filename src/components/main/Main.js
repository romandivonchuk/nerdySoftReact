import React,{useContext,useState} from 'react';
import {StoreContext} from "../../storeContext";
import {Link} from 'react-router-dom';

import Post from '../post/Post';
import Search from '../search/Search';

import {observer} from 'mobx-react';


import './main.css';

const Main = observer(() => {
  const store = useContext(StoreContext)

  return (
    <div className="main">
      <h2>All Posts</h2>
      <Link className="btn" to="/createpost">Add Post</Link>
      <Search/>
      {store.getData.map((post,idx) => <Post key={idx} data={post}/>)}
    </div>
  )
})

export default Main
