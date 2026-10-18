import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop&q=80"
          alt="Premium African fashion designs showcase"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
          Custom Tailored Excellence
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Premium Custom African<br />
          <span className="text-gold">&amp; Urban Wear</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Where tradition meets contemporary style. Each piece is meticulously crafted to celebrate your unique identity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold-light transition-colors duration-200 text-sm tracking-wide"
            aria-label="Shop our collection"
          >
            Shop Collection
          </button>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-sm hover:border-gold hover:text-gold transition-colors duration-200 text-sm tracking-wide"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
