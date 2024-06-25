import style from './EditContact.module.css';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { BsBoxArrowUpLeft } from 'react-icons/bs';
import { useId } from 'react';
import { editContact } from '../../redux/contacts/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      'Invalid phone number (use format: (XXX) XXX-XXXX)',
    )
    .required('Required'),
});
const TextMaskCustom = ({ field, ...props }) => (
  <MaskedInput
    {...field}
    {...props}
    mask={[
      '(',
      /[0-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholder="(123) 456-7890"
    showMask
    className={style.field}
  />
);
const EditContactForm = ({ setIsEdit, contact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const updateContact = {
      name: values.name,
      number: values.number,
    };
    console.log(updateContact);
    dispatch(editContact({ contactId: contact.id, updateContact }))
      .unwrap()
      .then(() => {
        setIsEdit(false);
        actions.resetForm();
      });
  };
  const handleCloseForm = actions => {
    setIsEdit(false);
    actions.resetForm();
  };
  const handleClick = event => {
    const input = event.target;
    if (input.value === '' || input.value === '(___) ___-____') {
      setTimeout(() => {
        input.setSelectionRange(1, 1);
      }, 0);
    }
  };

  return (
    <section className={style.sectionForm}>
      <Formik
        initialValues={{ name: contact.name, number: contact.number }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        {resetForm => (
          <Form className={style.form}>
            <p className={style.title}>Edit contact</p>
            <label className={style.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={style.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={style.error}
              name="name"
              component="span"
            />
            <label className={style.label} htmlFor={numberFieldId}>
              Number
            </label>

            <Field
              className={style.field}
              type="tel"
              name="number"
              id={numberFieldId}
              component={TextMaskCustom}
              onClick={handleClick}
            />
            <ErrorMessage
              className={style.error}
              name="number"
              component="span"
            />
            <button className={style.btn} type="submit">
              Save
            </button>
            <button
              className={style.btnUp}
              type="button"
              onClick={() => handleCloseForm(resetForm)}
            >
              <BsBoxArrowUpLeft className={style.iconUp} size={20} />
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default EditContactForm;
