import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({ createPost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");

  // const handleChange = (event) => {
  //   setType(event.target.value);
  // };

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.
  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({type, content});
    setType("Text");
    setContent("");
  };

  // For the tests to pass, the form below must have: (by default done)
  // DONE - a `name="create"` attribute
  // DONE - one child `<button>` with a `type="submit"` attribute
  // DONE - one child `<select>` with a `name="type"` attribute
  // DONE - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={ handleSubmit }>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" required={true} value={type}>
            <option>Text</option>
            <option>Image</option>
          </select>
          
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
              id="content" 
              name="content" 
              required={true} 
              rows={3} 
              // onChange={handleChange}
              // value={type}
            />
          ) : (
            <input 
              id="content" 
              name="content" 
              type="url" 
              required={true}
              // onChange={handleChange}
              // value={type} 
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
