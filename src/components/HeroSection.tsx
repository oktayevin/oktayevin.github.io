import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet, Send, Coins, ArrowLeft, ArrowDown, Download, Upload, Paypal } from 'lucide-react';

const HeroSection = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY;
        const offset = Math.min(scrollY * 0.2, 50);
        phoneRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-vento-light-purple/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-vento-soft-blue/20 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="gradient-text">Take a Step,</span>
              <br />
              <span>Create Value</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Vento turns your steps into coins, your hustle into income, and your ideas into campaigns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="btn-primary text-base">
                Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-secondary text-base">
                Join Waitlist
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Secure Payments</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Data Privacy Friendly</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end" ref={phoneRef}>
            <div className="relative w-64 md:w-80 h-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-vento-primary to-vento-secondary opacity-20 rounded-[3rem] blur-xl transform scale-95"></div>
              <div className="relative bg-white dark:bg-gray-900 border-8 border-gray-800 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="pt-6 px-4">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2">
                        <span className="font-bold">JD</span>
                      </div>
                      <div>
                        <div className="font-bold">John Doe</div>
                        <div className="text-xs text-gray-500">Premium Member</div>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                      <Wallet className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 text-white mb-4">
                    <div className="text-sm opacity-80 mb-1">Available Balance</div>
                    <div className="text-2xl font-bold mb-2">$2,458.35</div>
                    <div className="flex justify-between text-xs opacity-80">
                      <span>**** 4582</span>
                      <span>05/27</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-vento-primary to-vento-secondary rounded-xl p-4 text-white mb-4">
                    <div className="text-sm opacity-80 mb-1">Coin Balance</div>
                    <div className="text-2xl font-bold mb-2">1,245 coins</div>
                    <div className="flex justify-between text-xs opacity-80">
                      <span>≈ $12.45 USD</span>
                      <span>+213 this week</span>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <div className="font-medium mb-2">Quick Actions</div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-1">
                          <Send className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs">Send</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-1">
                          <Download className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-xs">Receive</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-1">
                          <Coins className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-xs">Coins</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-1">
                          <ArrowRight className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <span className="text-xs">Transfer</span>
                      </div>
                    </div>
                  </div>
                
                  <div className="rounded-t-xl bg-gray-100 dark:bg-gray-800 px-3 py-4 text-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Recent Transactions</span>
                      <span className="text-vento-primary text-xs">View All</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-2 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-3 flex items-center justify-center">
                            <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium">Received</div>
                            <div className="text-xs text-gray-500">From PayPal</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">+$150.00</div>
                          <div className="text-xs text-gray-500">May 12</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white dark:bg-gray-700 p-2 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 mr-3 flex items-center justify-center">
                            <Coins className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <div className="font-medium">Coin Earned</div>
                            <div className="text-xs text-gray-500">Daily Steps</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">+97 coins</div>
                          <div className="text-xs text-gray-500">Today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
