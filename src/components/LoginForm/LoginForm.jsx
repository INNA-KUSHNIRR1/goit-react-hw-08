import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './LoginForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const UserSchema = Yup.object().shape({
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

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={style.form}>
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
            Log In
          </button>
          <p className={style.link}>
            Don't have a account?
            <Link className={style.signUp} to="/register">
              Register
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  );
};
