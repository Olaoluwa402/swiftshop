import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loginAction,
  clearLoginError,
} from "../../redux/features/slices/authLoginSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, success, loading, error } = useSelector(
    (state) => state.loggedInUser
  );
  console.log(user, "loggedInUser");

  useEffect(() => {
    if (success) {
      toast.success(`Welcome ${user.lastName}`);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }

    if (error) {
      setTimeout(() => {
        dispatch(clearLoginError());
      }, 4000);
    }
  }, [error, success]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, password }, "email, password ");
    dispatch(loginAction({ email, password }));
  };

  return (
    <div className="max-w-[560px] mx-auto">
      <form
        onSubmit={submitHandler}
        className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10"
      >
        <h1 className="text-xl font-semibold lg:text-2xl">Login</h1>
        <p className="pb-4 text-gray-500">Sign in to access your account</p>

        <div className="">
          <label className=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
            >
              Login
            </button>
          )}
        </div>
        <p>
          Don't have an account yet?{" "}
          <Link to="/register">
            <span className="underline text-blue-500">SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
