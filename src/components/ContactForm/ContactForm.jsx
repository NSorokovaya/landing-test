import React, { useState, useEffect } from 'react';
import style from'./ContactForm.module.scss'
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
const INIT_STATE = {
   name: '',
    email: '',
  message: '',
    contactMethod: 'email'
}
const ContactForm = () => {
  const [formData, setFormData] = useState({...INIT_STATE})

useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
}, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sent: ', formData);
    setFormData({ ...INIT_STATE })
  };

   const handleContactMethodChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...INIT_STATE,
      contactMethod: value
    });
  }
  return (
    <div className={style.contactForm}>
      <Title text='CONTACT US'/>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <label htmlFor="contactMethod">Choose contact method:</label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleContactMethodChange}
            required
          >
            <option value="email">Email</option>
            <option value="telegram">Telegram</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="viber">Viber</option>
          </select>
        </div>
        {formData.contactMethod === 'email' && (
          <div className={style.form}>
            <label htmlFor="name">Name:</label>
            <input
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
            <label htmlFor="email">Email:</label>
            <input
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
            <label htmlFor="name">Name:</label>
            <input
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
            <label htmlFor="nickname">Nickname:</label>
            <input
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
            <label htmlFor="phone">Phone:</label>
            <input
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
            <label htmlFor="phone">Phone:</label>
            <input
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
       <Button type="submit" text='Send'/>
      </form>
    </div>
  );
};

export default ContactForm;