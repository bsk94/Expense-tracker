import { useState, useEffect } from 'react';
import Input from '../../atoms/input';
import { Formik, Field } from 'formik';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Button from '../../atoms/button';
import FormError from '../../atoms/formError';
import { addRevExpValidationSchema } from '../../../validation/financeFormSchema';
import Category from '../../molecules/formCategory';
import { StyledForm } from '../../../shared/styles';
import { localData } from '../../../localData';
import { BudgetItem, InitialRevenue } from '../../../shared/types';
import { StyledInputs } from './editRevExp-styles';

const EditExpenseRevenue = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [chosen, setChosen] = useState<any>('');

  const data = localData.find((item) => item.id === id);
  console.log('aaaa', data);

  const [initData, setInitData] = useState<any>({
    name: '',
    date: '',
    amount: ''
  });

  useEffect(() => {
    if (id && data) {
      setInitData(data);
      setChosen(data.expCat);
    }
  }, [id, data]);

  const initialValues = {
    name: initData.name,
    date: initData.date,
    amount: initData.amount
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    if (values.expCat !== undefined) {
      values.expCat = chosen;
      ({ id, values });
      navigate('/');
    } else {
      ({ id, values });
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
            <h2>Edition</h2>
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
            {data?.expCat !== undefined ? (
              <Field name="category" component={Category} chosen={chosen} setChosen={setChosen} />
            ) : null}
            <Button type="submit" className="formExp__btn--add">
              Add
            </Button>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default EditExpenseRevenue;
