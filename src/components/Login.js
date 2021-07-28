import { useField } from "../hooks";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/userReducer";

const Login = () => {
  const username = useField("text");
  const password = useField("password");

  const dispatch = useDispatch();

  const reset = () => {
    username.reset();
    password.reset();
  };

  const login = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        username: username.values.value,
        password: password.values.value,
      })
    );
  };

  return (
    <form onSubmit={login}>
      <div>
        <label>
          User
          <input {...username.values} />
        </label>
      </div>
      <div>
        <label>
          Password
          <input {...password.values} />
        </label>
      </div>
      <input type="submit" value="Sign in" />
      <input type="reset" value="Reset " onClick={reset} />
    </form>
  );
};

export default Login;
