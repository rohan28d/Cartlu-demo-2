import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="h-10 w-10 text-brand-orange mb-4" />,
      title: "Our Mission",
      description: "To empower local fruit and vegetable vendors by providing a robust digital platform, expanding their reach and streamlining their daily operations.",
    },
    {
      icon: <Users className="h-10 w-10 text-brand-orange mb-4" />,
      title: "Who We Are",
      description: "CartLu is a passionate team dedicated to bridging the gap between local produce sellers and consumers, fostering a sustainable and community-focused ecosystem.",
    },
    {
      icon: <Zap className="h-10 w-10 text-brand-orange mb-4" />,
      title: "Our Vision",
      description: "To become the leading digital marketplace for fresh, locally-sourced produce, making healthy eating accessible and convenient for everyone while uplifting local economies.",
    },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
      alt: "Fresh vegetables at local market"
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e",
      alt: "Vendor arranging fresh produce"
    },
    {
      src: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499",
      alt: "Mobile payment at local market"
    }
  ];

  return (
    <div className="text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About <span className="gradient-text">CartLu</span>
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We are revolutionizing the way you buy fruits and vegetables. CartLu is committed to helping local vendors thrive in the digital age, providing them with tools to reach more customers and manage their inventory efficiently.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index + 0.3 }}
          >
            <Card className="h-full hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-orange-200">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="text-xl text-brand-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="relative overflow-hidden w-full">
        <motion.div 
          className="flex gap-6 py-4"
          animate={{ x: [0, -1920, 0] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="relative flex-none w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;