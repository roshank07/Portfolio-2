import React, { useState, useRef } from 'react';
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import emailjs from '@emailjs/browser';

export default function Contacts() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bq1u1cc', 'template_kx9uf3d', form.current, {
        publicKey: 'RDAAveoOmbbA4eJsb',
      })
      .then(() => {
        // console.log('SUCCESS!');
        setSuccessMessage('Message sent successfully.');
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setSuccessMessage(null);
        }, 7000);
        form.current.reset();
      })
      .catch((error) => {
        // console.log('FAILED...', error.text);
        setErrorMessage('Failed to send message. Please try again');
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      });
  };

  return (
    <section id="contacts" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="shadow-md rounded-lg p-6 bg-slate-800">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-2"><MdOutlineMailOutline className="text-gray-500 mr-2 w-6 h-6  inline-block"/>Email: roshann.purbey@gmail.com</p>
            <p className="text-gray-400 mb-2"><MdOutlineWhatsapp className='text-green-400 mr-2 w-6 h-6 inline-block'/>Phone: +916261779331</p>
            <p className="text-gray-400 mb-2"><CiLinkedin className='text-blue-400 mr-2 w-6 h-6 inline-block'/>LinkedIn: <a href="https://www.linkedin.com/in/roshan-purbey-824783168/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Roshan Purbey</a></p>
          </div>
          {/* Contact Form */}
          <div className="bg-slate-800 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-400 mb-4">Send a Message</h3>
            {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <form ref={form} onSubmit={handleSubmit}>
             <div className="mb-4">
                <input type="text" id="name" placeholder='Name' name="user_name" value={formData.user_name} onChange={handleChange} className="w-full font-normal bg-slate-800 text-gray-200 border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <input type="email" id="email" placeholder='Email' name="user_email" value={formData.user_email} onChange={handleChange} className="w-full font-normal bg-slate-800 text-gray-200  border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <input type="text" id="subject" placeholder='Subject' name="subject" value={formData.subject} onChange={handleChange} className="w-full font-normal bg-slate-800 text-gray-200  border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <textarea id="message"  placeholder='Message' name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full font-light bg-slate-800 text-gray-200  border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
