import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { t } = useApp();
  
  const heroImage = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/hero-banner-9ac587ad-1772395454468.webp";

  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="USCT Hero" 
          className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            {t.hero.head}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {t.hero.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === 1 ? "text-blue-500" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/catalog" 
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              <ShoppingBag size={20} />
              {t.hero.cta}
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all backdrop-blur-sm"
            >
              <MessageCircle size={20} />
              {t.hero.support}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};