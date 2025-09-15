import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12 border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">Contact</h3>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <FiMail className="text-xl" />
              <a target='__blank' href="mailto:thesauron.tech@gmail.com" className="hover:underline">
                thesauron.tech@gmail.com
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <FaInstagram className="text-xl" />
              <a target='__blank' href="https://www.instagram.com/the_sauron__/" className="hover:underline">
                the_sauron__
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">Services</h3>
            <ul className="space-y-2">
              <li>
                <a target='__blank' href="https://topmate.io/the_sauron/1706299?utm_source=public_profile&utm_campaign=the_sauron" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Video Editing
                </a>
              </li>
              <li>
                <a  target='__blank'  href="https://topmate.io/the_sauron/1681422?utm_source=public_profile&utm_campaign=the_sauron" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Smartphone Buying Guide
                </a>
              </li>
              <li>
                <a target='__blank' href="https://topmate.io/the_sauron/1681422?utm_source=public_profile&utm_campaign=the_sauron" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Laptop & Gadget Suggestions
                </a>
              </li>
              <li>
                <a target='__blank' href="https://topmate.io/the_sauron/1693712?utm_source=public_profile&utm_campaign=the_sauron" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Coding Tuition & Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Sauron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
