import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const authValidationSchema = Yup.object().shape({
  email: Yup.string().required('Enter email').email('Email is not valid'),
  password: Yup.string().password().required('Enter password')
});
