import React from 'react';
import { ErrorMessage } from 'formik';
import { StyledError } from './formError-styles';

interface ErrorProps {
  name: string;
}

const FormError: React.FC<ErrorProps> = ({ name }) => {
  return <ErrorMessage name={name}>{(msg) => <StyledError>{msg}</StyledError>}</ErrorMessage>;
};

export default FormError;
