import { collections } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollections() {
  const scrollToProducts = (category: string) => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collections" className="py-20 md:py-28 bg-white" aria-labelledby="collections-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Explore</p>
          <h2 id="collections-heading" className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Featured Collections
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" aria-hidden="true"></div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <article
              key={collection.id}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer"
              onClick={() => scrollToProducts(collection.category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToProducts(collection.category)}
              aria-label={`View ${collection.name}`}
            >
              <img
                src={collection.image}
                alt={collection.description}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-2">
                  {collection.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">{collection.description}</p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Explore <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
