import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Login = () => {
  const { logIn, setUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        alert(errorCode,errorMessage)
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
              name="email"
              type="email"
              className="input"
              placeholder="Enter your Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter your Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semi name='email'bold text-center mt-4">
              Dont’t Have An Account ?{" "}
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
