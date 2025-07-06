import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMic, FiUsers, FiClock, FiSend, FiCheck } = FiIcons;

const Speaking = () => {
  const [formData, setFormData] = useState({
    'inquiry-type': '',
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'speaking',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          'inquiry-type': '',
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
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
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
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
                James brings his unique perspective to organizations seeking authentic leadership and effective communication strategies. 
                Drawing from his experience as a journalist and government communications professional, he helps teams develop the 
                observational skills that lead to better decision-making.
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
                  <SafeIcon icon={FiMic} className="text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <SafeIcon icon={FiCheck} className="text-red-600 mt-1 mr-2 flex-shrink-0" />
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
              <SafeIcon icon={FiUsers} className="mr-3 text-orange-600" />
              Training Formats
            </h3>
            <ul className="space-y-3">
              {trainingFormats.map((format, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-md p-6 mb-6 text-center"
            >
              <SafeIcon icon={FiCheck} className="text-green-600 text-4xl mx-auto mb-2" />
              <p className="text-green-800 font-semibold">Thank you for your interest!</p>
              <p className="text-green-700 text-sm mt-1">
                Your speaking inquiry has been received. James will review your request and respond within 24-48 hours.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-200 rounded-md p-6 mb-6 text-center"
            >
              <p className="text-red-800 font-semibold">Sorry, there was an error sending your message.</p>
              <p className="text-red-700 text-sm mt-1">Please try again or contact us directly at support@thedailynote.net</p>
            </motion.div>
          )}

          {/* Hidden form for Netlify */}
          <form name="speaking" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="inquiry-type" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form
              name="speaking"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="speaking" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiry-type"
                  value={formData['inquiry-type']}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select inquiry type</option>
                  <option value="speaking">Speaking engagement</option>
                  <option value="training">Corporate training</option>
                  <option value="workshop">Workshop facilitation</option>
                  <option value="keynote">Keynote presentation</option>
                  <option value="coaching">Executive coaching</option>
                  <option value="general">General inquiry</option>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  placeholder="Please include details about your event, audience size, date, location, and any specific topics you'd like James to address."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  <SafeIcon icon={FiSend} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-2">
              Prefer to reach out directly?
            </p>
            <a
              href="mailto:support@thedailynote.net"
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              support@thedailynote.net
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Speaking;