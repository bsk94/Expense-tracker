import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Enter the name')
    .min(3, 'Name must have at least 3 characters')
    .max(100, "Name can't have more than 100 characters"),
  email: Yup.string().required('Enter email').email('Email is not valid'),
  password: Yup.string().password().required('Enter password'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});
