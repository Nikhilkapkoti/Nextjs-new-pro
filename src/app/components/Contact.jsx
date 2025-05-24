'use client';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatusMessage(null), 5000);
        },
        (error) => {
          setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
          console.error('EmailJS error:', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className={`${styles.contactMain} ${darkMode ? styles.darkMode : ''}`}>
      <div className={styles.container}>
        <h2>Connect with me</h2>
        <h1>Get in touch</h1>
        <h3>I’d love to hear from you! If you have any questions, comments, or feedback.</h3>
        <h2>Send me a Message</h2>
        <div className={styles.flexContainer}>
          <div className={styles.contactDetails}>
            <div className={styles.detail}>
              <span className={styles.icon}>📞</span>
              <span>Call Me On: +91 6399015401</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.icon}>📍</span>
              <span>Address: Haldwani, Uttarakhand</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.icon}>✉️</span>
              <span>Email: nikhilkapkoti32@gmail.com</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.icon}>🌐</span>
              <span>
                Website:{' '}
                <a href="https://www.linkedin.com/in/nikhil-kapkoti-9820712b8/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              required
            />
            {statusMessage && (
              <p className={`${styles.statusMessage} ${styles[statusMessage.type]}`}>
                {statusMessage.text}
              </p>
            )}
            <button type="submit" className={styles.button} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Submit now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;