import React from 'react';
import { useAppContext } from '../context/AppContext';
import { TRANSLATIONS } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export const Contact = () => {
  const { lang } = useAppContext();
  const t = TRANSLATIONS[lang];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-5xl font-bold text-center mb-12">{t.contact.title}</h1>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder={t.contact.name} />
          <Input type="email" placeholder={t.contact.email} />
        </div>
        <Textarea placeholder={t.contact.message} />
        <Button className="w-full bg-blue-600">{t.contact.send}</Button>
      </form>
    </div>
  );
};
export default Contact;