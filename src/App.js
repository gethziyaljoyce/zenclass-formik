import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

const validateEmail = RegExp(
    // /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function App() {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}
                validate={(values) => {
                    const errors = {};

                    if (values.firstName.length < 5) {
                        errors.firstName = "should be 6 characters";
                    } else if (values.lastName.length < 5) {
                        errors.lastName = "should be 6 characters";
                    } else if (values.email.length < 5) {
                        errors.email = "should be 6 characters";
                    } else if (!validateEmail.test(values.email)) {
                        errors.email = "Invalid";
                    } else if (values.password.length < 4) {
                        errors.password = "Enter minimum 4 characters";
                    } else if (values.confirmPassword.length < 4) {
                        errors.confirmPassword = "Enter minimum 4 characters";
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = "Password should match";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log("submitted");
                    console.log(values);
                }}
            >
                {() => {
                    return (
                        <>
                            <div className="container">
                                <h1><b>Sign Up</b></h1>
                                <Form>
                                    <div className="fName">
                                        <label> First Name :</label>
                                        <Field type="text" name="firstName"
                                        ></Field>
                                        <ErrorMessage name="firstName"></ErrorMessage>

                                    </div><br></br>
                                    <div className="lName">
                                        <label> Last Name :</label>
                                        <Field type="text" name="lastName"
                                        ></Field>
                                        <ErrorMessage name="lastName"></ErrorMessage>
                                    </div><br></br>
                                    <div className="email">
                                        <label>Email Id :</label>
                                        <Field type="email" name="email"
                                        ></Field>
                                        <ErrorMessage name="email"></ErrorMessage>
                                    </div><br></br>
                                    <div className="pword">
                                        <label>Password :</label>
                                        <Field type="password" name="password"
                                        ></Field>
                                        <ErrorMessage name="password"></ErrorMessage>
                                    </div><br></br>
                                    <div className="pword">
                                        <label>Confirm Password :</label>
                                        <Field type="password" name="confirmPassword"
                                        ></Field>
                                        <ErrorMessage name="confirmPassword"></ErrorMessage>
                                    </div><br></br>
                                    <div>
                                        <button className="btn" type="submit">submit</button>
                                    </div><br></br>
                                </Form>
                            </div>
                        </>
                    );

                }}
            </Formik>
        </>
    );
}

export default App;