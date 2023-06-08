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
import { RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAuth } from '../../../features/authSlice';
import { useState } from 'react';

interface LoginInitialValues {
  email: string;
  password: string;
}

const initialValues: LoginInitialValues = { email: '', password: '' };

const Login = () => {
  const isUser = useSelector((state: RootState) => state.auth.isUser);
  const dispatch = useDispatch();

  const [isShown, setIsShown] = useState(false);

  const { mutateAsync } = useAuth();
  // { resetForm }: { resetForm: any }
  const handleOnSubmit = async (values: LoginInitialValues, { setErrors }: { setErrors: any }) => {
    console.log(values);
    try {
      await mutateAsync(values);
      // resetForm();
      dispatch(setAuth(true));
    } catch (e) {
      console.log('wrong pass');
      setErrors({
        password: 'Password or email is incorrect'
      });
    }
  };

  if (isUser) {
    return <Navigate to={'/'} />;
  }

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
                type={isShown ? 'text' : 'password'}
                className={isShown ? 'input__text' : 'input__password'}
                name="password"
                onChange={handleChange}
                value={values.password}
                isPassowrdIcon={true}
                onToggle={() => setIsShown(!isShown)}
                placeholder=" ">
                password
              </Input>
              <FormError name="password" />
            </StyledInputs>
            <Button type="submit" className="formLogin__btn--login">
              Log in
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
