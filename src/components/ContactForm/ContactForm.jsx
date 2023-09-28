import { useFormik } from 'formik';
import { validationSchema } from '../../helpers/validationSchema';
import {
  Form,
  InputWrap,
  Input,
  Textarea,
  ErrorMessage,
  BtnSubmit,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isSubmitting,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        console.log(values);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrap>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name*"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name && (
          <ErrorMessage>{errors.name}</ErrorMessage>
        )}
      </InputWrap>

      <InputWrap>
        <Input
          type="email"
          name="email"
          placeholder="Enter email address*"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}
      </InputWrap>

      <InputWrap>
        <Textarea
          name="message"
          placeholder="Message*"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />
        {touched.message && errors.message && (
          <ErrorMessage>{errors.message}</ErrorMessage>
        )}
      </InputWrap>

      <BtnSubmit type="submit" disabled={isSubmitting}>
        Send
      </BtnSubmit>
    </Form>
  );
};

export default ContactForm;
