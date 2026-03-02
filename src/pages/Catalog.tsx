import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES, BRANDS, TRANSLATIONS } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export const Catalog = () => {
  const { lang } = useAppContext();
  const t = TRANSLATIONS[lang];
  const [searchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('cat') || 'All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
      return matchesSearch && matchesCat && matchesBrand;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
        <h1 className="text-4xl font-bold">{t.products.all}</h1>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <Input 
            placeholder={t.products.search}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 space-y-6">
           <div>
             <h3 className="font-bold mb-4">{t.products.filters}</h3>
             <div className="space-y-2">
               {['All', ...CATEGORIES].map(cat => (
                 <button key={cat} onClick={() => setSelectedCategory(cat)} className={`block text-sm ${selectedCategory === cat ? 'text-blue-600 font-bold' : 'text-slate-600'}`}>{cat}</button>
               ))}
             </div>
           </div>
        </aside>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
export default Catalog;