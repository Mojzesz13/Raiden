import React from 'react';
import './contactForm.scss';
import { Formik, useField, Form } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <TextField
        {...field}
        label={label}
        helperText={errorText}
        error={!!errorText}
        margin='normal'
        placeholder={label}
        inputProps={{ style: { fontSize: '3rem' } }}
        InputLabelProps={{ style: { display: 'none ' } }}
      />
    </>
  );
};
const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
        <div className='checkMark'>
          <span />
          <span />
        </div>
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};
const TextArea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <TextField
      {...field}
      label={label}
      margin='normal'
      {...field}
      multiline
      rowsMax={10}
      InputLabelProps={{ style: { display: 'none ' } }}
    />
  );
};
const ContactForm = ({ handleOpenPolicy }) => {
  return (
    <Formik
      initialValues={{
        personalDate: '',
        email: '',
        city: '',
        message: '',
        acceptTerms: false,
      }}
      validationSchema={Yup.object({
        personalDate: Yup.string()
          .typeError('Akceptujemy tylko litert')
          .min(6, 'Minimum 6 znaków')
          .max(40, 'Maxymalnie 30 znaków')
          .required('Pole obowiązkowe'),
        email: Yup.string()
          .typeError('Proszę podać poprawny adres email')
          .email('Proszę podać poprawny adres email')
          .min(6, 'Minimum 6 znaków')
          .required('Pole obowiązkowe'),
        acceptTerms: Yup.boolean()
          .required('Pole obowiązkowe ')
          .oneOf([true], 'Pole obowiązkowe'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          emailjs
            .send(
              'gmail',
              'template_9xns9er',
              {
                personalDate: values.personalDate,
                email: values.email,
                message: values.message,
              },
              'user_0dBUHSltv50ciiIFRlEjN'
            )
            .then(() => {
              setSubmitting(false);
              resetForm();
            })
            .catch(() => {
              setSubmitting(false);
              alert('Error sending email...');
            });
        }, 1000);
      }}
    >
      {(props) => (
        <Form className='formContainer'>
          <div className='inputHolder'>
            <p>Imię i nazwisko</p>
            <CustomTextInput
              label='Imię i nazwisko'
              name='personalDate'
              type='text'
            />
          </div>
          <div className='inputHolder'>
            <p>Email</p>
            <CustomTextInput label='Email' name='email' type='text' />
          </div>
          <div className='textAreaContainer'>
            <p>
              <span> Wiadomość</span>
            </p>
            <TextArea label='Wiadomość' name='message' type='text' />
          </div>
          <div className='buttonContainer'>
            <div className='termsContainer'>
              <CustomCheckbox name='acceptTerms'></CustomCheckbox>
              <p>Akceptuję politykę prywatności</p>
              <span className='rodoPolicy' onClick={handleOpenPolicy}>
                RODO
              </span>
            </div>
            <button type='submit'>WYŚLIJ</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
