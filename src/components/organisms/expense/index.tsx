import { useState } from 'react';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import FormError from '../../atoms/formError';
import { Formik, Field } from 'formik';
import { StyledForm } from '../../../shared/styles';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import Category from '../../molecules/formCategory';
import { ExpenseItem, InitialExpense } from '../../../shared/types';

const AddExpense = () => {
  const [chosen, setChosen] = useState('');

  const initialValues: InitialExpense = {
    name: '',
    date: '',
    amount: '',
    expenseCategory: chosen
  };

  function validateUsername(value: ExpenseItem) {
    let error;
    if (!value) {
      error = 'Select category';
    }
    return error;
  }

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
              <h2>+ Add expense</h2>
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
              <Field
                name="expCat"
                component={Category}
                chosen={chosen}
                setChosen={setChosen}
                validate={validateUsername}
              />
              <Button type="submit" className="formExp__btn--add">
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
