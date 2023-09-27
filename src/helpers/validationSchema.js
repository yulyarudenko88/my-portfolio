import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('* Please, write your name'),
  email: Yup.string().email('Invalid email').required('* Please, write your email'),
  message: Yup.string()
    .min(2, 'Too Short!').required('* Please, add some message'),
});