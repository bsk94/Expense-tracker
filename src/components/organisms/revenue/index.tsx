import { Formik } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { StyledForm } from '../../../shared/styles';
import { RevenueItem, InitialRevenue } from '../../../shared/types';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import FormError from '../../atoms/formError';
import { usePostRevenue } from '../../../shared/hooks/revenue';
import { StyledInputs } from './revenue-styles';

const AddRevenue = () => {
  const { data, mutateAsync } = usePostRevenue();

  const initialValues: InitialRevenue = {
    name: '',
    date: '',
    amount: ''
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={addRevExpValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          mutateAsync({
            ...values,
            financeType: 'revenue'
          } as RevenueItem);
        }}>
        {({ values, handleChange }) => (
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
              <Button type="submit" className="formRev__btn--add">
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
