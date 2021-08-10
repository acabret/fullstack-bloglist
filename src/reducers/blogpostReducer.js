import blogService from "../services/blogs";

const blogReducer = (state = null, action) => {
  console.log("tipo de action:", action.type);
  switch (action.type) {
    case "blog/init":
      return [...action.data];

    case "blog/create":
      return state.concat(action.data);

    case "blog/delete":
      return state.filter((blog) => blog !== action.data);

    case "blog/pluslike":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

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
    dispatch({ type: "blog/create", data: createdBlog });
  };
};

export const deleteBlog = (blog) => {
  return async (dispatch) => {
    await blogService.deleteBlog(blog);
    // console.log(deletedBlog);
    dispatch({ type: "blog/delete", data: blog });
  };
};

export const plusLike = (likedBlog) => {
  return async (dispatch) => {
    const updatedBlog = await blogService.plusOneLike(likedBlog);
    dispatch({ type: "blog/pluslike", data: updatedBlog });
  };
};

export default blogReducer;
