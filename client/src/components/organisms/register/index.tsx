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
import { useNavigate } from 'react-router-dom';
import { usePostUser } from '../../../shared/hooks/user';
import { useState } from 'react';

interface LoginInitialValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();

  const { mutateAsync } = usePostUser();

  const [isShown, setIsShown] = useState(false);

  const initialValues: LoginInitialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const handleOnSubmit = async (values: LoginInitialValues, { setErrors }: { setErrors: any }) => {
    console.log(values);

    try {
      await mutateAsync(values);
      navigate('/login');
    } catch (e) {
      setErrors({
        email: 'Email is already taken'
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={handleOnSubmit}>
      {({ values, handleChange, status }) => (
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
                type={isShown ? 'text' : 'password'}
                className={isShown ? 'input__text' : 'input__password'}
                isPassowrdIcon={true}
                onToggle={() => setIsShown(!isShown)}
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder=" ">
                password
              </Input>
              <FormError name="password" />
              <Input
                type={isShown ? 'text' : 'password'}
                className={isShown ? 'input__text' : 'input__password'}
                isPassowrdIcon={true}
                onToggle={() => setIsShown(!isShown)}
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
