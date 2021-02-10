import React from 'react';
import emailjs from 'emailjs-com';
import sectionStyles from './section.module.css';
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

export default function ContactForm() {

  const { register, errors, handleSubmit, reset } = useForm();
  const alert = useAlert();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send('service_e757ps7', 'template_bcut3ta', templateParams, 'user_ymr9BVIZ0wXD1zMqbQmvY');
      reset();
      alert.success('Email Sent!');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form id={sectionStyles.contactForm} onSubmit={handleSubmit(onSubmit)} noValidate>
      <a name='contact'></a>

      <label>Name</label>
      <input
        className={sectionStyles.inputField}
        type='text'
        name='name'
        ref={register({
          required: { value: true, message: 'Please enter your name' },
          maxLength: { value: 30, message: 'Please use 30 characters or less' }
        })}
      />
      {errors.name && (
        <span className={sectionStyles.errorMessage}>
          {errors.name.message}
          <br />
        </span>
      )}

      <label>Subject</label>
      <input
        className={sectionStyles.inputField}
        type='text'
        name='subject'
        ref={register({
          required: { value: true, message: 'Please enter a subject' },
          maxLength: { value: 75, message: 'Subject cannot exceed 75 characters' }
        })}
      />
      {errors.subject && (
        <span className={sectionStyles.errorMessage}>
          {errors.subject.message}
          <br />
        </span>
      )}

      <label>Email</label>
      <input
        className={sectionStyles.inputField}
        type='email'
        name='email'
        ref={register({
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        })}
      />
      {errors.email && (
        <span className={sectionStyles.errorMessage}>
          Please enter a valid email address
          <br />
        </span>
      )}

      <label>Message</label>
      <textarea
        className={sectionStyles.inputField}
        name='message'
        ref={register({ required: true })}
      ></textarea>
      {errors.message && (
        <span className={sectionStyles.errorMessage}>
          Please enter a message
          <br />
        </span>
      )}

      <button id={sectionStyles.submitBtn} type='submit'>Send</button>
    </form>
  );
}