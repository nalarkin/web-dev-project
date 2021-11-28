import { ErrorMessage, Field } from 'formik';

interface WrapperProps {
  formName: string;
  formType: string;
  formPlaceholder: string;
  formLabel?: string;
  requiredField?: boolean;
}

/**
 * Utility class to wrap all form fields with the same
 * class names. In combination with tailwind,
 * it will apply the same style to all form fields it creates.
 */
export function MyTextField({
  formName,
  formType,
  formPlaceholder,
  formLabel,
}: // errorExists = false,
WrapperProps): JSX.Element {
  const formField = (
    <>
      {formLabel ? <label htmlFor={formName}>{`${formLabel}`}</label> : null}
      <div>
        <Field
          name={formName}
          type={formType}
          placeholder={formPlaceholder}
          aria-label={`form-${formName}`}
        />
      </div>
    </>
  );
  const errorMessage = <ErrorMessage name={formName} />;

  return (
    <>
      <div className="mx-auto mt-5 flex flex-col">{formField}</div>
      <div className="text-sm font-semibold text-center text-red-700">
        {errorMessage}
      </div>
    </>
  );
}
