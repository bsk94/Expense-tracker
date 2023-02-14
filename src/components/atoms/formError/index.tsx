import React from 'react';
import { ErrorMessage } from 'formik';
import { StyledError } from './formError-styles';

interface ErrorProps {
  name: string;
  className?: string;
}

const FormError: React.FC<ErrorProps> = ({ name, className }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <StyledError className={className}>{msg}</StyledError>}
    </ErrorMessage>
  );
};

export default FormError;
