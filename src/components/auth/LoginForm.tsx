import React from 'react';

import { Form, Formik } from 'formik';

import { BUTTON_PRIMARY_CLASSES } from '../Button';
import { MyTextField } from './FormPrimatives';
import { LoginSchema, submitButtonIsDisabled } from './validation';

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const submitForm = ({ username, password }: FormValues) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify({ username, password }));
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={submitForm}
    >
      {({ isValid, dirty }) => (
        // {({ errors, touched }) => (
        <Form className="flex flex-col mt-5">
          <MyTextField
            formName="username"
            formType="email"
            formPlaceholder="Username"
            formLabel="Username"
          />
          <MyTextField
            formName="password"
            formType="password"
            formPlaceholder="Password"
            formLabel="Password"
          />
          <div className="mx-auto mt-10">
            <button
              disabled={submitButtonIsDisabled(dirty, isValid)}
              onClick={() => null}
              type="submit"
              className={BUTTON_PRIMARY_CLASSES}
            >
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
