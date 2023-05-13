import { Formik } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { StyledForm } from '../../../shared/styles';
import { RevenueItem, InitialRevenue } from '../../../shared/types';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import FormError from '../../atoms/formError';
import { usePostRevenue } from '../../../shared/hooks/finance';
import { StyledInputs } from './revenue-styles';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Navigate } from 'react-router-dom';

const AddRevenue = () => {
  const { mutateAsync } = usePostRevenue();

  const navigate = useNavigate();
  const isUser = useSelector((state: RootState) => state.auth.isUser);
  if (!isUser) {
    return <Navigate to={'/login'} />;
  }

  const initialValues: InitialRevenue = {
    name: '',
    date: '',
    amount: ''
  };

  const handleOnSubmit = async (values: InitialRevenue) => {
    await mutateAsync({
      ...values,
      financeType: 'revenue'
    } as RevenueItem);
    navigate('/');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addRevExpValidationSchema}
        onSubmit={handleOnSubmit}>
        {({ values, handleChange, isSubmitting }) => (
          <>
            <StyledForm>
              <h2>+ Add revenue</h2>
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
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={values.date}
                  placeholder=" ">
                  date
                </Input>
                <FormError name="date" />
                <Input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  value={values.amount}
                  placeholder=" ">
                  amount
                </Input>
                <FormError name="amount" />
              </StyledInputs>
              <Button type="submit" disabled={isSubmitting} className="formRev__btn--add">
                Add
              </Button>
            </StyledForm>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddRevenue;
