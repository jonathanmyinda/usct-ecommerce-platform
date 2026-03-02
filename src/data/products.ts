export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  specs: string[];
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'HP EliteBook 840 G10',
    brand: 'HP',
    category: 'Laptops',
    price: 1250.00,
    description: 'Enterprise-grade performance with the latest Intel Core processors and advanced security features.',
    specs: ['Intel Core i7-1355U', '16GB DDR5 RAM', '512GB NVMe SSD', '14" WUXGA Display'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/laptop-premium-928820d2-1772395453995.webp',
    featured: true
  },
  {
    id: 'p2',
    name: 'Cisco Catalyst 1000 Series',
    brand: 'Cisco',
    category: 'Networking',
    price: 850.00,
    description: 'Enterprise-grade networking switch designed for small businesses and branch offices.',
    specs: ['24 Port Gigabit Ethernet', '4 x 10G SFP+ uplinks', 'Fanless design', 'PoE+ support'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/networking-gear-cb1756fc-1772395452789.webp',
    featured: true
  },
  {
    id: 'p3',
    name: 'Canon imageRUNNER 2730i',
    brand: 'Canon',
    category: 'Printers',
    price: 2400.00,
    description: 'High-performance A3 black and white multifunction printer for demanding office environments.',
    specs: ['30 ppm print speed', 'Print, Copy, Scan, Send', 'Color touch panel', 'Cloud connectivity'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/office-printer-bc5e882d-1772395454405.webp',
    featured: true
  },
  {
    id: 'p4',
    name: 'Samsung 4K Surveillance Set',
    brand: 'Samsung',
    category: 'Security',
    price: 1100.00,
    description: 'Professional-grade security camera system with night vision and remote monitoring.',
    specs: ['4 x 4K Dome Cameras', '8-Channel NVR', '2TB HDD Included', 'Mobile App Support'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/security-camera-0c7d78cb-1772395454244.webp',
    featured: true
  },
  {
    id: 'p5',
    name: 'Logitech MX Master 3S',
    brand: 'Logitech',
    category: 'Accessories',
    price: 99.00,
    description: 'Master-level precision and comfort for power users and creatives.',
    specs: ['8K DPI sensor', 'Quiet click switches', 'MagSpeed scrolling', 'USB-C charging'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/it-accessories-e5e578cf-1772395454063.webp'
  },
  {
    id: 'p6',
    name: 'Dell Latitude 7440',
    brand: 'Dell',
    category: 'Laptops',
    price: 1350.00,
    description: 'Premium business laptop with carbon fiber or aluminum finish and exceptional battery life.',
    specs: ['Intel Core i5-13th Gen', '16GB RAM', '256GB SSD', 'FHD+ Anti-glare Display'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1571631d-031d-4a11-89f0-5627d815a0f1/laptop-premium-928820d2-1772395453995.webp'
  }
];

export const brands = [
  'ACER', 'HP', 'Dell', 'Lenovo', 'Canon', 'Epson', 'Samsung', 'Cisco', 'Kaspersky', 'Microsoft', 'Evolis'
];