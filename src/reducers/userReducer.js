import userService from "../services/login";
import blogService from "../services/blogs";

const reducer = (state = null, action) => {
  console.log("tipo de action:", action.type);
  switch (action.type) {
    case "user/login":
      return action.data;
    case "user/logout":
      return null;
    default:
      return state;
  }
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const user = await userService.login(credentials);
    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    blogService.setToken(user.token);
    dispatch({ type: "user/login", data: user.username });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedUser");
    dispatch({ type: "user/logout" });
  };
};

export default reducer;
