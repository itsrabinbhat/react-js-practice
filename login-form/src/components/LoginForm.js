import React from "react";
import { Formik } from "formik";
import TextField from "./TextField";
import { object, string } from "yup";
import "./LoginForm.css";

const LoginForm = () => {
  const loginValidate = object({
    email: string()
      .email("Invalid email address!")
      .required("Email can't be empty!"),
    password: string().required("Password can't be empty!").min(8).max(30),
  });
  return (
    <div>
      <div className="form-container">
        <h2>Log in</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(data) => {
            console.log(data);
          }}
          validationSchema={loginValidate}
        >
          {({ handleChange, handleSubmit, errors, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <TextField name="email" placeholder="Enter Email" />
                </div>
                <div>
                  <label>Password</label>
                  <TextField
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>

                <button className="btn" type="submit">
                  Log in
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
