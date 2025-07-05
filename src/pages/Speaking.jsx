import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMic, FiUsers, FiClock, FiSend, FiCheck } = FiIcons;

const Speaking = () => {
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

  const speakingTopics = [
    {
      title: "Finding the Extraordinary in the Ordinary: Leadership Through Observation",
      points: [
        "How paying attention to small details reveals larger patterns",
        "Making better decisions by noticing what others overlook",
        "Building organizational understanding through specific observations"
      ]
    },
    {
      title: "The Gap Between How Things Should Work and How They Actually Work",
      points: [
        "Navigating the difference between official processes and real experience",
        "Understanding complex systems through daily interactions",
        "Leading effectively when theory meets reality"
      ]
    },
    {
      title: "Genuine Communication in a Performance Culture",
      points: [
        "Moving beyond political theater in organizational communication",
        "Building trust through authentic observation and honest reflection",
        "Creating space for complicated truths in professional environments"
      ]
    },
    {
      title: "Daily Practice of Paying Attention",
      points: [
        "Developing observational skills that improve decision-making",
        "Finding wisdom in routine interactions and everyday moments",
        "Building awareness that transforms how teams work together"
      ]
    }
  ];

  const trainingFormats = [
    "Keynote presentations for conferences and organizational events",
    "Half-day workshops on observational leadership",
    "Team sessions on authentic communication",
    "Executive coaching on decision-making through observation"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Speaking & Corporate Training
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights for teams navigating complexity
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                James brings his unique perspective to organizations seeking authentic leadership 
                and effective communication strategies. Drawing from his experience as a journalist 
                and government communications professional, he helps teams develop the observational 
                skills that lead to better decision-making.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751698232217-james%20brown%20speaking%20at%20a%20conference.jpg" 
                alt="James Brown Speaking at Conference" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Speaking Experience</h2>
            <div className="flex justify-center mb-6">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751698220433-James%20brown%20on%20a%20panel%20at%20a%20conference.jpg" 
                alt="James Brown on Panel" 
                className="rounded-lg shadow-lg max-w-lg w-full"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              James regularly speaks at conferences, corporate events, and training sessions, 
              sharing insights on leadership, communication, and navigating complex systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Speaking Topics</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {speakingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <SafeIcon icon={FiMic} className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <SafeIcon icon={FiCheck} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Training Formats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SafeIcon icon={FiUsers} className="mr-3 text-blue-600" />
              Training Formats
            </h3>
            <ul className="space-y-3">
              {trainingFormats.map((format, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{format}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-700 mb-4">
              <strong>Investment:</strong> Contact for speaking fees and availability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Speaking Information</h2>
            <p className="text-gray-600">Get in touch to discuss your event or training needs</p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            name="speaking-inquiry" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <input type="hidden" name="form-name" value="speaking-inquiry" />
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
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Speaking;