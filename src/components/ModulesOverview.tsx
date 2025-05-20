
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ModulesOverview = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modules Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the powerful features that make Vento the ultimate fintech solution for creators and freelancers.
          </p>
        </div>
        
        <Tabs defaultValue="ventogo" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <TabsTrigger value="ventogo" className="py-3 data-[state=active]:gradient-bg data-[state=active]:text-white rounded-md">
              VentoGo
            </TabsTrigger>
            <TabsTrigger value="ventofund" className="py-3 data-[state=active]:gradient-bg data-[state=active]:text-white rounded-md">
              VentoFund
            </TabsTrigger>
            <TabsTrigger value="ventopro" className="py-3 data-[state=active]:gradient-bg data-[state=active]:text-white rounded-md">
              VentoPro
            </TabsTrigger>
            <TabsTrigger value="ventocoin" className="py-3 data-[state=active]:gradient-bg data-[state=active]:text-white rounded-md">
              VentoCoin
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
            <TabsContent value="ventogo" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="rounded-full px-3 py-1 text-sm font-medium bg-vento-primary/10 text-vento-primary inline-block mb-4">
                    Step Rewards
                  </div>
                  <h3 className="text-2xl font-bold mb-4">VentoGo: Motion into Value</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our step-based reward engine converts your daily movement into valuable in-app coins. The more you walk, the more you earn.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Automatic step tracking and conversion</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Daily, weekly and monthly goals with bonuses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Challenge friends and earn together</span>
                    </li>
                  </ul>
                  <Button className="btn-primary">Learn More</Button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative max-w-[250px] animate-float">
                    <div className="absolute inset-0 bg-vento-primary/20 rounded-3xl blur-xl transform scale-95"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl p-4">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl mb-3">
                        <div className="text-center mb-2">Today's Progress</div>
                        <div className="flex justify-between mb-2 text-sm">
                          <span>0 steps</span>
                          <span>Goal: 10,000</span>
                        </div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full gradient-bg rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="text-center mt-2 text-xl font-bold">6,500 steps</div>
                      </div>
                      <div className="bg-gradient-to-r from-vento-primary to-vento-secondary rounded-xl p-4 text-white mb-3">
                        <div className="text-sm mb-1">Today's Reward</div>
                        <div className="text-2xl font-bold">+65 coins</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-xl text-center text-sm">
                          <div className="font-semibold">Weekly</div>
                          <div className="text-xl font-bold text-vento-primary">423</div>
                          <div className="text-xs text-gray-500">coins</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-xl text-center text-sm">
                          <div className="font-semibold">All-time</div>
                          <div className="text-xl font-bold text-vento-secondary">1,892</div>
                          <div className="text-xs text-gray-500">coins</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ventofund" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="rounded-full px-3 py-1 text-sm font-medium bg-vento-secondary/10 text-vento-secondary inline-block mb-4">
                    Crowdfunding
                  </div>
                  <h3 className="text-2xl font-bold mb-4">VentoFund: Support Dreams</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Launch and support crowdfunding campaigns for education, startups, or personal goals, all within the app.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Only 5% platform fee for campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Use coins or fiat currency to support others</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Integrated social sharing and progress tracking</span>
                    </li>
                  </ul>
                  <Button className="btn-primary">Explore Campaigns</Button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float">
                    <div className="rounded-xl overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80" 
                        alt="Crowdfunding campaign" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="px-2">
                      <div className="text-sm text-vento-primary font-medium mb-1">EDUCATION</div>
                      <h4 className="text-lg font-bold mb-2">Maria's Coding Bootcamp Fund</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Help Maria attend a 3-month coding bootcamp to kickstart her career in tech.
                      </p>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">$2,345 raised</span>
                          <span className="text-gray-500">of $3,500 goal</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full gradient-bg rounded-full" style={{width: '67%'}}></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm mb-4">
                        <span>42 supporters</span>
                        <span>18 days left</span>
                      </div>
                      <button className="w-full py-2 rounded-lg gradient-bg text-white font-medium">
                        Support with Coins
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ventopro" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="rounded-full px-3 py-1 text-sm font-medium bg-vento-purple/10 text-vento-purple inline-block mb-4">
                    Business Tools
                  </div>
                  <h3 className="text-2xl font-bold mb-4">VentoPro: Global Payments</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Commercial payment suite that lets you issue invoices and get paid from anywhere without needing a foreign business entity.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>PayPal and Stripe integration without foreign company</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Professional invoice generator and tracker</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Multiple currency support and instant notifications</span>
                    </li>
                  </ul>
                  <Button className="btn-primary">Start Invoicing</Button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-full max-w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float">
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-bold text-xl">Invoice</div>
                      <div className="gradient-text font-bold">#2023-156</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-3 mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500">From:</span>
                        <span className="text-sm text-gray-500">To:</span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="font-medium">Your Name</span>
                        <span className="font-medium">Client Inc.</span>
                      </div>
                      <div className="h-px w-full bg-gray-300 dark:bg-gray-600 mb-3"></div>
                      <div className="text-sm mb-1">Web Development Services</div>
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>$1,250.00</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-gray-100 dark:bg-gray-700 rounded-xl">
                        <div className="text-sm text-gray-500">Due Date</div>
                        <div className="font-medium">Jun 15, 2023</div>
                      </div>
                      <div className="text-center p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl">
                        <div className="text-sm">Status</div>
                        <div className="font-medium">Paid</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-lg border border-vento-primary text-vento-primary font-medium">
                        Download
                      </button>
                      <button className="flex-1 py-2 rounded-lg gradient-bg text-white font-medium">
                        New Invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ventocoin" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="rounded-full px-3 py-1 text-sm font-medium bg-vento-soft-blue text-vento-primary inline-block mb-4">
                    Reward Currency
                  </div>
                  <h3 className="text-2xl font-bold mb-4">VentoCoin: Flexible Value</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our in-app reward currency can be used for campaigns, converted to cash, or saved for future opportunities.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Simple 1:1 conversion to cents (100 coins = $1)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Use coins to support campaigns at higher value</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full gradient-bg text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</div>
                      <span>Earn bonus coins through referrals and promotions</span>
                    </li>
                  </ul>
                  <Button className="btn-primary">Learn About Coins</Button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative max-w-[250px] animate-float">
                    <div className="absolute inset-0 bg-vento-primary/20 rounded-xl blur-xl transform scale-95"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-6 flex flex-col items-center justify-center">
                      <div className="w-28 h-28 rounded-xl gradient-bg flex items-center justify-center mb-4">
                        <span className="text-5xl font-bold text-white">V</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">VentoCoin</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Current Value</div>
                        <div className="text-3xl font-bold gradient-text">1 = $0.01</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ModulesOverview;
