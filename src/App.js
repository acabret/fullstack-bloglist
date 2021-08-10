import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Blog from "./components/Blog";
import Login from "./components/Login";
import NewBlog from "./components/NewBlog";
import UserInfo from "./components/UserInfo";
import { initializeBlogposts } from "./reducers/blogpostReducer";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  // useEffect(() => {
  //   dispatch(initializeBlogposts());
  // }, [dispatch]);

  useEffect(() => {
    if (user) dispatch(initializeBlogposts());
  }, [user, dispatch]);

  // useEffect(() => {
  //   if (user) console.log("cuando esto?", user);
  // }, [user]);

  if (!user) return <Login />;

  if (!blogs) return <div>cargando...</div>;

  return (
    <>
      <NewBlog />
      <UserInfo />
      <div>
        <h2>blogs</h2>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default App;
