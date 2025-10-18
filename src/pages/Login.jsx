import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Enter your Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Enter your Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center mt-4">Dont’t Have An Account ? <Link className="text-secondary" to={'/auth/register'}>Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
