import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Regular Customer',
    avatarText: 'PS',
    avatarImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: "CartLu ने मेरी सब्जी खरीदने की आदतों को बदल दिया है! सब्जियां हमेशा ताज़ी होती हैं, और मैं स्थानीय विक्रेताओं की मदद कर पाती हूं।",
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'सब्जी विक्रेता',
    avatarText: 'RK',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    quote: "CartLu के साथ जुड़ने के बाद मेरी दैनिक बिक्री 40% बढ़ गई है! नए ग्राहकों तक पहुंचना अब बहुत आसान हो गया है।",
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Patel',
    role: 'फल विक्रेता',
    avatarText: 'MP',
    avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    quote: "CartLu के साथ इन्वेंटरी और ऑर्डर मैनेज करना बहुत आसान हो गया है। अब मैं बेहतर सेवा दे पाती हूं।",
    rating: 4,
  },
  {
    id: 4,
    name: 'Amit Singh',
    role: 'नियमित ग्राहक',
    avatarText: 'AS',
    avatarImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    quote: "ताज़ी सब्जियां और फल घर बैठे मिलना बहुत सुविधाजनक है। क्वालिटी हमेशा अच्छी होती है।",
    rating: 5,
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="text-center relative overflow-hidden">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        हमारे <span className="gradient-text">ग्राहक कहते हैं</span>
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        CartLu को खास बनाने वाले हमारे मूल्यवान ग्राहकों और समर्पित विक्रेताओं की राय।
      </motion.p>

      <div className="relative h-[450px] sm:h-[380px] md:h-[320px] max-w-3xl mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full"
          >
            <Card className="bg-gradient-to-br from-brand-saffron/10 via-brand-turmeric/10 to-brand-mehendi/5 p-6 md:p-8 rounded-xl shadow-xl border-brand-saffron/30 min-h-[280px] flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4 border-4 border-brand-saffron/50">
                  <AvatarImage src={currentTestimonial.avatarImage} alt={currentTestimonial.name} />
                  <AvatarFallback className="bg-brand-saffron text-white text-2xl">{currentTestimonial.avatarText}</AvatarFallback>
                </Avatar>
                <p className="text-lg md:text-xl font-medium text-gray-700 italic mb-4">
                  "{currentTestimonial.quote}"
                </p>
                <div className="flex mb-2">
                  {Array(currentTestimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-turmeric fill-brand-turmeric" />
                  ))}
                  {Array(5 - currentTestimonial.rating).fill(0).map((_, i) => (
                    <Star key={i+currentTestimonial.rating} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-md font-semibold text-brand-dark">{currentTestimonial.name}</p>
                <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handlePrev} 
          className="rounded-full border-brand-saffron text-brand-saffron hover:bg-brand-saffron hover:text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleNext} 
          className="rounded-full border-brand-saffron text-brand-saffron hover:bg-brand-saffron hover:text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-brand-saffron scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;