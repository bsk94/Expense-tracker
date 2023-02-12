import { Formik, Form } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { StyledForm } from '../../../shared/styles';
import { RevenueItem } from '../../../shared/types';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import FormError from '../../atoms/formError';

const AddRevenue = () => {
  const initialValues: RevenueItem = {
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
        }}>
        {({ values, handleChange }) => (
          <>
            <StyledForm>
              <h2>+ Add revenue</h2>
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
