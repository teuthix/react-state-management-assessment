import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {

  const [posts, setPosts] = useState([]);
  //posts should be array of content

  //handleChange, puts new value into posts array
  const handleSubmit = (event) => {

    setPosts([...posts, event.target.value]);
  }

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  //creates list with new post
  const createPost = (newPost) =>
  setPosts((currentPosts) => [
    newPost,
    ...currentPosts,
  ]);
  //each item in the posts array is ready to be injected into the dom

  // TODO: Add the ability for the <PostList /> component to delete an existing post.
  const deletePost = (indexToDelete) =>
    setPosts((currentPosts) =>
    currentPosts.filter((post, index) => index !== indexToDelete));

  //PostCreate is the form
  //PostList is the list of posts
  //pass in posts as a prop to PostList to display posts
  return (
    <div className="App">
      <PostCreate createPost={ createPost }/>
      <PostList posts={ posts } deletePost={ deletePost } />
    </div>
  );
}

export default App;
