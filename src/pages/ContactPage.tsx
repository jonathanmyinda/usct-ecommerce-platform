import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {
  const { t } = useApp();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t.contact.success);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const contactInfos = [
    { icon: <Phone size={20} />, title: "Phone", details: ["+243 999 910 010", "+243 819 910 010"] },
    { icon: <Mail size={20} />, title: "Email", details: ["sales@usctcongo.com", "info@usctcongo.com"] },
    { icon: <MapPin size={20} />, title: "Location", details: ["123 Boulevard du 30 Juin", "Kinshasa, Gombe, DRC"] },
    { icon: <Clock size={20} />, title: "Working Hours", details: ["Mon - Fri: 8:00 - 17:00", "Sat: 9:00 - 13:00"] }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 dark:text-white">{t.contact.title}</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Have a question or need a professional IT quote? Our team in Kinshasa is ready to assist you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10" />
              <h3 className="text-2xl font-bold mb-8 relative z-10">{t.contact.info}</h3>
              <div className="space-y-8 relative z-10">
                {contactInfos.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-100 text-sm uppercase tracking-wider mb-1">{info.title}</h4>
                      {info.details.map((d, j) => <p key={j} className="text-white font-medium">{d}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <a 
                  href="https://wa.me/243999910010" 
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all"
                >
                  <MessageCircle size={24} /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact.name}</label>
                    <input required type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                    <input required type="email" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                  <input required type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact.message}</label>
                  <textarea required rows={6} className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? 'Sending...' : (
                    <><Send size={20} /> {t.contact.send}</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};