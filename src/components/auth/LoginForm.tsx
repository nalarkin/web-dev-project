/* eslint-disable import/order */
/* eslint-disable unused-imports/no-unused-imports */
import React from 'react';

import { Form, Formik } from 'formik';

import { BUTTON_PRIMARY_CLASSES } from '../Button';
import { MyTextField } from './FormPrimatives';
import { LoginSchema, submitButtonIsDisabled } from './validation';

import { mutate } from 'swr';
import { useAuth } from './AuthProvider';
import { useToast } from '../Toast';

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { logIn, logOut } = useAuth();
  const { notifySuccess, notifyError } = useToast();
  const submitForm = ({ username, password }: FormValues) => {
    mutate('/api/auth', async () => {
      // let's update the todo with ID `1` to be completed,
      // this API returns the updated data
      const res = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        logIn();
        notifySuccess('Signed In!');
      } else {
        logOut();
        notifyError('Invalid Credentials');
      }
    });
    // alert(JSON.stringify({ username, password }));
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
            formType="text"
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
