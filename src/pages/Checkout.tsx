import React from 'react';
import { useAppContext } from '../context/AppContext';
import { TRANSLATIONS } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export const Checkout = () => {
  const { lang } = useAppContext();
  const t = TRANSLATIONS[lang];

  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">{t.checkout.title}</h1>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <Input placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Input placeholder="Address" required />
        <Button className="w-full bg-blue-600">{t.checkout.placeOrder}</Button>
      </form>
    </div>
  );
};
export default Checkout;