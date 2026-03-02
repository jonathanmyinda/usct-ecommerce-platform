import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatCurrency } from '../lib/utils';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MessageSquare, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const OrderConfirmation: React.FC = () => {
  const { cart, cartTotal, t } = useApp();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">{t.cart.empty}</h2>
          <Link to="/catalog">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Go back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = '243999910010';
    const nl = String.fromCharCode(10);
    
    let itemDetails = "";
    cart.forEach(item => {
      itemDetails += "- " + item.name + " (x" + item.quantity + "): " + formatCurrency(item.price * item.quantity) + nl;
    });
    
    let message = "*NEW ORDER - USCT SARL*" + nl + nl;
    message += "*Customer Details:*" + nl;
    message += "- Name: " + formData.fullName + nl;
    message += "- Phone: " + formData.phone + nl;
    message += "- Email: " + formData.email + nl;
    message += "- Address: " + formData.address + nl;
    if (formData.notes) message += "- Notes: " + formData.notes + nl;
    message += nl + "*Order Summary:*" + nl + itemDetails + nl;
    message += "*Total: " + formatCurrency(cartTotal) + "*";

    const encodedMessage = encodeURIComponent(message);
    window.open("https://wa.me/" + phoneNumber + "?text=" + encodedMessage, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/cart" className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors dark:text-white">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold dark:text-white">{t.checkout.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <CheckCircle2 className="text-green-500" size={24} />
                {t.checkout.items}
              </h2>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-lg p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold dark:text-white truncate">{item.name}</h4>
                      <p className="text-xs text-slate-500">{item.brand}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs font-medium dark:text-slate-400">Qty: {item.quantity}</span>
                        <span className="text-sm font-black text-blue-600">{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-dashed border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{t.cart.total}</span>
                  <span className="text-2xl font-black text-blue-600">{formatCurrency(cartTotal)}</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 p-6 rounded-2xl"
            >
              <p className="text-blue-700 dark:text-blue-300 font-semibold text-center leading-relaxed">
                {t.checkout.paymentNotice}
              </p>
            </motion.div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 order-1 lg:order-2 h-fit">
            <h2 className="text-2xl font-bold mb-8 dark:text-white">{t.checkout.personalInfo}</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="dark:text-slate-300">{t.checkout.name}</Label>
                  <Input 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="rounded-xl border-slate-200 dark:border-slate-800"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="dark:text-slate-300">{t.checkout.phone}</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+243 ..." 
                    className="rounded-xl border-slate-200 dark:border-slate-800"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-slate-300">{t.checkout.email}</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  className="rounded-xl border-slate-200 dark:border-slate-800"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="dark:text-slate-300">{t.checkout.address}</Label>
                <Input 
                  id="address" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street, District, City" 
                  className="rounded-xl border-slate-200 dark:border-slate-800"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="dark:text-slate-300">{t.checkout.notes}</Label>
                <Textarea 
                  id="notes" 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any special instructions..." 
                  className="rounded-xl border-slate-200 dark:border-slate-800 min-h-[100px]"
                />
              </div>

              <Button 
                onClick={handleWhatsAppOrder}
                disabled={!formData.fullName || !formData.phone || !formData.address}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-2xl transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                <MessageSquare size={20} />
                {t.checkout.confirm}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;