import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignupForm = () => {
  return (
    <div className="bg-white p-4 m-4 flex flex-col w-80">
        <h1 className="text-3xl text-gray-500 mb-4 font-semibold">Register</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: "", password: "", confirmPassword: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "First name is required";
          } else if(values.firstName.length < 4){
            errors.firstName = "First name must be atleast 4 characters";
          }
          if (!values.lastName) {
            errors.lastName = "Last name is required";
          } else if(values.lastName.length < 4){
            errors.lastName = "Last name must be atleast 4 characters";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if(values.password.length < 6){
            errors.password = "Password must be atleast 6 characters";
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = "Password confirmation required";
          } else if(values.password !== values.confirmPassword){
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
              <Field  placeholder="First Name" className="m-2 p-2 border"  type="text" name="firstName" />
            <ErrorMessage name="firstName" className="ml-4 mb-4 text-sm text-red-500 font-bold" component="div" />
            <Field  placeholder="Last Name" className="m-2 p-2 border"  type="text" name="lastName" />
            <ErrorMessage name="lastName" className="ml-4 mb-4 text-sm text-red-500 font-bold" component="div" />
            <Field  placeholder="Email" className="m-2 p-2 border"  type="email" name="email" />
            <ErrorMessage name="email" className="ml-4 mb-4 text-sm text-red-500 font-bold" component="div" />
            <Field placeholder="Password" className="m-2 p-2 border" type="password" name="password" />
            <ErrorMessage name="password" className="ml-4 mb-4 text-sm text-red-500 font-bold" component="div" />
            <Field  placeholder="Confirm password" className="m-2 p-2 border"  type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" className="ml-4 mb-4 text-sm text-red-500 font-bold" component="div" />
            <button className="m-2 p-2 border bg-indigo-500 text-white font-semibold" type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
