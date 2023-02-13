import { useState } from 'react';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import FormError from '../../atoms/formError';
import { Formik, Field } from 'formik';
import { StyledForm } from '../../../shared/styles';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import Category from '../../molecules/formCategory';

const AddExpense = () => {
  const [chosen, setChosen] = useState('');

  const initialValues = {
    name: '',
    date: '',
    amount: '',
    expenseCategory: chosen
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
              <Field name="expCat" component={Category} chosen={chosen} setChosen={setChosen} />
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

export default AddExpense;
