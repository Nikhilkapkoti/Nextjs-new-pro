'use client'; // pages/contact.js
import React, { useState, useRef } from 'react';
import styles from './Contact.module.css'; // Assuming you're using CSS modules

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    photo: null, // To hold the file
  });

  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic (e.g., send to an API)
    console.log('Form submitted:', formData);
    // Optionally reset the form
    setFormData({ name: '', email: '', message: '', photo: null });
  };

  const handleFileUpload = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  return (
    <div id='contact' className={styles.container}>
      <h2>Connect with me</h2>
      <h1>Get in touch</h1>
      <h3>I’d love to hear from you! If you have any questions, comments, or feedback.</h3>
      <h2>Send me a Message</h2>
  
      {/* Flex Container for Contact Details and Form */}
      <div className={styles.flexContainer}>
        {/* Contact Details Section */}
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
            <span>Website: <a href="https://www.linkedin.com/in/nikhil-kapkoti-9820712b8/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>
          {/* Custom Upload Button */}
          <button type="button" onClick={handleFileUpload} className={styles.uploadButton}>
            Upload Photo
          </button>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className={styles.fileInput}
            ref={fileInputRef} // Attach the ref to the file input
            style={{ display: 'none' }} // Hide the default file input
          />
        </div>
  
        {/* Form Section */}
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <button type="submit" className={styles.button}>Submit now</button>
        </form>
      </div>
    </div>
  );
}  

export default Contact;
