import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './RegistrationForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { selectUser } from '../../redux/auth/selectors';
import { register } from '../../redux/auth/operations';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(50, 'Password is too long - should be 50 chars maximum.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character.',
    ),
});

export const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    // setIsFormVisible(true);
    actions.resetForm();
  };
  return (
    <section className={style.sectionForm}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={style.form}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.field}
            type="text"
            name="name"
            id={nameFieldId}
            autoComplete="name"
          />
          <ErrorMessage className={style.error} name="name" component="span" />
          <label className={style.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={style.field}
            type="email"
            name="email"
            id={emailFieldId}
            autoComplete="email"
            placeholder="user@gmail.com"
          />
          <ErrorMessage className={style.error} name="email" component="span" />
          <label className={style.label} htmlFor={passwordFieldId}>
            Password
          </label>

          <Field
            className={style.field}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={style.error}
            name="password"
            component="span"
          />
          <button className={style.btn} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </section>
  );
};
