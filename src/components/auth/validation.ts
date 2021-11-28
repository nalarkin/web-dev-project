import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required().min(2),
  password: Yup.string().required().min(2),
});

/** Determines if submit button in forms should be disabled. */
export const submitButtonIsDisabled = (
  dirty: boolean,
  isValid: boolean
): boolean => {
  // if form hasn't been touched, make button disabled
  if (!dirty) {
    return true;
  }
  // if form isn't valid, disable button
  return !isValid;
};
