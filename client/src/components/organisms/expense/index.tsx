import { useState } from 'react';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import FormError from '../../atoms/formError';
import { Formik, Field } from 'formik';
import { StyledForm } from '../../../shared/styles';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import Category from '../../molecules/formCategory';
import { ExpenseItem, InitialExpense } from '../../../shared/types';
import { usePostExpense } from '../../../shared/hooks/finance';
import { StyledInputs, StyleCategory } from './expense-styles';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Navigate } from 'react-router-dom';

const AddExpense = () => {
  const isUser = useSelector((state: RootState) => state.auth.isUser);

  const [chosen, setChosen] = useState('');

  const navigate = useNavigate();

  const { mutateAsync } = usePostExpense();

  if (!isUser) {
    return <Navigate to={'/login'} />;
  }
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

  const handleOnSubmit = async (values: InitialExpense) => {
    await mutateAsync({
      ...values,
      financeType: 'expense'
    } as ExpenseItem);
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
              <h2>+ Add expense</h2>
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
              <StyleCategory>
                <Field
                  name="expenseCategory"
                  component={Category}
                  chosen={chosen}
                  setChosen={setChosen}
                  validate={validateUsername}
                />
                <FormError name="expenseCategory" />
              </StyleCategory>
              <Button type="submit" disabled={isSubmitting} className="formExp__btn--add">
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
