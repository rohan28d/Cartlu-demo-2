import React from 'react';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadAppSection = () => {
  return (
    <div className="text-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-gradient p-8 md:p-16 rounded-3xl shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Fresh Produce On The Go!
            </h2>
            <p className="text-lg text-orange-50 mb-8">
              Download the CartLu app today and experience the easiest way to buy fresh fruits and vegetables from local hawkers. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg">
                <Apple className="mr-2 h-6 w-6" /> App Store
              </Button>
              <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg">
                <Play className="mr-2 h-6 w-6" /> Google Play
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img  
              className="max-w-xs sm:max-w-sm w-full h-auto animate-float" 
              alt="Smartphone displaying the CartLu app interface with fresh fruits"
             src="https://images.unsplash.com/photo-1663000803271-903b11c73606" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;