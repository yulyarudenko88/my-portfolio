import { useFormik } from 'formik';
import { validationSchema } from '../../helpers/validationSchema';

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
    // isValid,
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
    <form className="form" onSubmit={handleSubmit}>
      <div className="contact-group">
        <div className="contact-box">
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Enter your name*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {touched.name && errors.name && <div>{errors.name}</div>}
        </div>
        <div className="contact-box">
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Enter email address*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
        </div>
        <div className="contact-box contact-area">
          <textarea
            className="contact-input"
            name="message"
            placeholder="Message*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {touched.message && errors.message && <div>{errors.message}</div>}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
