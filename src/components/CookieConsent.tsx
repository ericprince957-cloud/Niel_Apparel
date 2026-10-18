import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to not block initial render
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-in-bottom"
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-description"
    >
      <div className="max-w-4xl mx-auto bg-black/95 backdrop-blur-sm border border-gold/20 rounded-sm p-4 md:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <p id="cookie-description" className="text-white/80 text-sm leading-relaxed">
                We use cookies to improve your experience. By browsing, you agree to our{' '}
                <Link to="/cookie-policy" className="text-gold hover:underline" target="_blank">
                  Cookie Policy
                </Link>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-white/60 hover:text-white border border-white/20 rounded-sm hover:border-white/40 transition-colors"
              aria-label="Decline cookies"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm bg-gold text-black font-semibold rounded-sm hover:bg-gold-light transition-colors"
              aria-label="Accept cookies"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="p-1 text-white/40 hover:text-white transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
