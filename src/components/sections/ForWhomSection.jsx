import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Store, Users, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const targetGroups = [
  {
    icon: <Store className="h-10 w-10 text-brand-orange mb-4" />,
    title: "Local Hawkers & Vendors",
    description: "We provide a digital storefront, inventory management, and wider customer reach, boosting sales and streamlining operations for fruit and vegetable sellers.",
    imageName: "Smiling hawker using a tablet at their stall",
    imageAlt: "A local fruit and vegetable hawker managing orders on a tablet device at their market stall."
  },
  {
    icon: <Users className="h-10 w-10 text-brand-orange mb-4" />,
    title: "Health-Conscious Consumers",
    description: "Access fresh, locally-sourced produce with ease. Discover new vendors, enjoy convenient ordering, and support your community's economy.",
    imageName: "Happy customer receiving a bag of fresh produce",
    imageAlt: "A satisfied customer receiving a delivery of fresh fruits and vegetables from a CartLu partner."
  },
  {
    icon: <Leaf className="h-10 w-10 text-brand-orange mb-4" />,
    title: "Sustainable Communities",
    description: "By connecting local producers directly with consumers, we reduce food miles, support small businesses, and foster a more sustainable local food system.",
    imageName: "Vibrant display of locally grown fruits and vegetables",
    imageAlt: "A colorful and abundant display of various locally grown fruits and vegetables, highlighting freshness."
  }
];

const ForWhomSection = () => {
  return (
    <div className="text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Who We <span className="gradient-text">Serve</span>
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        CartLu is designed to benefit everyone in the local food ecosystem, from the hardworking hawkers to the discerning consumers.
      </motion.p>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {targetGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 bg-white/60 backdrop-blur-sm border-orange-200">
              <img  
                className="w-full h-48 object-cover" 
                alt={group.imageAlt}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <CardHeader className="items-center text-center">
                {group.icon}
                <CardTitle className="text-xl text-brand-dark">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{group.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForWhomSection;