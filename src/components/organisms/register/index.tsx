import { Formik } from 'formik';
import Button from '../../atoms/button';
import FormError from '../../atoms/formError';
import Input from '../../atoms/input';
import {
  StyledInputs,
  StyledContainer,
  StyledForm,
  StyledRegisterWrapper,
  StyledLink
} from './register-styles';
import { routes } from '../../../router/routes';
import { registerValidationSchema } from '../../../validation/registerFormSchema';

const Register = () => {
  interface LoginInitialValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  const initialValues: LoginInitialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({ values, handleChange }) => (
        <StyledContainer>
          <StyledForm>
            <h1>Register</h1>
            <StyledInputs>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder=" ">
                name
              </Input>
              <FormError name="name" />
              <Input
                type="text"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder=" ">
                email
              </Input>
              <FormError name="email" />
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder=" ">
                password
              </Input>
              <FormError name="password" />
              <Input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                placeholder=" ">
                confirm password
              </Input>
              <FormError name="confirmPassword" />
            </StyledInputs>
            <Button type="submit" className="formLogin__btn--login">
              Register
            </Button>
            <StyledRegisterWrapper>
              <p>Already have an account?</p>
              <StyledLink to={routes.login}>Log in</StyledLink>
            </StyledRegisterWrapper>
          </StyledForm>
        </StyledContainer>
      )}
    </Formik>
  );
};

export default Register;
