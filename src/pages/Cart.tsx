import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { formatPrice } from '../lib/utils';
import { TRANSLATIONS } from '../data/mockData';
import { Button } from '../components/ui/button';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, lang } = useAppContext();
  const t = TRANSLATIONS[lang];

  if (cart.length === 0) return <div className="p-20 text-center">{t.cart.empty}</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">{t.cart.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-6 p-6 border rounded-2xl">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-blue-600 font-bold">{formatPrice(item.price, lang)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14}/></Button>
                <span>{item.quantity}</span>
                <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14}/></Button>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}><Trash2 size={18}/></Button>
            </div>
          ))}
        </div>
        <div className="p-8 border rounded-3xl bg-slate-50 dark:bg-slate-900">
          <h3 className="text-xl font-bold mb-6">Summary</h3>
          <div className="flex justify-between font-bold text-xl border-t pt-4">
            <span>{t.cart.total}</span>
            <span>{formatPrice(cartTotal, lang)}</span>
          </div>
          <Link to="/checkout"><Button className="w-full mt-8 bg-blue-600">Checkout</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;