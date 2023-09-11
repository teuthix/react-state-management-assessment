import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({ posts, deletePost }) {
  // TODO: Diplay the list of posts.
  // done TODO: Create at least one additional component that is used by this component.
  // done TODO: Each post must have className="post" for the tests to work.
  
  //find the post that had the delete button clicked
  //remove that post from the post list
  
  const renderContents = posts.map((post, index) => (
        <li key={index}>
          {post.type === "text" ? <p>{post.content}</p> : <img src={post.content} />}
          <button name="delete" onClick={() => deletePost(index)}>Delete</button>
        </li>
      )
  );
  
  

  // done TODO: Each post must have a delete button - <button name="delete">Delete</button> - 
  // TODO: button that deletes the post when clicked
  return (
  <div className="post-list">
    <ul>
      { renderContents }
    </ul>
  </div>
  )
}

export default PostList;
