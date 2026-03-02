import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">U</span>
            </div>
            <span className="font-bold text-xl text-white">USCT SARL</span>
          </Link>
          <p className="text-sm leading-relaxed">{t.footer.about}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">{t.footer.quickLinks}</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link></li>
            <li><Link to="/catalog" className="hover:text-white transition-colors">{t.nav.catalog}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Categories</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/catalog?cat=Laptops" className="hover:text-white transition-colors">Laptops</Link></li>
            <li><Link to="/catalog?cat=Networking" className="hover:text-white transition-colors">Networking</Link></li>
            <li><Link to="/catalog?cat=Security" className="hover:text-white transition-colors">Security Systems</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" /><span>+243 999 910 010</span></li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /><span>sales@usctcongo.com</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;