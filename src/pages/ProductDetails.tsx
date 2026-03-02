import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Truck, RotateCcw, MessageCircle, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { formatPrice } from '../lib/utils';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, addToCart } = useAppContext();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const phoneNumber = '+243999910010';
    const message = `Hello USCT SARL, I am interested in ${product.name} (Price: ${formatPrice(product.price, 'en')}). Can you provide more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border cursor-pointer hover:border-blue-600 transition-colors">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-50" />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {product.brand}
              </span>
              <span className="text-slate-400 text-sm">•</span>
              <span className="text-slate-500 text-sm">{product.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"} />
                ))}
                <span className="font-bold ml-2">{product.rating}</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-green-600 font-medium">{product.stock} in stock</span>
            </div>
          </div>

          <p className="text-4xl font-black text-blue-600">{formatPrice(product.price, lang)}</p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            {product.description}
          </p>

          <div className="space-y-4">
            <h4 className="font-bold">Key Specifications:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700 h-14 text-lg" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 h-14 text-lg border-green-500 text-green-600 hover:bg-green-50" onClick={handleWhatsAppInquiry}>
              <MessageCircle className="mr-2" /> WhatsApp Inquiry
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Warranty</p>
                <p className="text-sm font-medium">1 Year Official</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-blue-600" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Delivery</p>
                <p className="text-sm font-medium">Kinshasa (24h)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="text-blue-600" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Returns</p>
                <p className="text-sm font-medium">7-Day Return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};