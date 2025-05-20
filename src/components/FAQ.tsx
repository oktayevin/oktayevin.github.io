
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I cash out my coins?",
      answer: "You can convert your VentoCoins to cash through the app at any time. Go to your Wallet, select 'Convert to Cash', choose your amount and preferred payout method (bank transfer, PayPal, etc.). Conversion rates are 100 coins = $1 USD, and the minimum withdrawal is 500 coins ($5 USD)."
    },
    {
      question: "Is PayPal supported?",
      answer: "Yes, Vento fully supports PayPal integration. You can receive payments through PayPal without needing to set up a foreign business entity. We handle the regulatory requirements, allowing you to focus on your work rather than administrative hurdles."
    },
    {
      question: "Can I launch a fundraiser without a business?",
      answer: "Absolutely! Personal fundraising campaigns don't require a business entity. Simply go to the VentoFund section, select 'New Campaign', and follow the setup wizard. You can set goals, add descriptions, upload images, and share your campaign across social media platforms directly from the app."
    },
    {
      question: "How accurate is the step counter?",
      answer: "The VentoGo step counter integrates with your phone's health app and wearable devices for maximum accuracy. Our algorithm also filters out false movements to ensure you're rewarded for actual steps. For best results, carry your phone while walking or sync with a supported fitness device."
    },
    {
      question: "What are the fees for using Vento?",
      answer: "Vento offers a transparent fee structure. Basic accounts are free with standard conversion rates. Personal fundraising has 0% platform fees (only payment processing fees apply). Commercial accounts have a 2.5% + $0.30 transaction fee for payments. Premium features are available through our subscription tiers starting at $4.99/month."
    },
    {
      question: "Is my data secure on Vento?",
      answer: "Security is our top priority. Vento uses end-to-end encryption for all sensitive data and transactions. We're fully GDPR compliant and never sell your personal information. All payment processing meets PCI DSS Level 1 standards, the highest level of certification available."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Got questions about Vento? We've got answers to help you get started.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Didn't find what you're looking for? Reach out to our support team.
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
