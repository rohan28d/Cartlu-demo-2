import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ForWhomSection from '@/components/sections/ForWhomSection';
import ImpactSection from '@/components/sections/ImpactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import DownloadAppSection from '@/components/sections/DownloadAppSection';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    className={`py-16 md:py-24 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <SectionWrapper id="about"><AboutSection /></SectionWrapper>
      <SectionWrapper id="how-it-works" className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"><HowItWorksSection /></SectionWrapper>
      <SectionWrapper id="for-whom"><ForWhomSection /></SectionWrapper>
      <SectionWrapper id="impact" className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50"><ImpactSection /></SectionWrapper>
      <SectionWrapper id="testimonials"><TestimonialsSection /></SectionWrapper>
      <SectionWrapper id="download" className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100"><DownloadAppSection /></SectionWrapper>
    </>
  );
};

export default LandingPage;