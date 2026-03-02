export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  rating: number;
  stock: number;
  bestSeller?: boolean;
}

export const CATEGORIES = [
  "Laptops",
  "Networking",
  "Security",
  "Printers",
  "Software",
  "Accessories"
];

export const BRANDS = [
  "ACER", "HP", "Dell", "Lenovo", "Canon", "Epson", "Samsung", "Cisco", "Kaspersky", "Microsoft", "Evolis"
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Dell XPS 15 9530",
    category: "Laptops",
    brand: "Dell",
    price: 2499,
    description: "High-performance laptop with 13th Gen Intel Core processors and InfinityEdge display.",
    features: ["15.6 inch 4K OLED", "Intel Core i9", "32GB DDR5 RAM", "1TB NVMe SSD"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/laptop-product-1-d7d5ade2-1772395109043.webp",
    rating: 4.9,
    stock: 15,
    bestSeller: true
  },
  {
    id: "2",
    name: "HP Spectre x360",
    category: "Laptops",
    brand: "HP",
    price: 1899,
    description: "Versatile 2-in-1 laptop with stunning design and powerful performance.",
    features: ["13.5 inch Touchscreen", "Intel Core i7", "16GB RAM", "512GB SSD"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/hero-laptops-d97cfa99-1772395110518.webp",
    rating: 4.8,
    stock: 10,
  },
  {
    id: "3",
    name: "Cisco Catalyst 9200",
    category: "Networking",
    brand: "Cisco",
    price: 3500,
    description: "Enterprise-grade switch for advanced networking needs.",
    features: ["24 Ports", "PoE+", "Network Essentials", "High Security"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/networking-product-1-59827264-1772395110083.webp",
    rating: 4.7,
    stock: 5,
    bestSeller: true
  },
  {
    id: "4",
    name: "Canon imageRUNNER 2630i",
    category: "Printers",
    brand: "Canon",
    price: 4200,
    description: "Reliable A3 monochrome multi-functional printer for busy offices.",
    features: ["30 ppm", "Print, Copy, Scan", "Cloud-ready", "Advanced Security"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/printer-product-1-899da464-1772395110356.webp",
    rating: 4.6,
    stock: 3
  },
  {
    id: "5",
    name: "Smart Security Camera 4K",
    category: "Security",
    brand: "Samsung",
    price: 299,
    description: "Advanced AI-powered security camera with night vision and 4K recording.",
    features: ["4K Ultra HD", "AI Motion Detection", "Two-way Audio", "Weatherproof"],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/security-product-1-aead6476-1772395110446.webp",
    rating: 4.8,
    stock: 25,
    bestSeller: true
  }
];

export const TRANSLATIONS = {
  en: {
    nav: { home: "Home", shop: "Shop", contact: "Contact", about: "About" },
    hero: { title: "Empowering Your Business with Next-Gen IT", subtitle: "Premium IT solutions, networking, and office equipment in Kinshasa.", shopNow: "Shop Now", support: "Contact Support" },
    products: { featured: "Featured Products", all: "All Products", filters: "Filters", search: "Search products...", addToCart: "Add to Cart", viewDetails: "View Details" },
    cart: { title: "Shopping Cart", empty: "Your cart is empty", checkout: "Checkout", total: "Total", subtotal: "Subtotal" },
    checkout: { title: "Checkout", subtitle: "Complete your information to place the order.", placeOrder: "Place Order" },
    contact: { title: "Contact Us", subtitle: "Get in touch for expert consulting.", name: "Full Name", email: "Email", message: "Message", send: "Send Message" },
    footer: { summary: "USCT SARL is the leading technology distributor in DRC, providing world-class IT solutions.", quickLinks: "Quick Links", contactInfo: "Contact Info" }
  },
  fr: {
    nav: { home: "Accueil", shop: "Boutique", contact: "Contact", about: "À Propos" },
    hero: { title: "Propulsez votre entreprise avec l'informatique de demain", subtitle: "Solutions informatiques premium, réseaux et équipements de bureau à Kinshasa.", shopNow: "Acheter Maintenant", support: "Support Client" },
    products: { featured: "Produits Phares", all: "Tous les Produits", filters: "Filtres", search: "Rechercher des produits...", addToCart: "Ajouter au Panier", viewDetails: "Voir Détails" },
    cart: { title: "Panier", empty: "Votre panier est vide", checkout: "Commander", total: "Total", subtotal: "Sous-total" },
    checkout: { title: "Commander", subtitle: "Complétez vos informations pour passer la commande.", placeOrder: "Passer la Commande" },
    contact: { title: "Contactez-nous", subtitle: "Contactez-nous pour un conseil expert.", name: "Nom Complet", email: "E-mail", message: "Message", send: "Envoyer le message" },
    footer: { summary: "USCT SARL est le leader de la distribution technologique en RDC, offrant des solutions de classe mondiale.", quickLinks: "Liens Rapides", contactInfo: "Infos Contact" }
  },
  sw: {
    nav: { home: "Nyumbani", shop: "Duka", contact: "Mawasiliano", about: "Kuhusu Sisi" },
    hero: { title: "Imarisha Biashara Yako na Teknolojia Mpya", subtitle: "Suluhisho za IT za premium, mitandao, na vifaa vya ofisi huko Kinshasa.", shopNow: "Nunua Sasa", support: "Wasiliana Nasi" },
    products: { featured: "Bidhaa Maalum", all: "Bidhaa Zote", filters: "Vichujio", search: "Tafuta bidhaa...", addToCart: "Weka kwenye Kikapu", viewDetails: "Angalia Maelezo" },
    cart: { title: "Kikapu cha Ununuzi", empty: "Kikapu chako kiko tupu", checkout: "Lipa", total: "Jumla", subtotal: "Jumla Ndogo" },
    checkout: { title: "Lipa", subtitle: "Kamilisha maelezo yako ili kuweka agizo.", placeOrder: "Weka Agizo" },
    contact: { title: "Wasiliana Nasi", subtitle: "Wasiliana nasi kwa ushauri wa kitaalam.", name: "Jina Kamili", email: "Barua Pepe", message: "Ujumbe", send: "Tuma Ujumbe" },
    footer: { summary: "USCT SARL ni msambazaji mkuu wa teknolojia nchini DRC, akitoa suluhisho za kiwango cha kimataifa.", quickLinks: "Viungo vya Haraka", contactInfo: "Maelezo ya Mawasiliano" }
  }
};