
import React from 'react';
import { Globe, ShieldCheck, Coins, Wallet } from 'lucide-react';

const ValueProps = () => {
  return (
    <section id="why-vento" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Vento?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've designed Vento to address the unique challenges faced by creators, freelancers, and students in today's global economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full gradient-bg text-white mr-4">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Access Without Red Tape</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access PayPal, Stripe, and other global payment systems without the need to set up a foreign business entity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full gradient-bg text-white mr-4">
                <Coins size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Monetize Your Movement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Turn your daily steps into valuable coins that can be used within the app or converted to real currency.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full gradient-bg text-white mr-4">
                <Wallet size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">All-in-One Financial Suite</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  One app for support, payments, crowdfunding, and invoicing – simplifying your financial management.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full gradient-bg text-white mr-4">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security and Compliance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data and transactions are secured with industry-standard encryption and GDPR compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4">Perfect for Your Needs</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold">Young Creators & Influencers (18-35)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monetize your audience and receive global payments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold">Freelancers & Digital Nomads</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Get paid from clients worldwide without complex business structures.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-semibold">Students & Young Entrepreneurs</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Launch support campaigns and fund your education or startup.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="inline-block rounded-full bg-vento-primary/10 px-3 py-1 text-sm text-vento-primary font-medium mb-2">
                    Social Proof
                  </div>
                  <h4 className="text-xl font-bold">Used by creators, freelancers, and students from over 20 countries</h4>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">JP</div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">MR</div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">AK</div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">TN</div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">SL</div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">+15</div>
                </div>
                
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Join our growing community of users who are transforming their digital and physical presence into financial opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
