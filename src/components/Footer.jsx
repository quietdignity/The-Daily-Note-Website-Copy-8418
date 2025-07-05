import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInstagram, FiTwitter, FiLinkedin, FiMail } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">The Daily Note</h3>
            <p className="text-gray-300 mb-4">
              Finding the extraordinary in the ordinary. 5 days a week, 90 seconds a day, 
              on-air and online from sea to shining sea.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/dailynoteshow" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiInstagram} className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/dailynoteshow" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/the-daily-note-with-james-a-brown/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
              </a>
              <a 
                href="mailto:support@thedailynote.net" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiMail} className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/listen" className="text-gray-300 hover:text-white transition-colors">Listen</Link></li>
              <li><Link to="/education" className="text-gray-300 hover:text-white transition-colors">Education</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>support@thedailynote.net</li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link to="/speaking" className="hover:text-white transition-colors">Speaking Inquiries</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Daily Note with James A. Brown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;