import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { toast } from 'sonner';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, t } = useApp();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button onClick={() => navigate('/catalog')} className="text-blue-600 font-bold flex items-center gap-2 mx-auto">
            <ArrowLeft size={20} /> Back to Catalog
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const whatsappLink = `https://wa.me/243999910010?text=Hello USCT, I am interested in the ${product.name} (${product.brand}). Can you provide more details?`;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-2 cursor-pointer hover:border-blue-500 transition-colors">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain opacity-60" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{product.brand}</span>
                <span className="text-slate-400 text-sm">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <div className="text-3xl font-black text-blue-600 mb-8">
                {formatCurrency(product.price)}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="font-bold text-lg dark:text-white flex items-center gap-2">
                <CheckCircle2 className="text-blue-500" size={20} /> {t.product.specs}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-95"
              >
                <ShoppingCart size={24} /> {t.product.addToCart}
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl shadow-green-500/20 active:scale-95"
              >
                <MessageCircle size={24} /> {t.product.whatsapp}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-bold block dark:text-slate-300">Official Warranty</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                  <Truck size={24} />
                </div>
                <span className="text-xs font-bold block dark:text-slate-300">Fast Delivery</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xs font-bold block dark:text-slate-300">Secure Payment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};