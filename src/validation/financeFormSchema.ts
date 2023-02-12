import * as Yup from 'yup';

export const addRevExpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Enter the name')
    .min(3, 'Name must have at least 3 characters')
    .max(100, "Name can't have more than 100 characters"),
  date: Yup.date()
    .required('Enter the date')
    .min('01/01/2022', 'This date is too far in the past')
    .max(new Date(), 'Cannot use future date'),
  amount: Yup.number()
    .positive('Amount must be greater than 0')
    .round('round')
    .required('Enter the amount')
    .max(100000, 'Cannot enter amount higher than 100.000$')
});
