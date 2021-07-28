import { useDispatch } from "react-redux";
import { deleteBlog, plusLike } from "../reducers/blogpostReducer";

const styles = { border: "2px solid black", margin: ".5rem" };

const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  const likeBlog = () => {
    dispatch(plusLike({ ...blog, likes: blog.likes + 1 }));
  };
  const removeBlog = () => {
    dispatch(deleteBlog(blog));
  };

  return (
    <div style={styles}>
      <div>title: {blog.title}</div>
      <div>author: {blog.author.username}</div>
      <div>N° likes: {blog.likes}</div>
      <div>url: {blog.url}</div>
      <div>
        <button onClick={likeBlog}>like</button>
        <button onClick={removeBlog}>delete</button>
      </div>
    </div>
  );
};

export default Blog;
