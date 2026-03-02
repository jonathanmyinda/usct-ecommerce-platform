import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MessageCircle, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { formatPrice } from '../lib/utils';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, addToCart } = useAppContext();
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) return <div className="p-20 text-center">Not found</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <img src={product.image} alt={product.name} className="w-full rounded-3xl border" />
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl font-black text-blue-600">{formatPrice(product.price, lang)}</p>
          <p className="text-lg text-slate-600">{product.description}</p>
          <div className="flex gap-4">
            <Button size="lg" className="flex-1 bg-blue-600" onClick={() => { addToCart(product); toast.success('Added'); }}>Add to Cart</Button>
            <Button size="lg" variant="outline" className="flex-1 border-green-500 text-green-600">WhatsApp</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;