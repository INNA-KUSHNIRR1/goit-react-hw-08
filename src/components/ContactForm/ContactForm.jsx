import style from './ContactForm.module.css';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { BsBoxArrowUpLeft } from 'react-icons/bs';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/slice';
import { useEffect, useId, useState } from 'react';
import { changeFilter, selectFilter } from '../../redux/filters/slice';

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
const ContactForm = ({ setIsFormVisible, textValue }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const plainNumberPattern = /^\d{2,10}$/;
  const formattedNumberPattern = /^\(\d{3}\) \d{3}-\d{4}$/;

  const determineInitialValues = text => {
    if (plainNumberPattern.test(text)) {
      const plainNumber = text.replace(/\D/g, ''); // Удаление всех нецифровых символов
      const formattedText = `(${plainNumber.slice(0, 3)}) ${plainNumber.slice(
        3,
        6,
      )}-${plainNumber.slice(6)}`;
      return { name: '', number: formattedText };
    } else if (formattedNumberPattern.test(text)) {
      return { name: '', number: text };
    } else {
      return { name: text, number: '' };
    }
  };

  const [initialValues, setInitialValues] = useState(
    textValue ? determineInitialValues(textValue) : { name: '', number: '' },
  );

  useEffect(() => {
    setInitialValues(
      textValue ? determineInitialValues(textValue) : { name: '', number: '' },
    );
  }, [textValue]);

  const handleSubmit = (values, actions) => {
    const duplicateContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number,
    );

    if (duplicateContact) {
      actions.setErrors({ name: 'This contact already exists' });
    } else {
      const newContact = {
        name: values.name,
        number: values.number,
      };
      dispatch(addContact(newContact));
      setIsFormVisible(true);
      actions.resetForm();
    }
    if (value !== '') {
      dispatch(changeFilter(''));
    }
  };
  const handleCloseForm = actions => {
    setInitialValues({ name: '', number: '' });
    setIsFormVisible(true);
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
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        {resetForm => (
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
              Add contact
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
    </>
  );
};
export default ContactForm;
