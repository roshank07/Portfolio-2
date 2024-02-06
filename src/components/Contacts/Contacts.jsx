import React, { useState } from 'react';
import { MdOutlineMailOutline,MdOutlineWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";


export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to send the email here
    // For now, let's just log the form data
    console.log(formData);
  };

  return (
    <section id="contacts" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2"><MdOutlineMailOutline className="text-gray-500 mr-2 w-6 h-6  inline-block"/>Email: roshann.purbey@gmail.com</p>
            <p className="text-gray-600 mb-2"><MdOutlineWhatsapp className='text-green-400 mr-2 w-6 h-6 inline-block'/>Phone: +916261779331</p>
            <p className="text-gray-600 mb-2"><CiLinkedin className='text-blue-400 mr-2 w-6 h-6 inline-block'/> LinkedIn: <a href="https://www.linkedin.com/in/roshan-purbey-824783168/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Roshan Purbey</a></p>
          </div>
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} className="w-full font-normal border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <input type="email" id="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} className="w-full font-normal border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <input type="text" id="subject" placeholder='Subject' name="subject" value={formData.subject} onChange={handleChange} className="w-full font-normal border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div className="mb-4">
                <textarea id="message" name="message" placeholder='Message' value={formData.message} onChange={handleChange} rows="4" className="w-full font-light border text-xs sm:text-sm border-gray-300 rounded-md px-3 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
