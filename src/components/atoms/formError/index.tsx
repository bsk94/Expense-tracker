import React from 'react';
import { ErrorMessage } from 'formik';

interface ErrorProps {
  name: string;
}

const FormError: React.FC<ErrorProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <div style={{ color: 'red', marginBottom: '-1.9rem' }}>{msg}</div>}
    </ErrorMessage>
  );
};

export default FormError;
