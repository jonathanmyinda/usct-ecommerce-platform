import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Moon, Sun, Globe, Menu, X, Search, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { cn, formatCurrency } from '../../lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { products, Product } from '../../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { language, setLanguage, theme, toggleTheme, cartCount, t } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query)
    ).slice(0, 5); // Limit results for better UI

    setSearchResults(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchFocused(false);
    setSearchQuery('');
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchFocused(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">U</span>
          </div>
          <span className="font-bold text-xl tracking-tighter text-slate-900 dark:text-white hidden sm:block">USCT SARL</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">{t.nav.home}</Link>
          <Link to="/catalog" className="text-sm font-semibold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">{t.nav.catalog}</Link>
          <Link to="/contact" className="text-sm font-semibold hover:text-blue-600 transition-colors dark:text-slate-300 dark:hover:text-blue-400">{t.nav.contact}</Link>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} className="flex-1 max-w-md relative hidden md:block">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                type="text"
                placeholder={t.nav.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="pl-10 h-11 bg-slate-100 dark:bg-slate-900 border-none rounded-full w-full focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
              />
            </div>
          </form>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {isSearchFocused && (searchQuery.trim() !== '' || searchResults.length > 0) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                {searchResults.length > 0 ? (
                  <div className="p-2">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors group"
                      >
                        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold dark:text-white truncate group-hover:text-blue-600 transition-colors">{product.name}</h4>
                          <p className="text-xs text-slate-500">{product.brand} • {product.category}</p>
                        </div>
                        <div className="text-sm font-black text-blue-600">
                          {formatCurrency(product.price)}
                        </div>
                      </Link>
                    ))}
                    <button 
                      onClick={handleSearchSubmit}
                      className="w-full mt-2 py-3 text-center text-sm font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      View all results <ChevronRight size={16} />
                    </button>
                  </div>
                ) : searchQuery.trim() !== '' ? (
                  <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                    No results found for "{searchQuery}"
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <div className="relative group">
            <button className="flex items-center gap-1.5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white">
              <Globe size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">{language}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1">
              {(['en', 'fr', 'sw'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors",
                    language === l ? "text-blue-600 bg-blue-50/50 dark:bg-blue-900/20" : "text-slate-600 dark:text-slate-400"
                  )}
                >
                  {l === 'en' ? 'ENGLISH' : l === 'fr' ? 'FRANÇAIS' : 'SWAHILI'}
                </button>
              ))}
            </div>
          </div>

          <Link to="/cart" className="p-2.5 relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors dark:text-white">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-blue-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-950 scale-110">
                {cartCount}
              </span>
            )}
          </Link>

          <button className="lg:hidden p-2 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-white dark:bg-slate-950 px-4 py-8 overflow-hidden"
          >
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input
                type="text"
                placeholder={t.nav.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-slate-100 dark:bg-slate-900 border-none rounded-xl w-full dark:text-white"
              />
            </div>
            
            <div className="space-y-6">
              <Link to="/" className="block text-xl font-bold dark:text-white">{t.nav.home}</Link>
              <Link to="/catalog" className="block text-xl font-bold dark:text-white">{t.nav.catalog}</Link>
              <Link to="/contact" className="block text-xl font-bold dark:text-white">{t.nav.contact}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};