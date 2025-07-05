import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiBookOpen, FiEye, FiUsers, FiTarget, FiCheck } = FiIcons;

const Home = () => {
  const valueProps = [
    {
      icon: FiEye,
      title: "Daily Practice of Attention",
      description: "Noticing the small moments that reveal how things really work"
    },
    {
      icon: FiTarget,
      title: "Real Observations Over Theater",
      description: "Genuine reflection instead of manufactured outrage"
    },
    {
      icon: FiUsers,
      title: "For Busy Professionals",
      description: "More than soundbites, less than hours-long deep dives"
    },
    {
      icon: FiBookOpen,
      title: "Understanding Over Validation",
      description: "Commentary for people who want to learn, not just agree"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              The Daily Note
              <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
                with James A. Brown
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto"
            >
              Finding the extraordinary in the ordinary. 5 days a week, 90 seconds a day, 
              on-air and online from sea to shining sea.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link 
                to="/listen" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiPlay} className="mr-2" />
                Listen to Today's Episode
              </Link>
              <a 
                href="https://knowyourpowernow.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiBookOpen} className="mr-2" />
                Get Know Your Power Course - $1,497 (Save $500)
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Daily practice of paying attention to the small moments that reveal how our world really works. 
            Genuine reflection for busy professionals who want to understand their world better, 
            not just feel better about what they already believe.
          </motion.p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why The Daily Note?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <SafeIcon icon={prop.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">Get daily observations delivered to your inbox</p>
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
        </div>
      </section>
    </div>
  );
};

export default Home;