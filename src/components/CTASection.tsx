
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-vento-primary/5 to-vento-secondary/5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-vento-light-purple/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-vento-soft-blue/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="section-container">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Earn as you move.<br />Grow as you create.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                Join the waitlist today and be among the first to experience the future of fintech for creators and freelancers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="btn-primary">
                  Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="btn-secondary">
                  Become a Founding User
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">321+ users</span> already joined the waitlist
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-vento-primary to-vento-secondary p-8 md:p-12 text-white">
              <div className="relative h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 text-white/10 text-9xl font-bold -mt-6">V</div>
                <h3 className="text-2xl font-bold mb-6 relative">Early Access Benefits</h3>
                <ul className="space-y-4 relative">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-white text-vento-primary flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</div>
                    <span>Priority access to all new features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-white text-vento-primary flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</div>
                    <span>500 bonus VentoCoins to kickstart your journey</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-white text-vento-primary flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</div>
                    <span>Exclusive founder community access</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-white text-vento-primary flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</div>
                    <span>Lower lifetime fees and premium features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
