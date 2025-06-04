import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Smile, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const impacts = [
  {
    icon: <TrendingUp className="h-10 w-10 text-brand-orange" />,
    value: "30%+",
    label: "Increase in Hawker Sales",
    description: "Our platform helps hawkers reach a wider audience, significantly boosting their daily sales and income."
  },
  {
    icon: <Users className="h-10 w-10 text-brand-orange" />,
    value: "500+",
    label: "Hawkers Empowered",
    description: "We're proud to have partnered with numerous local vendors, providing them with digital tools for growth."
  },
  {
    icon: <Smile className="h-10 w-10 text-brand-orange" />,
    value: "95%",
    label: "Customer Satisfaction",
    description: "Users love the convenience and freshness, rating their experience highly and supporting local businesses."
  },
  {
    icon: <Sprout className="h-10 w-10 text-brand-orange" />,
    value: "10 Tons",
    label: "Fresh Produce Delivered",
    description: "Facilitating the connection between fresh local produce and happy customers, reducing waste."
  }
];

const ImpactSection = () => {
  return (
    <div className="text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our <span className="gradient-text">Impact</span>
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We're not just building an app; we're fostering a community and creating tangible positive change for local economies and lifestyles.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {impacts.map((impact, index) => (
          <motion.div
            key={impact.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="h-full p-6 bg-gradient-to-br from-orange-50 to-amber-100 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="flex flex-col items-center justify-center space-y-3">
                {impact.icon}
                <p className="text-4xl font-bold gradient-text">{impact.value}</p>
                <p className="text-md font-semibold text-brand-dark">{impact.label}</p>
                <p className="text-sm text-gray-600">{impact.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;