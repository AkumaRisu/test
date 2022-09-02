import React, { useState, useMemo } from "react";
import "./components/styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hook/usePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Death Note", body: "L" },
    { id: 2, title: "No game - No life", body: "Shuvi" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <div className="header">Elementary</div>
      <div className="row">
        <div className="summary">
          <div className="inner-summary">
            <PostForm create={createPost} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="Список"
            />
          </div>
        </div>
        <div className="content">
          <div className="inner-content">Content</div>
        </div>
      </div>
      <div className="sidebar">Sidebar</div>
    </div>
  );
}

export default App;
