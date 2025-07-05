import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiSend, FiInstagram, FiTwitter, FiLinkedin, FiMessageCircle } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would be handled by Netlify
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "General Email",
      detail: "support@thedailynote.net",
      link: "mailto:support@thedailynote.net"
    },
    {
      icon: FiMail,
      title: "Course Support",
      detail: "support@knowyourpowernow.com",
      link: "mailto:support@knowyourpowernow.com"
    }
  ];

  const socialLinks = [
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "#"
    },
    {
      icon: FiTwitter,
      name: "X (Twitter)",
      url: "#"
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get In Touch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Connect with James
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Feedback</h2>
            
            <form 
              onSubmit={handleSubmit}
              name="contact-inquiry" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              className="bg-gray-50 p-8 rounded-lg"
            >
              <input type="hidden" name="form-name" value="contact-inquiry" />
              <p hidden>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select 
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select inquiry type</option>
                  <option value="comment">Comment on the show</option>
                  <option value="press">Press inquiry</option>
                  <option value="speaking">Speaking engagement</option>
                  <option value="advertising">Advertising/Sponsorship</option>
                  <option value="course">Course question</option>
                  <option value="general">General inquiry</option>
                  <option value="technical">Technical support</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiSend} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mr-4">
                    <SafeIcon icon={info.icon} className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <a href={info.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {info.detail}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Share Your Observations */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <SafeIcon icon={FiMessageCircle} className="mr-2 text-blue-600" />
                Share Your Observations
              </h3>
              <p className="text-gray-700">
                The Daily Note thrives on real observations from real people finding the extraordinary in ordinary moments. 
                What small detail caught your attention? What gap did you notice between how something should work and how it actually works?
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <SafeIcon icon={social.icon} className="h-5 w-5 text-gray-600" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe & Stay Updated</h2>
          <p className="text-gray-600 mb-8">Get daily observations delivered to your inbox via Substack</p>
          <div className="flex justify-center">
            <iframe 
              src="https://jamesbrowntv.substack.com/embed" 
              width="480" 
              height="320" 
              style={{border: '1px solid #EEE', background: 'white'}} 
              frameBorder="0" 
              scrolling="no"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Philosophy</h2>
          <blockquote className="text-lg text-gray-700 italic max-w-4xl mx-auto">
            "The most important stories are often hiding in the details everyone else overlooks. 
            The Daily Note is about developing the daily practice of paying attention to what those details 
            reveal about how our world really works."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;