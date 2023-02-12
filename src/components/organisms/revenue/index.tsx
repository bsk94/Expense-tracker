import { Formik, Form } from 'formik';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

const AddRevenue = () => {
  const initialValues = {
    name: '',
    date: '',
    amount: ''
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({ values, handleChange }) => (
          <>
            <Form>
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
                type="text"
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
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddRevenue;
