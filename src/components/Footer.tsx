import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { brands } from '../data/products';

export const Footer: React.FC = () => {
  const { t } = useApp();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">U</div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">USCT SARL</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">United States Contracting & Trading</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.about}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/catalog" className="hover:text-blue-400 transition-colors">{t.nav.catalog}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</Link></li>
              <li><Link to="/cart" className="hover:text-blue-400 transition-colors">{t.nav.cart}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Partners</h3>
            <div className="grid grid-cols-3 gap-2">
              {brands.slice(0, 9).map(brand => (
                <span key={brand} className="text-xs text-slate-500 hover:text-white transition-colors cursor-default">{brand}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0" size={18} />
                <span>Kinshasa, Democratic Republic of the Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <span>+243 999 910 010</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <span>sales@usctcongo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} USCT SARL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};