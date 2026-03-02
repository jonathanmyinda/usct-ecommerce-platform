import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { products, brands } from '../data/products';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Headphones, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { t } = useApp();
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const features = [
    { icon: <ShieldCheck size={24} />, title: "Certified Partner", desc: "Official distributor for ACER, HP, Dell & more." },
    { icon: <Truck size={24} />, title: "Fast Delivery", desc: "Reliable shipping across Kinshasa and DRC." },
    { icon: <Headphones size={24} />, title: "Technical Support", desc: "Expert IT support team available 24/7." },
    { icon: <Globe size={24} />, title: "Global Sourcing", desc: "Latest technology imported from the US & EU." }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors">
      <Hero />

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center group hover:border-blue-500 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Best Sellers</span>
              <h2 className="text-4xl font-extrabold mt-2 dark:text-white">Featured Equipment</h2>
            </div>
            <Link to="/catalog" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 dark:text-white">Our Strategic Partners</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We partner with the world's leading technology brands to bring you the best-in-class solutions for your business needs.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map(brand => (
            <div key={brand} className="text-2xl font-black text-slate-400 dark:text-slate-600 hover:text-blue-600 transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 max-w-3xl mx-auto leading-tight">Ready to Upgrade Your Company's Technology?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Contact our professional team in Kinshasa today for custom quotes on hardware, networking, and security solutions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all transform hover:scale-105">Get Free Consultation</Link>
            <a href="https://wa.me/243999910010" className="bg-green-500 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

import { MessageCircle } from 'lucide-react';