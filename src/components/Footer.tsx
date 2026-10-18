import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="Niel's Apparel Home">
              <ShoppingBag className="w-6 h-6 text-gold" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Niel's <span className="text-gold">Apparel</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Premium custom African & urban wear. Crafting elegance, one stitch at a time.
            </p>
            {/* Verified Business Badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-gold/20 rounded-sm px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 text-gold" aria-hidden="true" />
              <span className="text-gold text-xs font-medium">Verified Business</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li><a href="#collections" className="text-white/50 hover:text-gold text-sm transition-colors">Collections</a></li>
                <li><a href="#products" className="text-white/50 hover:text-gold text-sm transition-colors">Shop</a></li>
                <li><a href="#about" className="text-white/50 hover:text-gold text-sm transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-white/50 hover:text-gold text-sm transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <nav aria-label="Legal pages navigation">
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-white/50 hover:text-gold text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/50 hover:text-gold text-sm transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/cookie-policy" className="text-white/50 hover:text-gold text-sm transition-colors">Cookie Policy</Link></li>
                <li><Link to="/refund-policy" className="text-white/50 hover:text-gold text-sm transition-colors">Refund Policy</Link></li>
              </ul>
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com/nielsapparel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/nielsapparel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/nielsapparel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/50 text-sm">
              <a href="https://wa.me/2347052656722" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                WhatsApp: +234 705 265 6722
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs text-center md:text-left">
              © {currentYear} Niel's Apparel. All rights reserved. Built by{' '}
              <span className="text-gold font-medium">Vector Codes</span>.
            </p>
            <p className="text-white/40 text-xs">
              Compliant with GDPR & NDPR regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
