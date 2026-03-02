import React from 'react';
import { useApp } from '../context/AppContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, t } = useApp();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-3xl font-extrabold mb-4 dark:text-white">{t.cart.empty}</h2>
          <p className="text-slate-500 mb-10 max-w-sm mx-auto">Looks like you haven't added any premium tech to your cart yet.</p>
          <Link to="/catalog" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-700 transition-all">
            Start Shopping <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 transition-colors">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-12 dark:text-white">{t.cart.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-8"
                >
                  <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-xl shrink-0 p-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold dark:text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-slate-500 mb-4">{item.brand} • {item.category}</p>
                    <div className="text-xl font-black text-blue-600">{formatCurrency(item.price)}</div>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors dark:text-white"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-bold dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors dark:text-white"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                  >
                    <Trash2 size={22} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg sticky top-32">
              <h2 className="text-2xl font-bold mb-8 dark:text-white">{t.cart.summary}</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>{t.cart.subtotal}</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Delivery</span>
                  <span className="text-green-500 font-bold">Free (Special Offer)</span>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />
                <div className="flex justify-between text-2xl font-black dark:text-white">
                  <span>{t.cart.total}</span>
                  <span className="text-blue-600">{formatCurrency(cartTotal)}</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/order-confirmation')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3"
              >
                {t.cart.checkout} <ArrowRight size={20} />
              </button>
              
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <Truck size={16} className="text-blue-500" />
                  <span>Prompt delivery service in Kinshasa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};