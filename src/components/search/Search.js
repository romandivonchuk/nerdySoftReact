import React, {useContext,useState} from 'react'
import {StoreContext} from "../../storeContext";
import './search.css'

const Search = () => {
  const store = useContext(StoreContext)
  const [searchText, setSearchText] = useState()
  return (
    <div className="search">
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <button onClick={() => {store.setSearchText(searchText);}}>search</button> 
      <button onClick={() => {store.setSearchText("");setSearchText("")}}>clear</button> 
    </div>
  )
}

export default Search
