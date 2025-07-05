import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBook, FiUsers, FiTarget, FiCheck, FiDollarSign, FiMail } = FiIcons;

const Education = () => {
  const whatYouLearn = [
    "How decisions actually get made (not the official version)",
    "Who has real influence and how to reach them effectively",
    "Communication strategies that work with officials and staff",
    "How to build coalitions that create sustainable change",
    "What to do when your advocacy becomes public",
    "Digital tools for modern civic engagement"
  ];

  const courseIncludes = [
    "6 comprehensive audio modules (7+ hours of content)",
    "Complete toolkit with templates and worksheets",
    "Power mapping exercises for your specific situations",
    "Message crafting frameworks that actually work with officials",
    "Coalition building strategies from someone who's been inside the process",
    "Crisis management guidance when things go public",
    "Exclusive access to private Discord community for ongoing support and networking"
  ];

  const whoItsFor = [
    "Parents advocating for better schools in their district",
    "Small business owners navigating regulations and permits",
    "Community members working for local change",
    "Anyone tired of feeling powerless in systems that affect their daily life",
    "People who want to engage civically without the political circus"
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
                Know Your Power: How to Get What You Want From Government
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Navigate the systems that shape your daily life
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                <div className="flex items-center justify-center mb-2">
                  <SafeIcon icon={FiDollarSign} className="text-red-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">$1,497</span>
                </div>
                <p className="text-gray-600 mb-4">Complete Course</p>
                <p className="text-sm text-red-600 font-semibold">
                  Regular Price: $1,997 - Save $500
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751698273402-knowyourpower.jpg" 
                alt="Know Your Power Course" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Government decisions affect everything from your commute to your kid's school to your small business operations. 
              This course isn't about politics—it's about understanding the systems that shape your daily reality and learning 
              how to engage them effectively when it matters to you.
            </p>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SafeIcon icon={FiTarget} className="mr-3 text-orange-600" />
              What You'll Learn
            </h3>
            <ul className="space-y-3">
              {whatYouLearn.map((item, index) => (
                <li key={index} className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Course Includes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SafeIcon icon={FiBook} className="mr-3 text-orange-600" />
              Course Includes
            </h3>
            <ul className="space-y-3">
              {courseIncludes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who This Is For */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SafeIcon icon={FiUsers} className="mr-3 text-orange-600" />
              Who This Is For
            </h3>
            <ul className="space-y-3">
              {whoItsFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* James's Promise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-orange-50 p-8 rounded-lg mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">James's Promise</h3>
            <blockquote className="text-lg text-gray-700 italic">
              "This isn't theory from someone who's never been in the room where decisions get made. 
              These are strategies I've used and seen work from inside government communications. 
              You'll learn what officials actually respond to—not what you think they should respond to."
            </blockquote>
          </motion.div>

          {/* Contact and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6 flex items-center justify-center">
              <SafeIcon icon={FiMail} className="mr-2" />
              Questions? Email support@knowyourpowernow.com
            </p>
            <a 
              href="https://knowyourpowernow.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiCheck} className="mr-2" />
              Get Instant Access - $1,497 (Save $500)
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;