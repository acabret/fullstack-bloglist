import { useField } from "../hooks";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogpostReducer";

const NewBlog = () => {
  const title = useField("text");
  const url = useField("url");
  const dispatch = useDispatch();

  const submitNewBlog = (e) => {
    e.preventDefault();
    try {
      dispatch(
        createBlog({ title: title.values.value, url: url.values.value })
      );
      title.reset()
      url.reset()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitNewBlog}>
      <h3>create new blog</h3>
      <div>
        <label>
          Title:
          <input placeholder="Title" name="title" {...title.values} />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input
            placeholder="http://www.google.com"
            name="url"
            {...url.values}
          />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewBlog;
