import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiTarget, FiHeart, FiAward } = FiIcons;

const About = () => {
  const highlights = [
    {
      icon: FiUser,
      title: "What James Does",
      description: "The Daily Note is James's daily practice of paying attention to the gap between how we think things work and how they actually function in real life. He finds the extraordinary in ordinary moments—not because he's looking for inspiration, but because he's learned that's where the truth usually lives."
    },
    {
      icon: FiTarget,
      title: "His Approach",
      description: "Every episode starts with something specific James noticed: a conversation, a small interaction, a detail that caught his attention. He's not interested in grand theories or political theater. Instead, he explores what these moments reveal about how we navigate complex systems, build relationships, and make sense of modern life."
    },
    {
      icon: FiHeart,
      title: "Why This Matters",
      description: "In a world of hot takes and manufactured outrage, James offers genuine reflection for people who want to understand their world better, not just feel better about what they already believe. He trusts his audience to handle complicated truths if someone will just tell them straight."
    }
  ];

  const background = [
    "Award-winning journalist with USA TODAY",
    "Government communications specialist",
    "Independent voice with working-class roots",
    "Millennial perspective on timeless questions"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About James A. Brown
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Finding wisdom in what everyone else overlooks
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                James A. Brown has spent his career in the spaces where information becomes understanding. 
                As an award-winning journalist with USA TODAY and a government communications professional, 
                he's learned that the most important stories are often hiding in the details everyone else overlooks.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751698375073-JamesBrown.jpg" 
                alt="James A. Brown" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <SafeIcon icon={highlight.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Professional Background */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <SafeIcon icon={FiAward} className="mr-3 text-blue-600" />
              Professional Background
            </h2>
            <ul className="space-y-3">
              {background.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-white font-medium italic"
          >
            "The most important stories are often hiding in the details everyone else overlooks. 
            The Daily Note is about developing the daily practice of paying attention to what those details 
            reveal about how our world really works."
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;