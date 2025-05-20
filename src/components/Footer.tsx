
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Instagram, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <a href="#" className="text-2xl font-bold gradient-text">Vento</a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Take a step, create value. The fintech super-app for creators and freelancers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">VentoGo</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">VentoFund</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">VentoPro</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">VentoCoin</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">Support</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-vento-primary dark:hover:text-vento-primary">GDPR Compliance</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2023 Vento. All rights reserved.
              </p>
            </div>
            
            <div className="max-w-md w-full">
              <h4 className="text-sm font-semibold mb-2">Get Vento updates and product launch news</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-full bg-white dark:bg-gray-800"
                />
                <Button className="rounded-full gradient-bg hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
