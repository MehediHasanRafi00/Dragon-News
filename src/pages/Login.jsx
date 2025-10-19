import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useRef, useState } from "react";

const Login = () => {
  const [error, setError] = useState("");

  const emailRef = useRef();
  const { logIn, forgetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        // setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((e) => {
        const errorCode = e.code;
        // const errorMessage = e.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  const handleForgotPass = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className="input"
              placeholder="Enter your Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your Password"
              required
            />
            <div>
              <a onClick={handleForgotPass} className="link link-hover">
                Forgot password?
              </a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semi name='email'bold text-center mt-4">
              Don't Have An Account ?
              <Link className="text-secondary" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
