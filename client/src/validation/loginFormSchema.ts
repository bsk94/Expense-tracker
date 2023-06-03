import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Enter email').email('Email is not valid'),
  password: Yup.string().required('Enter password')
});
