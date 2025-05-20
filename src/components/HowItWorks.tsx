
import React, { useEffect, useRef } from 'react';
import { Coins, ArrowRight, Wallet, HandHeart } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.step-item');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('active');
              }, index * 300);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vento makes it easy to earn, fund, and get paid globally with just a few steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="step-item scroll-reveal flex flex-col items-center text-center p-6 rounded-xl card-gradient shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
              <Coins size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Walk & Earn Coins</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Turn your daily steps into valuable VentoCoins through our VentoGo reward engine.
            </p>
          </div>
          
          <div className="step-item scroll-reveal flex flex-col items-center text-center p-6 rounded-xl card-gradient shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
              <Wallet size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Use or Convert Coins</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fund dreams with your coins or convert them to cash whenever you need.
            </p>
          </div>
          
          <div className="step-item scroll-reveal flex flex-col items-center text-center p-6 rounded-xl card-gradient shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
              <ArrowRight size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Receive Payments</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get paid internationally through PayPal or Stripe without needing a foreign company.
            </p>
          </div>
          
          <div className="step-item scroll-reveal flex flex-col items-center text-center p-6 rounded-xl card-gradient shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
              <HandHeart size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Launch Campaigns</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create crowdfunding campaigns and issue invoices with VentoPro.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Vento app dashboard" 
              className="w-full h-auto object-cover hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
