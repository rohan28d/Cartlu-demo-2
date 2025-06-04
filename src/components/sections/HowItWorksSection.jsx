import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ShoppingCart, Truck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Search className="h-12 w-12 text-brand-yellow" />,
    title: "Discover Hawkers",
    description: "Use our app to find local fruit and vegetable hawkers near you. Browse their fresh inventory in real-time.",
  },
  {
    icon: <ShoppingCart className="h-12 w-12 text-brand-yellow" />,
    title: "Place Your Order",
    description: "Select your desired items, add them to your cart, and place your order with just a few taps.",
  },
  {
    icon: <Truck className="h-12 w-12 text-brand-yellow" />,
    title: "Quick Delivery/Pickup",
    description: "Choose convenient delivery to your doorstep or opt for a quick pickup from the hawker's location.",
  },
  {
    icon: <Smile className="h-12 w-12 text-brand-yellow" />,
    title: "Enjoy Freshness",
    description: "Savor the taste of fresh, locally-sourced produce while supporting your community's hawkers.",
  },
];

const HowItWorksSection = () => {
  return (
    <div className="text-white rounded-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-brand-dark"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Simple Steps to <span className="gradient-text">Freshness</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full text-center bg-primary-gradient text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 rounded-xl">
                <CardHeader className="items-center pt-8">
                  <div className="bg-white/20 p-4 rounded-full mb-4">
                    {React.cloneElement(step.icon, {className: "h-12 w-12 text-white"})}
                  </div>
                  <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-50">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;