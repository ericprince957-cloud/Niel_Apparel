/**
 * Product Data for Niel's Apparel
 * Each product includes name, price, image, category, and WhatsApp order link.
 * Replace image URLs with actual product photos when available.
 */

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'men' | 'women' | 'bridal';
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Ankara Suit",
    price: "₦85,000",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&q=80",
    category: "men",
    description: "Handcrafted Ankara suit with premium gold trim detailing."
  },
  {
    id: 2,
    name: "Elegance Agbada Set",
    price: "₦120,000",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=600&h=800&fit=crop&q=80",
    category: "men",
    description: "Luxurious flowing Agbada with intricate embroidery."
  },
  {
    id: 3,
    name: "Queen Aso-Oke Gown",
    price: "₦95,000",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop&q=80",
    category: "women",
    description: "Stunning Aso-Oke gown with modern silhouette."
  },
  {
    id: 4,
    name: "Urban Fusion Dress",
    price: "₦65,000",
    image: "https://images.unsplash.com/photo-1596783074918-cf1c4f6d4b6c?w=600&h=800&fit=crop&q=80",
    category: "women",
    description: "Contemporary dress blending African prints with urban style."
  },
  {
    id: 5,
    name: "Bridal Lace Ensemble",
    price: "₦250,000",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop&q=80",
    category: "bridal",
    description: "Exquisite bridal lace with traditional Nigerian elements."
  },
  {
    id: 6,
    name: "Traditional Wedding Set",
    price: "₦180,000",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop&q=80",
    category: "bridal",
    description: "Complete traditional wedding attire with matching accessories."
  }
];

export const collections = [
  {
    id: 1,
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80",
    category: "men" as const,
    description: "Suits, Agbadas & Modern Menswear"
  },
  {
    id: 2,
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707998?w=600&h=400&fit=crop&q=80",
    category: "women" as const,
    description: "Gowns, Dresses & Contemporary Wear"
  },
  {
    id: 3,
    name: "Bridal Collection",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=400&fit=crop&q=80",
    category: "bridal" as const,
    description: "Wedding & Traditional Ceremonies"
  }
];

/**
 * Generate WhatsApp order link for a product
 */
export function getWhatsAppLink(productName: string): string {
  const message = encodeURIComponent(`Hi NielsApparel, I want to order ${productName}`);
  return `https://wa.me/2347052656722?text=${message}`;
}
