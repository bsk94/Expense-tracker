import { Formik, Form } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import { StyledForm } from '../../../shared/styles';
import { RevenueItem } from '../../../shared/types';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';

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
              <Input
                type="date"
                name="date"
                onChange={handleChange}
                value={values.date}
                placeholder=" ">
                date
              </Input>

              <Input
                type="number"
                name="amount"
                onChange={handleChange}
                value={values.amount}
                placeholder=" ">
                amount
              </Input>

              <Button type="submit">Add</Button>
            </StyledForm>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddRevenue;
