import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import CreatePost from "./components/create-post/Create-post";
import Main from "./components/main/Main"
import PostDetail from "./components/post-detail/post-detail";



export default function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/createpost" element={<CreatePost />}/>
            <Route exact path="/edit/:id" element={<CreatePost />}/>
            <Route exact path="/:id" element={<PostDetail />}/>
          </Switch>
        </div>
    </Router>
  );
}



