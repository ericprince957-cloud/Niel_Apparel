import { useState } from 'react';
import { products, getWhatsAppLink } from '../data/products';
import { MessageCircle, Filter } from 'lucide-react';

type CategoryFilter = 'all' | 'men' | 'women' | 'bridal';

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  const filters: { label: string; value: CategoryFilter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
    { label: 'Bridal', value: 'bridal' },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Designs</p>
          <h2 id="products-heading" className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Shop Our Collection
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" aria-hidden="true"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Filter products by category">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-black text-gold border border-gold'
                  : 'bg-white text-black border border-gray-200 hover:border-gold hover:text-gold'
              }`}
              role="tab"
              aria-selected={activeFilter === filter.value}
              aria-controls="products-grid"
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="tabpanel">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 text-gold text-xs font-medium px-3 py-1 rounded-sm uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 md:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-black mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">{product.price}</span>
                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-sm hover:bg-green-700 transition-colors duration-200"
                    aria-label={`Order ${product.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see what you're looking for?</p>
          <a
            href="https://wa.me/2347052656722?text=Hi%20NielsApparel,%20I%20would%20like%20to%20discuss%20a%20custom%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-sm hover:bg-green-700 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Discuss Custom Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
