import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Shield, Network, Printer } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { PRODUCTS, TRANSLATIONS, BRANDS } from "../data/mockData";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";

export const Home = () => {
  const { lang } = useAppContext();
  const t = TRANSLATIONS[lang];

  return (
    <div className="flex flex-col gap-20 pb-20">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/hero-networking-5ecf8ad2-1772395109974.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{t.hero.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop"><Button size="lg" className="bg-blue-600 px-8">{t.hero.shopNow} <ArrowRight className="ml-2" size={18} /></Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8">{t.hero.support}</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Laptops", icon: Laptop, color: "bg-blue-500" },
            { name: "Networking", icon: Network, color: "bg-indigo-500" },
            { name: "Security", icon: Shield, color: "bg-emerald-500" },
            { name: "Printers", icon: Printer, color: "bg-amber-500" },
          ].map((cat, i) => (
            <Link key={i} to={`/shop?cat=${cat.name}`} className="group p-8 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className={`${cat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}><cat.icon size={24} /></div>
              <h3 className="font-bold text-xl">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div><h2 className="text-3xl font-bold mb-2">{t.products.featured}</h2><p className="text-slate-500">Premium technology for your business.</p></div>
          <Link to="/shop" className="text-blue-600 font-medium flex items-center gap-1">View All <ArrowRight size={18} /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 border-y">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-12">
          {BRANDS.map(brand => <div key={brand} className="text-2xl font-black text-slate-300 dark:text-slate-700 cursor-default">{brand}</div>)}
        </div>
      </section>
    </div>
  );
};
export default Home;