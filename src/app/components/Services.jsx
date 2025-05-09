'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import './Services.css';

const servicesData = [
  {
    Image:"https://cdn-icons-png.flaticon.com/128/921/921565.png",
    title: "Web Development",
    shortDescription: "Modern, responsive, and high-performance websites tailored to your business goals.....",
    fullDescription: "Modern, responsive, and high-performance websites tailored to your business goals using React, Next.js, and more."
  },
  {
    Image:"https://cdn-icons-png.flaticon.com/128/7858/7858975.png",
    title: "UI/UX Design",
    shortDescription: "Intuitive and beautiful user interfaces with a focus on user experience.....",
    fullDescription: "Intuitive and beautiful user interfaces with a focus on user experience, accessibility, and modern design trends."
  },
  {
    Image:"https://cdn-icons-png.flaticon.com/128/1375/1375106.png",
    title: "Graphic Design",
    shortDescription: "Receive expert guidance on visual branding, design strategies, and enhancing.....",
    fullDescription: "Receive expert guidance on visual branding, design strategies, and enhancing your digital presence through impactful graphic design."
  },
  
];

export default function Services() {
  return (
    <>
      <main id='services'> 
        <section className='booba'>
        <h2>What I Offer</h2>
          <h1>My Services</h1>
          <h3>Discover the range of services I provide to help your business thrive.</h3> </section>         
             
        <section className="services-container">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </section>
      </main>
    </>
  );
}

function ServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="service-card">
      {service.Image && <img src={service.Image} alt={service.title} className="service-image" />}
      <h2>{service.title}</h2>
      <p>
        {isExpanded ? service.fullDescription : service.shortDescription}
      </p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More -->"}
      </button>
    </div>
  );
}
