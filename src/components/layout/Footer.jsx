import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-6 w-6" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-6 w-6" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-6 w-6" />, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { title: 'Company', links: [{ label: 'About Us', href: '#about' }, { label: 'Careers', href: '#' }, { label: 'Press', href: '#' }] },
    { title: 'Support', links: [{ label: 'Help Center', href: '#' }, { label: 'Contact Us', href: '#' }, { label: 'FAQs', href: '#' }] },
    { title: 'Legal', links: [{ label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' }, { label: 'Cookie Policy', href: '#' }] },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-brand-dark text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, '#hero')}>
              <Leaf className="h-8 w-8 text-brand-orange" />
              <span className="text-2xl font-bold text-white">CartLu</span>
            </Link>
            <p className="text-sm">Empowering local hawkers, delivering fresh produce to your doorstep.</p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} className="text-gray-400 hover:text-brand-orange transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map(section => (
            <div key={section.title}>
              <p className="font-semibold text-white mb-4">{section.title}</p>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} onClick={(e) => link.href.startsWith('#') ? scrollToSection(e, link.href) : null} className="text-sm text-gray-400 hover:text-brand-orange transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} CartLu. All rights reserved. Built with 🧡 by Hostinger Horizons.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;