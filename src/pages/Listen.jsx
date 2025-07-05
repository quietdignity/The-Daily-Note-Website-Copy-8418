import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiHeadphones, FiMail, FiExternalLink } = FiIcons;

const Listen = () => {
  const recentObservations = [
    "What a conversation in a coffee shop revealed about how we actually communicate",
    "How a small detail at the DMV explains larger patterns in how systems work",
    "Why the gap between official processes and real experience matters",
    "What walking through downtown taught about how people navigate complexity",
    "How everyday interactions reveal truths about modern professional life"
  ];

  const platforms = [
    {
      name: "Apple Podcasts",
      url: "https://podcasts.apple.com/us/podcast/the-daily-note-with-james-a-brown/id1679222021"
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/5Impg5m0ZPEuE9ezKFcP5A"
    },
    {
      name: "Google Podcasts",
      url: "#"
    },
    {
      name: "Amazon Music",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Listen to The Daily Note
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Finding the extraordinary in the ordinary
          </motion.p>
        </div>
      </section>

      {/* Current Episodes */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Episodes</h2>
            
            {/* Captivate FM Embed */}
            <div className="w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                style={{width: '100%', height: '100%'}} 
                frameBorder="no" 
                scrolling="no" 
                allow="clipboard-write" 
                seamless 
                src="https://player.captivate.fm/show/b56182bf-22f2-42e4-b14d-6eb32f52dd81/episodes"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>

          {/* About the Show */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Show</h3>
            <p className="text-gray-700 mb-4">
              The Daily Note is a daily practice of paying attention to the small moments that reveal how our world really works. 
              Each episode starts with something specific James noticed and explores what it reveals about how we navigate modern life.
            </p>
            <p className="text-gray-700">
              This isn't punditry or political theater. It's genuine reflection for busy professionals who want more than soundbites 
              but don't have hours to spare. Commentary for people who want to understand their world better, not feel better about 
              what they already believe.
            </p>
          </motion.div>

          {/* Recent Observations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Observations</h3>
            <ul className="space-y-3">
              {recentObservations.map((observation, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{observation}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe on Your Favorite Platform</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <SafeIcon icon={FiHeadphones} className="mr-2 text-blue-600" />
                <span className="font-medium text-gray-900">{platform.name}</span>
                <SafeIcon icon={FiExternalLink} className="ml-2 text-gray-400" />
              </motion.a>
            ))}
          </div>

          {/* Email Signup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Episodes by Email</h3>
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
        </div>
      </section>
    </div>
  );
};

export default Listen;