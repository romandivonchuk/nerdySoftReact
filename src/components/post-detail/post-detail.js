import React , {useContext, useEffect ,useState} from 'react'
import {
  useParams
} from "react-router-dom";
import {StoreContext} from "../../storeContext";
import {observer} from 'mobx-react';
import Post from '../post/Post';

const PostDetail = observer(() => {
  const [data, setData] = useState();
  const [topSimilar, setTopSimilar] = useState();
  const store = useContext(StoreContext);
  const {id} = useParams();

  useEffect(() => {
    const {currPost,topSimilarArr} = store.getPostById(+id)
    setData(currPost)
    setTopSimilar(topSimilarArr)
  }, [id]);

  if (!data) return <h1>Loading</h1>
  
  
  
  return (
    <div>
      <div className="post">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.date.toString()}</p>
        <hr />
      </div>
      <div>
        <h2 style={{textAlign: 'center'}}>TOP3</h2>
        {topSimilar.map((item ,idx) => <Post key={idx} data={item} detail/>)}
      </div>
    </div>
  )
})

export default PostDetail
