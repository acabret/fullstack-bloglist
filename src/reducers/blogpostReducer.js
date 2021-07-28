import blogService from "../services/blogs";

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "blog/init":
      return [...action.data];

    case "blog/createblog":
      return state.concat(action.data);

    case "blog/pluslike":
      return state;

    default:
      return state;
  }
};

export const initializeBlogposts = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    console.log(blogs);
    dispatch({
      type: "blog/init",
      data: blogs,
    });
  };
};

export const createBlog = (blog) => {
  return async (dispatch) => {
    const createdBlog = await blogService.create(blog);
    dispatch({ type: "blog/createblog", data: createdBlog });
  };
};

export default blogReducer;
