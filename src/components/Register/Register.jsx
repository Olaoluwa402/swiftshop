import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string } from "yup";
import {
  registerAction,
  clearRegisterError,
  reset,
} from "../../redux/features/slices/authRegisterSlice";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, success, loading, error } = useSelector(
    (state) => state.registerUser
  );

  useEffect(() => {
    if (success) {
      toast.success("registeration successful, pls login with your detail");
      setTimeout(() => {
        navigate("/login");
        dispatch(reset());
      }, 5000);
    }

    if (error) {
      setTimeout(() => {
        dispatch(clearRegisterError());
      }, 4000);
    }
  }, [error, success]);

  let registerSchema = object({
    firstName: string().required("FirstName is required"),
    lastName: string().required("LastName is required"),
    username: string().required("Username is required"),
    phone: string().required("Phone is required"),
    email: string().email("Invalid email").required("Email is required"),
    password: string()
      .min(6, "Password should be more that 6 characters long")
      .max(12, "Password should be max of 12 characters long"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values, "register values");
    const { firstName, lastName, phone, email, username, password } = values;
    dispatch(
      registerAction({
        firstName: firstName,
        lastName: lastName,
        username: username,
        phone: phone,
        email: email,
        password: password,
      })
    );
    setSubmitting(false);
  };

  return (
    <div className="max-w-[980px] mx-auto">
      <div className="lg:m-10">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={registerSchema}
        >
          <Form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
            <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className=""> First Name </label>
                <Field
                  type="text"
                  placeholder="Your Name"
                  name="firstName"
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                <ErrorMessage
                  className="text-red-900"
                  name="firstName"
                  component="div"
                />
              </div>
              <div>
                <label className=""> Last Name </label>
                <Field
                  type="text"
                  placeholder="Last  Name"
                  name="lastName"
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                <ErrorMessage
                  className="text-red-900"
                  name="lastName"
                  component="div"
                />
              </div>
            </div>
            <div>
              <label className=""> Username </label>
              <Field
                type="text"
                placeholder="Username"
                name="username"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              <ErrorMessage
                className="text-red-900"
                name="username"
                component="div"
              />
            </div>
            <div>
              <label className=""> Email Address </label>
              <Field
                type="email"
                placeholder="Info@example.com"
                name="email"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              <ErrorMessage
                className="text-red-900"
                name="email"
                component="div"
              />
            </div>
            <div>
              <label className=""> Password </label>
              <Field
                type="password"
                placeholder="******"
                name="password"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
              <ErrorMessage
                className="text-red-900"
                name="password"
                component="div"
              />
            </div>
            <div className="grid gap-3 lg:grid-cols-2">
              <div>
                <label className="">
                  {" "}
                  Phone:{" "}
                  <span className="text-sm text-gray-400">(optional)</span>{" "}
                </label>
                <Field
                  type="text"
                  placeholder="+543 5445 0543"
                  name="phone"
                  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                />
                <ErrorMessage
                  className="text-red-900"
                  name="phone"
                  component="div"
                />
              </div>
            </div>

            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <button
                  type="submit"
                  className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
                >
                  SignUp
                </button>
              )}
            </div>

            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span className="underline text-blue-500">Login</span>
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
