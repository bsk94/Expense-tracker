import { Formik } from 'formik';
import { loginValidationSchema } from '../../../validation/loginFormSchema';
import Button from '../../atoms/button';
import FormError from '../../atoms/formError';
import Input from '../../atoms/input';
import {
  StyledInputs,
  StyledContainer,
  StyledForm,
  StyledRegisterWrapper,
  StyledLink
} from './login-styles';
import { routes } from '../../../router/routes';
import { useAuth } from '../../../shared/hooks/user';

interface LoginInitialValues {
  email: string;
  password: string;
}

const initialValues: LoginInitialValues = { email: '', password: '' };

const Login = () => {
  const { mutateAsync } = useAuth();

  const handleOnSubmit = async (values: LoginInitialValues, { resetForm }: { resetForm: any }) => {
    console.log(values);
    await mutateAsync(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleOnSubmit}>
      {({ values, handleChange }) => (
        <StyledContainer>
          <StyledForm>
            <h1>Log in</h1>
            <StyledInputs>
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
            </StyledInputs>
            <Button type="submit" className="formLogin__btn--login">
              Login
            </Button>
            <StyledRegisterWrapper>
              <p>No account?</p>
              <StyledLink to={routes.register}>Register</StyledLink>
            </StyledRegisterWrapper>
          </StyledForm>
        </StyledContainer>
      )}
    </Formik>
  );
};

export default Login;
