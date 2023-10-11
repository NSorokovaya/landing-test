import React, { useState, useEffect } from 'react';
import style from './ContactForm.module.scss';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
const INIT_STATE = {
  name: '',
  email: '',
  message: '',
  contactMethod: 'email',
  nickname: '',
  phone: '',
};
const ContactForm = () => {
  const [formData, setFormData] = useState({ ...INIT_STATE });

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sent: ', formData);
    setFormData({ ...INIT_STATE });
  };

  const handleContactMethodChange = e => {
    const { value } = e.target;
    setFormData({
      ...INIT_STATE,
      contactMethod: value,
    });
  };
  const options = [
    { value: 'email', label: 'Email' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'viber', label: 'Viber' },
  ];
  return (
    <div className={style.contactForm}>
      <Title text="CONTACT US" />
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <label className={style.contactFormLabel} htmlFor="contactMethod">
            Choose contact method:
          </label>
          <select
            className={style.contactFormSelect}
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleContactMethodChange}
            required
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {formData.contactMethod === 'email' && (
          <div className={style.form}>
            <label className={style.contactFormLabel} htmlFor="name">
              Name:
            </label>
            <input
              className={style.contactFormInput}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {formData.contactMethod === 'email' && (
          <div className={style.form}>
            <label className={style.contactFormLabel} htmlFor="email">
              Email:
            </label>
            <input
              className={style.contactFormInput}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {formData.contactMethod !== 'email' && (
          <div className={style.form}>
            <label className={style.contactFormLabel} htmlFor="name">
              Name:
            </label>
            <input
              className={style.contactFormInput}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {formData.contactMethod === 'telegram' && (
          <div className={style.form}>
            <label className={style.contactFormLabel} htmlFor="nickname">
              Nickname:
            </label>
            <input
              className={style.contactFormInput}
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {formData.contactMethod === 'viber' && (
          <div className={style.form}>
            <label className={style.contactFormLabel} htmlFor="phone">
              Phone:
            </label>
            <input
              className={style.contactFormInput}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {formData.contactMethod === 'whatsapp' && (
          <div className={style.form}>
            <label className={style.contactFormLabel} htmlFor="phone">
              Phone:
            </label>
            <input
              className={style.contactFormInput}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className={style.form}>
          <label className={style.contactFormLabel} htmlFor="message">
            Message:
          </label>
          <textarea
            className={style.contactFormTextarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Button type="submit" text="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
