import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const SigninForm = ({ setToken, setUser }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async ({ email, password }) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://oiiu-backend.herokuapp.com/oiiu/signin",
        data: {
          email,
          password,
        },
      });
      console.log(response);
      setToken(response.data.token);
      setUser(JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setLoading(false);
      setErrorMessage("");
    } catch (e) {
      console.log({ e });
      setLoading(false);
      setErrorMessage(e.response.data.message);
    }
  };

  return (
    <div className="bg-white p-4 m-4 flex flex-col w-80">
      <h1 className="text-3xl text-gray-500 mb-4 font-semibold">Log in</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be atleast 6 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true);
          handleSignIn(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            <Field
              placeholder="Email"
              className="m-2 p-2 border"
              type="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              className="ml-4 mb-4 text-sm text-red-500 font-bold"
              component="div"
            />
            <Field
              placeholder="Password"
              className="m-2 p-2 border"
              type="password"
              name="password"
            />
            <ErrorMessage
              name="password"
              className="ml-4 mb-4 text-sm text-red-500 font-bold"
              component="div"
            />

            {errorMessage && (
              <div className="ml-4 my-2 text-md text-red-500 font-bold">
                {errorMessage}
              </div>
            )}

            <button
              className={`m-2 p-2 border bg-indigo-500 text-white font-semibold ${
                loading ? "animate-pulse" : ""
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              Signin
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SigninForm;
