import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBasket, Users, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToDownload = (e) => {
    e.preventDefault();
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-primary-gradient text-white min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6 flex justify-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Leaf className="h-16 w-16 text-brand-turmeric" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Freshness Delivered. <br className="hidden md:block" />
            <span className="block md:inline">Empowering Local Vendors.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-orange-50">
            CartLu connects you with local fruit and vegetable vendors, bringing the freshest produce right to your fingertips while supporting small businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-brand-saffron hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg group"
              onClick={scrollToDownload}
            >
              Get The App
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-brand-saffron shadow-lg transform hover:scale-105 transition-transform duration-300 px-8 py-3 text-lg"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById('about');
                if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="glassmorphic-card p-6 text-left text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <ShoppingBasket className="h-10 w-10 text-brand-turmeric mb-3" />
            <h3 className="text-xl font-semibold mb-2">Vast Selection</h3>
            <p className="text-sm text-orange-100">Access a wide variety of fresh fruits and vegetables from numerous local vendors.</p>
          </div>
          <div className="glassmorphic-card p-6 text-left text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <Users className="h-10 w-10 text-brand-turmeric mb-3" />
            <h3 className="text-xl font-semibold mb-2">Support Local</h3>
            <p className="text-sm text-orange-100">Every purchase directly supports local vendors and strengthens your community.</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-light to-transparent"></div>
    </section>
  );
};

export default HeroSection;