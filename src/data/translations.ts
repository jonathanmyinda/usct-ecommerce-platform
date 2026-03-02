export type Language = 'en' | 'fr' | 'sw';
export type Theme = 'light' | 'dark';

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  specs: Record<string, string>;
  image: string;
  featured?: boolean;
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      shop: "Shop",
      about: "About",
      contact: "Contact",
      cart: "Cart"
    },
    hero: {
      title: "Premium IT Solutions for your Business",
      subtitle: "USCT SARL is your trusted partner for technology in DRC. We provide high-end hardware, networking, and security systems.",
      cta: "Shop Now",
      support: "Contact Support"
    },
    sections: {
      categories: "Top Categories",
      featured: "Featured Products",
      brands: "Our Partners",
      cart: "Your Basket",
      checkout: "Checkout"
    },
    filters: {
      all: "All",
      search: "Search products...",
      sort: "Sort by",
      priceLow: "Price: Low to High",
      priceHigh: "Price: High to Low",
      newest: "Newest"
    },
    cart: {
      empty: "Your cart is empty",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Proceed to Checkout",
      remove: "Remove"
    },
    checkout: {
      details: "Delivery Details",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Delivery Address",
      notes: "Additional Notes",
      confirm: "Confirm Order"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      shop: "Boutique",
      about: "À propos",
      contact: "Contact",
      cart: "Panier"
    },
    hero: {
      title: "Solutions Informatiques Premium pour votre Entreprise",
      subtitle: "USCT SARL est votre partenaire technologique de confiance en RDC. Nous fournissons du matériel haut de gamme, des réseaux et des systèmes de sécurité.",
      cta: "Acheter",
      support: "Support Client"
    },
    sections: {
      categories: "Meilleures Catégories",
      featured: "Produits Vedettes",
      brands: "Nos Partenaires",
      cart: "Votre Panier",
      checkout: "Paiement"
    },
    filters: {
      all: "Tout",
      search: "Rechercher...",
      sort: "Trier par",
      priceLow: "Prix: Croissant",
      priceHigh: "Prix: Décroissant",
      newest: "Nouveautés"
    },
    cart: {
      empty: "Votre panier est vide",
      subtotal: "Sous-total",
      total: "Total",
      checkout: "Passer la commande",
      remove: "Supprimer"
    },
    checkout: {
      details: "Détails de Livraison",
      name: "Nom Complet",
      email: "Email",
      phone: "Téléphone",
      address: "Adresse de Livraison",
      notes: "Notes Additionnelles",
      confirm: "Confirmer la Commande"
    }
  },
  sw: {
    nav: {
      home: "Mwanzo",
      shop: "Duka",
      about: "Kuhusu",
      contact: "Mawasiliano",
      cart: "Kikapu"
    },
    hero: {
      title: "Suluhisho za IT za Premium kwa Biashara Yako",
      subtitle: "USCT SARL ni mshirika wako wa teknolojia anayeaminika nchini DRC. Tunatoa vifaa vya hali ya juu, mitandao, na mifumo ya usalama.",
      cta: "Nunua Sasa",
      support: "Mawasiliano"
    },
    sections: {
      categories: "Kategoria Kuu",
      featured: "Bidhaa Maalum",
      brands: "Washirika Wetu",
      cart: "Kikapu Chako",
      checkout: "Lipa"
    },
    filters: {
      all: "Zote",
      search: "Tafuta bidhaa...",
      sort: "Panga kwa",
      priceLow: "Bei: Chini hadi Juu",
      priceHigh: "Bei: Juu hadi Chini",
      newest: "Mpya zaidi"
    },
    cart: {
      empty: "Kikapu chako ni tupu",
      subtotal: "Jumla ndogo",
      total: "Jumla",
      checkout: "Endelea na Malipo",
      remove: "Ondoa"
    },
    checkout: {
      details: "Maelezo ya Uwasilishaji",
      name: "Jina Kamili",
      email: "Barua pepe",
      phone: "Namba ya Simu",
      address: "Anwani ya Uwasilishaji",
      notes: "Maelezo ya ziada",
      confirm: "Thibitisha Agizo"
    }
  }
};