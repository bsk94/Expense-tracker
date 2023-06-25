import { useState, useEffect } from 'react';
import Input from '../../atoms/input';
import { Formik, Field } from 'formik';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Button from '../../atoms/button';
import FormError from '../../atoms/formError';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import Category from '../../molecules/formCategory';
import { StyledForm } from '../../../shared/styles';
import { BudgetItem, InitialRevenue } from '../../../shared/types';
import { StyledInputs } from './editRevExp-styles';
import { useSingleFinance, useUpdateFinance } from '../../../shared/hooks/finance';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const EditExpenseRevenue = () => {
  const isUser = useSelector((state: RootState) => state.auth.isUser);

  const navigate = useNavigate();

  const { id } = useParams();
  const { data } = useSingleFinance(id as string);
  const { mutateAsync } = useUpdateFinance();

  const [chosen, setChosen] = useState<any>('');

  const [initData, setInitData] = useState<InitialRevenue>({
    name: '',
    date: '',
    amount: ''
  });

  if (!isUser) {
    return <Navigate to={'/login'} />;
  }

  useEffect(() => {
    if (id && data) {
      setInitData(data);
      setChosen(data.expenseCategory);
    }
  }, [id, data]);

  const initialValues: InitialRevenue = {
    name: initData.name,
    date: initData.date,
    amount: initData.amount
  };

  const handleSubmit = async (values: any) => {
    console.log('ggg', values);
    if (values.expenseCategory !== undefined) {
      values.expenseCategory = chosen;
      await mutateAsync({ ...values, _id: id } as BudgetItem);
      navigate('/');
    } else {
      await mutateAsync({ ...values, _id: id } as BudgetItem);
      navigate('/');
    }
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={addRevExpValidationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}>
        {({ values, handleChange }) => (
          <StyledForm>
            <h2>Edit entry</h2>
            <StyledInputs>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="">
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
                type="text"
                name="amount"
                onChange={handleChange}
                value={values.amount}
                placeholder="">
                amount
              </Input>
              <FormError name="amount" />
            </StyledInputs>
            {data?.expenseCategory !== undefined ? (
              <Field name="category" component={Category} chosen={chosen} setChosen={setChosen} />
            ) : null}
            <Button type="submit" className="formExp__btn--add">
              Edit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default EditExpenseRevenue;
